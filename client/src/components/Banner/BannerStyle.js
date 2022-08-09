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
      "@media(max-width:600px)":{
        width:'18rem',
        height:'8rem'
      }
    },
    bannerTitle:{
        fontSize:'5rem',
        color:'blue',
        textShadow:'0 0 2px blue',
        transition: 'animation 2000ms',
        animation:"$changeColor 4000ms ease-in-out infinite",
        '@media(max-width:600px)':{
            fontSize:'3rem',
        },
    },
    "@keyframes changeColor":{
        "30%":{color:'#661a66',textShadow:'0 0 2px #661a66 '},
        "60%":{color:'#137949' , texShadow:'0 0 2px #137949'},
        "90%":{color:'#c9ae19', textShadow:'0 0 2px #c9ae19'},
    },
    caption:{
        fontSize:'2.1rem',
        color:'blue',
        '@media(max-width:600px)':{
            fontSize:'1.8rem',
        },
    }
}))