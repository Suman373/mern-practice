import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    homeInfoWrapper:{
        minHeight:'100vh',
        width:'90rem',
        margin:'0 auto',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        // background:'var(--blue)'
    },
    homeInfoContainer:{
        height:'30rem',
        width:'60rem',
        margin:'1rem',
        textAlign:'center',
        background:'#ffffff',
        "& h2":{
            fontSize:'3rem',
            color:'blue'
        }
    }
}));