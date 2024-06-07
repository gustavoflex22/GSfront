import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import Home from '../pages/Home/index';
import Recados from '../pages/Recados/index';
import Localidade from '../pages/Localidade';

export function Router() {
return (
<>
<Routes>
    <Route path='/' element={<DefaultLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/localidade' element={<Localidade/>}/>
    <Route path='/recados' element={<Recados/>}/>
    </Route>
</Routes>
</>
)
}