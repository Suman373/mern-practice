import React from "react";
import { TextareaAutosize, Container, Typography} from '@material-ui/core';
import AddButton from "../Buttons/AddButton";
import useStyles from "./styles/FormStyle";

const Form = () => {
    // class for the styling objects
    const classes = useStyles();
    return (
        <Container
            className={classes.formContainer}>
            <Typography className={classes.createPostTitle}>
                Create a new post
            </Typography>
            <TextareaAutosize 
            variant='filled'
            minRows={5}
            maxRows={5}
            className={classes.textFieldStyle}
            placeholder={'Share your moments...'}>
            </TextareaAutosize>
            <AddButton style={{margin:'0 auto'}}/>
        </Container>
    );
}

export default Form;