import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Lancamentos from './pages/Lancamentos';
import Categorias from './pages/Categorias';
import Pessoas from './pages/Pessoas';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <PrivateRoute path="/" element={<Home />} />
                    <PrivateRoute path="/lancamentos" element={<Lancamentos />} />
                    <PrivateRoute path="/categorias" element={<Categorias />} />
                    <PrivateRoute path="/pessoas" element={<Pessoas />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;