import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    );
};

export default Main;