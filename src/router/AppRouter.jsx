import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </div>
    )
}

export default AppRouter;