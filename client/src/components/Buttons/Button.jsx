// for add button
import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(()=>({
    btnStyle:{
        fontSize:'1.5rem',
        width:'fit-content',
        padding:'10px',
        background:'blue',
        color:'white',
        margin:'1rem',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
        '&:hover':{
            opacity:'0.8',
            boxShadow:'0 0 4px black ',
            transform:'scale(1.05)',
        }
    }
}))

const Button=({children,...buttonProps})=>{
    // style objects
    const classes = useStyles();
    return(
        <>
        <button
        className={classes.btnStyle}
        {...buttonProps}>
            {children}
        </button>
        </>
    )
}

export default Button;