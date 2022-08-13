import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(()=>({
    imageContainer:{
        width:'calc(100% - 1rem)',
        position:'relative',
        height:'85vh',
        display:'grid',
        placeContent:'center',
        textAlign:"center",
        overflow:'hidden',
        fontFamily:'IBM Plex Sans,serif',
    },
    image:{
      margin:'0 auto',
      width:'25rem',
      height:'12rem',
      "@media(max-width:700px)":{
        width:'18rem',
        height:'8rem'
      },
      "@media(max-width:400px)":{
        width:'12rem',
        height:'7rem'
      }
    },
    bannerTitle:{
        fontSize:'5rem',
        color:'blue',
        textShadow:'0 0 2px blue',
        '@media(max-width:700px)':{
            fontSize:'3rem',
        },
        '@media(max-width:400px)':{
            fontSize:'2.4rem'
        }
    },
    caption:{
        fontSize:'2.1rem',
        margin:'1rem',
        color:'blue',
        '@media(max-width:700px)':{
            fontSize:'1.8rem',
        },
        '@media(max-width:400px)':{
            fontSize:'1.3rem',
        },
    }
}))