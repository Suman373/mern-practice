// for add button
import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(()=>({
    btnStyle:{
        fontSize:'1.3rem',
        width:'fit-content',
        padding:'10px 0.8rem',
        background:'linear-gradient(30deg,hotpink,blue)',
        color:'white',
        margin:'0.5rem',
        border:'none',
        borderRadius:'18px',
        cursor:'pointer',
        '&:hover':{
            opacity:'0.8',
            // background:'linear-gradient(30deg,hotpink,blue,green)',
            boxShadow:'0 0 4px black ',
            transform:'scale(1.05)',
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