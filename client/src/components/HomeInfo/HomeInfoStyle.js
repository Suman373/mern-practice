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
    homeCommunity:{
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
    communityFlexBox:{
        minHeight:'100vh',
        width:'100%',
        oveflowX:'hidden',
        background:'var(--blue)',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        // flexWrap:'wrap',
        display:'grid',
        gridTemplateColumns:'max(20rem, 1fr)',
        "& div":{
            border:'2px solid black'
        }
    },
    communityImgCard:{
        padding:'1rem',
        "& img":{
            margin:'1rem',
            padding:'1rem',
            height:'25rem',
            width:'25rem'
        }
    },
    communityTextCard:{
        padding:'1rem',
        fontSize:'1.5rem',
        color:'black'
    }
}));