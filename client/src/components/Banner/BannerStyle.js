import {makeStyles} from '@material-ui/core/styles';
import banner from '../../assets/happiness.webp';

export default makeStyles(()=>({
    imageContainer:{
        width:'95rem',
        position:'relative',
        height:'100vh',
        display:'grid',
        margin:'0 auto',
        placeContent:'center',
        textAlign:"center",
        background:'var(--light-grey)',
        overflow:'hidden',
        fontFamily:'IBM Plex Sans,serif',
        "@media(max-width:800px)":{
            width:'100vw'
        },
        "@media(max-width:500px)":{
            width:'calc(100vw - 0.2rem)'
        }
    },
    bannerTitle:{
        fontSize:'5rem',
        fontFamily:'serif',
        fontWeight:'900',
        height:'fit-content',
        width:'100%',
        zIndex:'10',
        '@media(max-width:700px)':{
            fontSize:'3rem',
        },
        '@media(max-width:400px)':{
            fontSize:'2.4rem'
        }
    },
    caption:{
        fontSize:'1.5rem',
        margin:'1rem 18rem',
        textAlign:'center',
        color:'black',
        zIndex:'10',
        fontWeight:'500',
        '@media(max-width:900px)':{
            fontSize:'1.2rem',
            margin:'1rem'
        },
        '@media(max-width:400px)':{
            fontSize:'1rem',
            margin:'1rem'
        },
    }
}))