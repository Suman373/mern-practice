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
            flexDirection:'column',
            justifyContent:'flex-start'
        }
    },
    formWrapper:{
        textAlign:'center',
        padding:'1rem',
        color:'#ff258b',
    },
    formTitle:{
        fontSize:'2.7rem',
        margin:'1rem',
        "@media(max-width:700px)":{
            fontSize:"2.2rem"
        },
        "@media(max-width:500px)":{
            fontSize:'1.7rem',
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