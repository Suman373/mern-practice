import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    wrapper:{
        height:'85vh',
        width:'100vw',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        overflowX:'hidden',
    },
    formWrapper:{
        textAlign:'center',
        fontSize:'1.8rem',
        padding:'1rem',
        color:'#ff258b',
        textShadow:'0 0 1px black',
        "@media(max-width:700px)":{
            fontSize:"1.4rem"
        },
        "@media(max-width:500px)":{
            fontSize:'1.2rem',
        }
    },
    imgContainer:{
        height:'80vh',
        width:'40rem',
        position:'relative',
        // margin:'2rem',
        "@media(max-width:800px)":{
            display:'none',
        }
    },
    formImage:{
        height:'100%',
        width:'100%'
    }
    
}))