import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    aboutWrapper:{
        height:'100vh',
        width:'100vw',
        overflowX:'hidden',
    },
    aboutInfo:{
        height:'fit-content',
        width:'30rem',
        textAlign:'center',
        margin:'1rem auto',
        padding:'1rem',
        lineHeight:'2',
        color:'#ff258b',
        textShadow:'0 0 1px black',
        "@media(max-width:700px)":{
            width:'20rem'
        },
        "@media(max-width:450px)":{
            width:'fit-content',
        }
    },
    heading:{
        fontSize:"2rem",
        "@media(max-width:700px)":{
            fontSize:"1.7rem"
        },
        "@media(max-width:400px)":{
            fontSize:"1.5rem"
        },
    },
    para:{
        fontSize:"1.3rem",
        textAlign:"center",
        margin:"10px 0",
        "@media(max-width:700px)":{
            fontSize:"1.2rem"
        },
        "@media(max-width:400px)":{
            fontSize:"1.1rem"
        },
    }
}))