import { makeStyles } from "@material-ui/core";
import balcony from '../../assets/balcony.jpeg';

export default makeStyles(()=>({
    homeInfoWrapper:{
        minHeight:'100vh',
        width:'100vw',
        margin:'0 auto',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        "@media(max-width:700px)":{
            width:'calc(100vw-2rem)'
        },
        "@media(max-width:500px)":{
            width:'calc(100vw-1rem)'
        }
    },

    homeCarouselContainer:{
        minHeight:'100vh',
        width:'100vw',
        textAlign:'center',
        margin:'1rem',
        overflow:'hidden',
        "& h2":{
            fontSize:'3rem',
            padding:'1rem',
            color:'var(--blue)'
        },
        "@media(max-width:700px)":{
            width:'calc(100vw-2rem)',
            "& h2":{
                fontSize:'2rem'
            }
        },
    },
    homeInfoContainer:{
        minHeight:'100vh',
        width:'60rem',
        margin:'1rem',
        textAlign:'center',
        // background:'#ffffff',
        "& h2":{
            fontSize:'3rem',
            padding:'1rem',
            color:'var(--blue)'
        },
        "@media(max-width:700px)":{
            width:'calc(100vw-2rem)',
            "& h2":{
                fontSize:'2rem'
            }
        }
    },
}));