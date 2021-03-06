
import React from 'react';
import {Card ,CardBody, CardTitle , CardText} from "reactstrap";
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa";

const MyCard = ({details}) =>{
    return(
        <div>
        <Card>
            <CardBody className="text-center">
            <CardBody className="text-center">
                <img
                height="150"
                width="150" 
                 className="rounded-circle img-thumbnail border-danger " 
                src={ details.picture?.medium} 
                />
                
                {details.gender}
                    <CardTitle className="text-primary">
                        <h1>
                        <span className="pd-4">{details.name?.title }</span>
                        <span>{details.name?.first }</span>
                        <span>{details.name?.last }</span> 
                        </h1>
                    </CardTitle>
                    <CardText>
                        <FaMapMarkedAlt/>
                        {details.location?.city}
                        {details.phone}
                    </CardText>
            </CardBody>
        </Card> 
        </div>
    );
};

export default MyCard;
