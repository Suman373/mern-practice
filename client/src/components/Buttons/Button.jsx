// for add button
import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(()=>({
    btnStyle:{
        fontSize:'1.2rem',
        width:'fit-content',
        padding:'10px 0.9rem',
        background:'blue',
        color:'white',
        margin:'0.5rem',
        border:'none',
        fontFamily:'sans-serif',
        borderRadius:'1rem',
        cursor:'pointer',
        '&:hover':{
            opacity:'0.8',
            boxShadow:'0 0 4px black ',
            transform:'scale(1.05)',
        },
        '@media(max-width:700px)':{
            fontSize:'1.25rem',
        },
        '@media(max-width:400px)':{
            fontSize:'1.1rem',
        }
    }
}))

const Button=({text,...buttonProps})=>{
    // style objects
    const classes = useStyles();
    return(
        <>
        <button
        type="submit"
        className={classes.btnStyle}
        {...buttonProps}>
            {text}
        </button>
        </>
    )
}

export default Button;