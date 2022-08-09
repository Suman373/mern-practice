// custom styling for all the post
import { makeStyles } from "@material-ui/core";
import Flowers from '../Post/postAssets/Flowers.jpeg';

export default makeStyles(()=>({
    postContainer:{
        height:'25rem',
        width:'25rem',
        // background:"linear-gradient(0deg, rgba(70,135,93,1) 17%, rgba(11,167,144,1) 100%)",
        margin:'1rem',
        padding:'1rem',
        borderRadius:'1rem',
        border:'none',
        boxShadow:'0 0 4px black',
        fontFamily:'IBM Plex Sans, sans-serif',
        position:'relative'
       
    }, 
    mediaCard:{
        height:'100%',
        width:'100%',
        position:'absolute',
        zIndex:'-2',
        opacity:'1',
        top:'0',
        left:'0',
        borderRadius:'1rem',
    },
    infoContainer:{
        background:'#20202030',
        padding:'0.9rem',
        borderRadius:'1rem',
        color:'white',
    },
    username:{
        fontSize:'1.4rem',
        fontWeight:'600',
        color:'white'
    },
    postTitle:{
        fontSize:"1.2rem",
        color:'yellow',
        margin:'10px 0',
    },
    descriptionPara:{
        fontSize:'1.2rem',
        padding:'5px',
        // color:'blue'
    },
    actionsContainer:{
        bottom:'0rem',
        left:'0',
        width:'100%',
        height:'3rem',
        color:'white',
        background:'black',
        display:'flex',
        position:'absolute',
        justifyContent:'space-evenly',
        alignItems:'center',
        fontSize:'1.2rem',
        gap:'1rem',
        borderRadius:'0 0 1rem 1rem',
    }

}))