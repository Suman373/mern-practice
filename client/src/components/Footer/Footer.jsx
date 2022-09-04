import React from 'react';
import useStyles from './FooterStyle';

const Footer = ()=>{
    // style objs
    const classes = useStyles();
    return(
        <>
            <footer className={classes.footerWrapper}>
                    <p className={classes.footerPara}>
                        Copyright &copy; 2022 Plogify All Rights Reserved 
                    </p>
            </footer>
        </>
    );
}

export default Footer;