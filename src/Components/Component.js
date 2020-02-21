import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Component = props => {
    return (
        <div>
            <img className="hdImage" src={props.img} alt="" />
            <h2>
                {props.title}
            </h2>
            <p>
                {props.date}
            </p>
            <p>
                {props.description}
            </p>
        </div>
    );
};


export default Component;