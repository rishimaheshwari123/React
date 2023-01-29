import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let currDate = new Date(2023,5, 5, 13);
currDate = currDate.getHours();
let greeting = '';

const cssStyle = { };

if(currDate>=1 && currDate <12){
    greeting = 'Good Morning';
    cssStyle.color = "green";
}
else if(currDate >=12 && currDate<19){
    greeting = 'Good Afternoon';
    cssStyle.color = "Orange";
}
else{
    greeting = 'Good Night';
    cssStyle.color = "Black";
}
ReactDom.render(
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
    </div>
    </>

,document.getElementById('root'));
