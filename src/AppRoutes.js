import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/Home' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        // </BrowserRouter>
        
        
    )
}