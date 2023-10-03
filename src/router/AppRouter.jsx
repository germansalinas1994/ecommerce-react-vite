import { Routes,Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={ <Navigate to={"/home"}/> } />
            </Routes>
        </div>
    )
}

export default AppRouter;