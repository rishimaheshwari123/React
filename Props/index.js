import React from "react";
import ReactDom from 'react-dom';
import Card from "./Card";
import Sdata from './Sdata';

function nCard(val){
    return(
        <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname ={val.sname}
        link ={val.link}
        />
    )
}

ReactDom.render(
    <>
    <h1>List of movie</h1>
    {Sdata.map(nCard)}  
    </>
,document.getElementById('root'));
