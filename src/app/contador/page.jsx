"use client";

import { useState, useEffect } from "react";

export default function Contador(){
    
    const [contador, setContador] = useState(0);
    
    function addUmCont(){
        if(contador >= 100){
            alert("Contador não pode ser maior que 100");
        } else{
            setContador(contador + 5);
        }
    }

    function removeUmCont(){
        if(contador <= -5){
            alert("Contador não pode ser menor que -5");
        } else {
            setContador(contador - 5);
        }
    }

    useEffect(()=> console.log(contador),[contador])

    return(
        <>
            <h1>Desenvolvendo um Contador</h1>
            <p> {contador} </p>
            <div style={{display: "flex", gap: "10px"}}>
            <button type="button" onClick={addUmCont} > + </button>
            <button type="button" onClick={removeUmCont}> - </button>
            </div>
        </>
    );
}