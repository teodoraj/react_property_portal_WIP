import React from 'react';
import classes from './Property.module.css';
import Layout from './container/Layout';

const PropertyPage = (props) => {
    console.log(props);
    const { params } = props.match;
    return(
        <div className={classes.Property_page}>
            <Layout>
                <h3>Property details here</h3>
                <h4>Property id: {params.id}</h4>
                <p>Here we are going to fetch from store </p>
            </Layout>
        </div>
    )
}

export default PropertyPage;