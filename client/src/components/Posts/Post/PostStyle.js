// custom styling for all the post
import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    postContainer:{
        height:'25rem',
        width:'25rem',
        background:"linear-gradient(26deg,wheat,hotpink)",
        margin:'1rem',
        padding:'10px',
        border:'2px solid white',
        fontFamily:'IBM Plex Sans, sans-serif',
    },
    username:{
        fontSize:'1.4rem',
        fontWeight:'600'
    },
    description:{
        fontSize:'1.2rem',
        padding:'5px'
    },
    postImage:{
        height:'15rem',
        width:'100%'
    }
}))