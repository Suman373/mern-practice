// for add button
import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(()=>({
    btnStyle:{
        fontSize:'1.2rem',
        width:'5rem',
        padding:'5px',
        background:'blue',
        color:'white',
        margin:'1rem',
        border:'none',
        '&:hover':{
            opacity:'0.8',
            transform:'scale(1.07)',
        }
    }
}))

const AddButton=()=>{
    // style objects
    const classes = useStyles();
    return(
        <>
        <button
        className={classes.btnStyle}>
            Add
        </button>
        </>
    )
}

export default AddButton;