import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    return <Button {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;

export const CommonButton = (props) =>{
    return <button id='commonButton' {...props.attr}>{props.children}</button> 
};

 