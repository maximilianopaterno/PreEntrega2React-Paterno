import React, { useEffect } from 'react'
import {pedirData} from "../pedirData";
import { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
        const [productos, setProductos] = useState([]);
        const [titulo, setTitulo] = useState("Productos")
        const categoria = useParams().categoria;

        useEffect(() => {
                pedirData()
                    .then((res) => {
                        if (categoria) {
                                setProductos(res.filter((prod) => prod.categoria === categoria));
                                setTitulo(categoria);
                        }else {
                                setProductos(res);    
                                setTitulo("Productos");                              
                        }
                })
        },[categoria])

        return (
                <div>
                        <ItemList productos={productos} titulo={titulo} />
                </div>
                )

}