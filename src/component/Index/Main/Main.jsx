import React from 'react';
import { Center } from './Center/Center';
import { Form } from './Form/Form';
import { Cards } from './Card/Card';
import { Sliders } from './Sliders/Sliders';
import { Profit } from './Profit/Profit';
import { Map } from './Map/Map';
import { Guase } from './Guase/Guase';
import {Review} from './Review/Review';
import { Comments } from './Comments/Comments';
import { NavSlide } from './NavSlid/NavSlide';

export function Main(){
    return (
      <div>
        <NavSlide />
        <Center />
        <Form />
        <Cards />
        <Sliders />
        <Profit />
        <Map />
        <Guase />
        <Review />
        <Comments />
      </div>
    );
}