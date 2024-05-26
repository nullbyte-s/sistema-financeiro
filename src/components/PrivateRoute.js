import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { usuarioAutenticado } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                usuarioAutenticado ? (
                    <Component {...props} />
                ) : (<Routes><Route exact path="/login" /></Routes>)
            }
        />
    );
};

export default PrivateRoute;