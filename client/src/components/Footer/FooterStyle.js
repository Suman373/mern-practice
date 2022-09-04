import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    footerWrapper:{
        height:'3rem',
        width:'100vw',
        textAlign:'center',
        padding:'1rem',
        position:'fixed',
        bottom:'0'
    },
    footerPara:{
        fontSize:'1.3rem',
        color:'#ff258b',
        textShadow:'0 0 1px grey',
    }

}));
