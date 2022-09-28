import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    aboutWrapper:{
        minHeight:'100vh',
        width:'100vw',
        overflow:'hidden',
    },
    aboutInfo:{
        height:'fit-content',
        width:'30rem',
        textAlign:'center',
        margin:'1rem auto',
        padding:'1rem',
        lineHeight:'2',
        color:'#ff258b',
        "@media(max-width:700px)":{
            width:'20rem'
        },
        "@media(max-width:500px)":{
            width:'fit-content',
        }
    },
    heading:{
        fontSize:"2.4rem",
        "@media(max-width:700px)":{
            fontSize:"2rem"
        },
        "@media(max-width:400px)":{
            fontSize:"1.5rem"
        },
    },
    para:{
        fontSize:"1.3rem",
        textAlign:"left",
        margin:"1rem auto",
        "@media(max-width:700px)":{
            fontSize:"1.1rem"
        },
        "@media(max-width:400px)":{
            fontSize:"1rem"
        },
    }
}))