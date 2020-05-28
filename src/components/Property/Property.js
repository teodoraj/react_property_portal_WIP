import React, { useState } from 'react';
import propertyImg from '../../static/property/1.jpg';
import classes from './Property.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import axios from 'axios';
import {Link} from 'react-router-dom';

const EditPropertyModal = (props) => {
    const [property, setProperty] = useState(props.property);

    const saveProperty = () => {
        // api call
        let  baseURL = 'https://property-portal-28fcf.firebaseio.com/';
        let path = baseURL+ '/listings/'+ property.id + '.json?auth=mETpH7GC8da4tfqepZAnmZmQ2jUPS99rM5dvFWEH';
        console.log("property", property);

            axios.post(path, property)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    const updateProperty = e =>{
        setProperty({
            ...property,
            [e.target.name]: e.target.value
        })

    }
    return(
        <Modal
        {...props}
        size="lg"
        centered>
            <Modal.Header>
                <Modal.Title> Edit property </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form>
                    <Form.Group controlId="exampleForm.Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        type="input"
                        name = "address"
                        defaultValue={property.address}
                        onChange={updateProperty}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="input"
                        defaultValue={property.description}
                        onChange={updateProperty}
                        name="description"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.Beds">
                        <Form.Label>Number of bedrooms</Form.Label>
                        <Form.Control
                        type="number"
                        name="number_of_beds"
                        defaultValue={property.number_of_beds}
                        onChange={updateProperty}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.Postcode">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control
                        type="input"
                        name="postcode"
                        defaultValue={property.postcode}
                        onChange={updateProperty} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                        type="number"
                        name="price"
                        defaultValue={property.price}
                        onChange={updateProperty} />
                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => saveProperty()} className = {classes.Property_card_edit} variant='info'>Save</Button>
                <Button  variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    )
}

const Property = (props) =>{
    const [modalShow, setModalShow] = useState(false);
    const updateProperty = () => {
        console.log('property is saved', );
        setModalShow(false);
    }

    let link_url = "property/"+ props.id;
    return(
        <div className = {classes.Property_card_wrapper}>
            <Link to={link_url}>
                <div className={classes.Property_card_image}>
                    <img src = {props.mainImage || propertyImg}  alt="property"/>
                </div>
                <div className = {classes.Property_card_details}>
                    <h2 className = {classes.Property_card_title}> {props.number_of_beds} bedrooms </h2>
                    <address className = {classes.Property_card_address}> {props.address} </address>
                    <h3 className = {classes.Property_card_price}> £{props.price} </h3>


                </div>
            </Link>
               {/* <Button variant= 'property_card'  onClick={() => setModalShow(true) }>Edit listing </Button> */}
               <button className = {classes.Property_card_edit}
                onClick={() => setModalShow(true) }>Edit listing </button>
            {modalShow &&
                <EditPropertyModal
                    show = {modalShow}
                    onSave = {() => updateProperty()}
                    onHide = {() => setModalShow(false)}
                    property = {props} />
            }
        </div>
    )
}

export default Property;