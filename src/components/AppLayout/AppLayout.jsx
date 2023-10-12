import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

function AppLayout({value, onChangeTab}) {
    return (
        <>
           <Header value={value} onChangeTab={onChangeTab}/>
           <Outlet />
        </>
    );
}

export default AppLayout;