import React from 'react';
import {Link} from 'react-router-dom';


export default class Properties extends React.Component {
    constructor(props){
        super(props);
        this.state={
            properties: [],
            isLoaded: false,
            error: null
        }
    }
    // populate the state with the property list
    componentDidMount(){
        let  baseURL = 'https://property-portal-28fcf.firebaseio.com/';
        let path = baseURL+ "/listings.json";
        fetch(path)
        .then(resp=>resp.json())
        .then(
            (result) =>{
                console.log("result", result);

                this.setState({
                    properties: result,
                    isLoaded: true
                });
            },
            err => {
                this.setState({
                    isLoaded: true,
                    error: err
                });
            }
        )

    }
    renderProperties = (props) => {
        let propList = [];

        Object.keys(props).map( prop => {

            let property = props[prop];
            propList.push(<li key={prop}>{property.address}</li>)
        })
        return propList
    };

    render(){
        const {error, isLoaded, properties}= this.state;

        if (error) {
            return <div> Error: {error} </div>
        }else if (!isLoaded) {
           return <div> Is loading ....</div>
        } else{
            <ul>
                {this.renderProperties(properties)}
            </ul>


        }

    }
}
