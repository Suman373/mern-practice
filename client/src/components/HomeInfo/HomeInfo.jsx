import React from "react";
import { Container } from "@material-ui/core";
import useStyles from './HomeInfoStyle';

const HomeInfo=()=>{
    const classes = useStyles();
    return(
        <>
            <div className={classes.homeInfoWrapper}>
                <section className={classes.homeInfoContainer}>
                    <h2>Why us?</h2>
                    <div className={classes.homeInfoPara}>

                    </div>
                </section>

                <section className={classes.homeInfoContainer}>
                    <h2>Be the trend setter</h2>
                    <div className={classes.homeInfoPara}>

                    </div>
                </section>
            </div>
        </>
    );
}
export default HomeInfo;