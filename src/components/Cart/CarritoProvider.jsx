import React, { createContext, useContext, useState } from 'react';

// 1. Creamos el contexto, que es donde vamos a almacenar el estado global en la aplicación
const CarritoContext = createContext({
    carrito: [],
    agregarAlCarrito: () => {}
  });
  
// 3. Creamos el hook personalizado, para poder consumir el contexto desde cualquier componente
export const useCarrito = () => {
    return useContext(CarritoContext);
};

// 2. Creamos el Provider que va a envolver a toda la aplicación, el carrito va a estar disponible en todos los componentes
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);



    // 4. Creamos la función que va a modificar el estado global, recibe un objeto producto con una cantidad
    const agregarAlCarrito = (producto) => {
        // el prevCarrito es el estado anterior, y lo que retorna es el nuevo estado
        setCarrito(prevCarrito => {
            // Buscamos si el producto ya está en el carrito por el id del producto que recibimos
            const productoExistente = prevCarrito.find(p => p.id === producto.id);
            // Si el producto existe, retornamos el estado anterior con la cantidad modificada, los tres puntos en react se llaman spread operator, y lo que hacen es copiar el objeto o array que le sigue
            // En este caso, estamos copiando el producto existente, y modificando la cantidad
            if (productoExistente) {
                debugger;
                return prevCarrito.map(p =>
                    p.id === producto.id
                        ? { ...p, cantidad: p.cantidad + producto.cantidad }
                        : p
                );
            } else {
                // Si el producto no existe, retornamos el estado anterior con el nuevo producto agregado
                return [...prevCarrito, producto];
            }
        });
    };
    

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
