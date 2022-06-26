import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Center } from './Center/Center';
import Slider  from './Slider/Slider';
import { Form } from './Form/Form';
import { Cards } from './Card/Card';
import { Sliders } from './Sliders/Sliders';

export function Main(){
    return (
        <div>
        <Navbar />
        <Slider />
        <Center />
        <Form /> 
        <Cards />  
        <Sliders />       
        </div>        
    )
}