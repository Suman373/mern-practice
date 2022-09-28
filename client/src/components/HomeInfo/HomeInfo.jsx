import React from "react";
import useStyles from './HomeInfoStyle';
import './HomeInfo.css';
import turtleUnderWater from '../../assets/turtleUnderWater.jpg';
import wave from '../../assets/wave.jpg';
import flowergirl from '../../assets/flowergirl.jpg';
import venice from '../../assets/venice.jpeg';
import moon from '../../assets/moon.jpeg';
import clouds from '../../assets/clouds.jpg';
import dunes from '../../assets/dunes.jpeg';
import city from '../../assets/city.jpeg';

const HomeInfo = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.homeInfoWrapper}>
                <section
                    className={classes.homeCarouselContainer}>
                    <h2>Beauty Never Lies</h2>
                    <div className="image-carousel">
                        <span ><img src={turtleUnderWater} alt="" /></span>
                        <span ><img src={wave} alt="" /></span>
                        <span ><img src={flowergirl} alt="" /></span>
                        <span ><img src={venice} alt="" /></span>
                        <span ><img src={moon} alt="" /></span>
                        <span ><img src={clouds} alt="" /></span>
                        <span ><img src={dunes} alt="" /></span>
                        <span ><img src={city} alt="" /></span>
                    </div>
                </section>
                <section className={classes.homeCommunity}>
                    <h2>Growing community</h2>
                    <div className={classes.communityFlexBox}>
                        <div  className={classes.communityImgCard}>
                            <img src={flowergirl} alt="" />
                            <img src={flowergirl} alt="" />
                        </div>
                        <div className={classes.communityTextCard}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sequi modi quisquam magnam nostrum dicta ipsa! Eligendi, nemo magnam. Facere.</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
export default HomeInfo;