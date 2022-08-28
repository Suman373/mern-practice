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
        fontSize:'1.3rem',
        color:'#ff258b',
        textShadow:'0 0 1px black',
    },
}))