import React from 'react';
import logo from '../static/logo.svg';
import {Link} from 'react-router-dom';
import Aux from '../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <header className={classes.Header}>
        <Link to="/">
            <img src={logo} className={classes.Logo} alt="logo" />
            <div className={classes.Logo_copy}>Property portal</div>
            </Link>
        </header>

        <main className={classes.Main}>
            <div className={classes.Container}> {props.children} </div>
        </main>
    </Aux>
    );

export default layout;