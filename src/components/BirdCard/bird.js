import React from "react";
import Col from "../Col.js";

import "./bird.css";

function BirdCard(props){
    return (
    <Col size = "md-3">
        <div className="card">
        <div onClick = {() => props.handleClick(props.id)} className="img-container">
             <img alt={props.name} src={props.image} />  
             <p>{props.image}</p>      
        </div>
    </div> 
    </Col>    
 
    );
}


export default BirdCard;