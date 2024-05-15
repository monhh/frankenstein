import { Link } from 'react-router-dom';
import { Auth } from './Auth';
// import { useProfile } from '../hooks/profilehook/useProfile';
import { AuthContext } from '../context/AuthContext';

import { useContext } from 'react';

export const Header = () => {
    const { user } = useContext(AuthContext);
    // const { profile } = useProfile();
    console.log(user);
    return (
        <header className="bg-black p-4 lg:p-8 flex items-center justify-between shadow-md">
            {/* Logo en el lado izquierdo */}
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="./../frankenstein.png"
                        className="h-8 lg:h-10 mr-2"
                        alt="Logo"
                    />
                </Link>
            </div>

            {/* <Auth /> */}

            {/* Menú y botones en el lado derecho */}
            <div className="lg:flex lg:items-center lg:space-x-4 flex-wrap justify-start">
                {/* Contenedor del menú */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4 flex-wrap justify-end">
                    <Link
                        to="/projects"
                        className="text-white hover:text-gray-300"
                    >
                        Proyectos
                    </Link>
                    <Link
                        to="/questions"
                        className="text-white hover:text-gray-300"
                    >
                        Preguntas
                    </Link>
                    <Link to="/crear" className="text-white hover:text-gray-300">
                        Crear
                    </Link>

                    <Link
                        to={`/profile/${user}`}
                        className="text-white hover:text-gray-300"
                    >
                        Mi Cuenta
                    </Link>

                    <input
                        type="text"
                        placeholder="Buscar"
                        className="bg-gray-000 text-white px-2 py-1 rounded focus:outline-none focus:bg-gray-900"
                    />
                </div>

                {/* Contenedor de los botones */}
                {/* <div className="flex space-x-4 mt-2 lg:mt-0">
                    {!user?(
                    <div className="flex space-x-4">
                        <Link
                            to="/login"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                        >
                            Register
                        </Link>
                    </div>
                    ):(
                        <div className="flex space-x-4">
                            <Link 
                             to="/login"
                             className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
                            <button onClick={logout}>
                            Cerrar sesión
                            </button>
                            </Link>
                        </div>
                    )}
                </div> */}
            </div>

            {/* Menú hamburguesa para dispositivos móviles 
            <div className="lg:hidden mt-2">
                <button className="text-white hover:text-gray-300">☰</button>
            </div>*/}

            <Auth />
        </header>
    );
};
