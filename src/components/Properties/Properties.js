import React, {useState, useEffect} from 'react';
import Property from '../Property/Property';
import classes from './Properties.module.css';

function Properties(){
    const [properties, setProperties] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');


    useEffect( () => {
        // FIXME
        let  baseURL = 'https://property-portal-28fcf.firebaseio.com/';
        let path = baseURL+ "/listings.json";
        fetch(path)
        .then(resp=>resp.json())
        .then(
            (result) =>{
                setProperties(result);
                setIsLoaded(true);
            },
            err => {
                setIsLoaded(true)
                setError(err);
                });
            }, []
        );

    const renderProperties = (items) => {
        let propList = [];

        Object.keys(items).map( item => {

            let property = items[item];
            property.id = item;
            return propList.push(<Property key={item} {...property}/>);
        })
        return propList
    };

    if (error) {
        return <div> Error: {error} </div>
    }else if (!isLoaded) {
        return <div> Is loading ....</div>
    } else{
       return(
        <div className = { classes.Properties_result }>
            {renderProperties(properties)}
        </div>
       )


    }

}

export default Properties;