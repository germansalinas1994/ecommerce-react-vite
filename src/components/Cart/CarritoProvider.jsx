import React, { createContext, useContext, useState } from 'react';

// 1. Creamos el contexto
const CarritoContext = createContext({
    carrito: [],
    agregarAlCarrito: () => {}
  });
  
// 3. Creamos el hook personalizado
export const useCarrito = () => {
    return useContext(CarritoContext);
};

// 2. Creamos el Provider
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(p => p.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(p =>
                    p.id === producto.id
                        ? { ...p, cantidad: p.cantidad + producto.cantidad }
                        : p
                );
            } else {
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
