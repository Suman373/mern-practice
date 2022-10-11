import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    wrapper:{
        minHeight:'100vh',
        width:'100vw',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        overflow:'hidden',
        "@media(max-width:500px)":{
            display:'grid',
            placeContent:'center'
        }
    },
    formWrapper:{
        // background:'magenta',
        color:'black',
        "@media(max-width:500px)":{
            // width:'90vw',
        },
    },
    formTitle:{
        fontSize:'2.4rem',
        margin:'1rem 0',
        "@media(max-width:700px)":{
            fontSize:"2rem"
        },
        "@media(max-width:500px)":{
            fontSize:'1.6rem',
        }
    },
    formPara:{
        fontSize:'1.4rem',
        "@media(max-width:700px)":{
            fontSize:'1.3rem',
        },
        "@media(max-width:500px)":{
            fontSize:'1.1rem',
        }
    },
    imgContainer:{
        height:'80vh',
        width:'40rem',
        position:'relative',
        display:'grid',
        placeContent:'center',
        "@media(max-width:800px)":{
            display:'none',
        }
    },
    formImage:{
        height:'30rem',
        width:'35rem'
    }
    
}))