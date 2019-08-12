import React from "react";
import Col from "../Col.js";
import "./scores.css";


function Footer(props){
    return (
        <div className ="row">
            <Col size = "md-4">
                <p className = "score">Score : <span>{props.score}</span></p>
            </Col>
            <Col size = "md-4">
                <p className = "score"><span>{props.message}</span></p>
            </Col>
            <Col size = "md-4">
                <p className = "score"> Top Score : <span>{props.topScore}</span></p>
            </Col>
            
        </div>
    )
}

export default Footer;