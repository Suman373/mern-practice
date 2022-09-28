import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    footerWrapper:{
        height:'3rem',
        width:'100vw',
        textAlign:'center',
        padding:'1rem',
        display:'inline',
    },
    footerPara:{
        fontSize:'1.3rem',
        color:'#ff258b',
        "@media(max-width:700px)":{
            fontSize:'1.2rem'
        },
        "@media(max-width:500px)":{
            fontSize:'1.1rem',
        }
    }

}));
