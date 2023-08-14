import React from "react";
import carrito from "../assets/carrito.svg";
import "./navbar.css"


export const CartWidget = () => {
    return (
    <div className="carroConNumero">
        <img src={carrito} alt="carrito" width={30}/>
        <h5>5</h5>
    </div>
    );
};