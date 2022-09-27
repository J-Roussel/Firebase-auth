import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from './pages-components/welcome';
import Login from './pages-components/login';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config/firebaseSetUp';
import AuthRoute from "./auth/AuthRoute";

import './App.css';

initializeApp(firebaseConfig.firebaseConfig);

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/welcome"
                    element={
                        <AuthRoute>
                            <Welcome />
                        </AuthRoute>
                    }
                />
                <Route path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;