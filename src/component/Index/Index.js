import React from 'react';
import { Main } from './Main/Main';
import Galleria  from './Galleria/Galleria'
import { Navbar } from './Main/Navbar/Navbar';
import { Footer } from './Main/Footer/Footer';


export function Index(){
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>        
    )
}