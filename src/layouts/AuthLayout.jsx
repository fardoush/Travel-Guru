import React from 'react';
import Header from '../compoments/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <div className="">
        <header>
            <Header/>
        </header>

        <main className="">
            <Outlet/>
        </main>
        
       </div>
    );
};

export default AuthLayout;