import React from "react";
import { Container } from "@material-ui/core";
import useStyles from './HomeInfoStyle';

const HomeInfo=()=>{
    const classes = useStyles();
    return(
        <>
            <Container className={classes.homeInfoWrapper}>
                <section className={classes.info1}>
                    <h2>Why us?</h2>
                    <div className={classes.flexContainer}>
                    </div>
                </section>

                <section className={classes.info2}>
                    <h2>Be the trend setter</h2>
                    <div className={classes.flexContainer }>
                    </div>
                </section>
            </Container>
        </>
    );
}
export default HomeInfo;