// custom styling for all the post
import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    postContainer:{
        height:'40rem',
        width:'40rem',
        margin:'1rem',
        padding:'1rem',
        borderRadius:'1rem',
        border:'none',
        boxShadow:'0 0 4px black',
        fontFamily:'IBM Plex Sans, sans-serif',
        position:'relative',
        '@media(max-width:700px)':{
            height:'22rem',
            width:'22rem',

        },
        '@media(max-width:500px)':{
            height:'30rem',
            width:'22rem',
        },
        '@media(max-width:400px)':{
            height:'30rem',
            width:'20rem',
        }
       
    }, 
    mediaCard:{
        maxHeight:'20rem',
        width:'100%',
        position:'relative',
        opacity:'1',
        borderRadius:'1rem',
    },
    infoContainer:{
        padding:'1rem',
    },
    username:{
        fontSize:'1.4rem',
        fontWeight:'600',
        color:'blue',
        '@media(max-width:700px)':{
            fontSize:'1.3rem'
        },
        '@media(max-width:500px)':{
            fontSize:'1.1rem'
        }
    },
    postTitle:{
        fontSize:"1.2rem",
        color:'green',
        margin:'10px 0',
        '@media(max-width:700px)':{
            fontSize:'1rem'
        },
        '@media(max-width:500px)':{
            fontSize:'0.9rem'
        }
    },
    descriptionPara:{
        fontSize:'1.1rem',
        padding:'5px',
        '@media(max-width:700px)':{
            fontSize:'1rem'
        },
        '@media(max-width:500px)':{
            fontSize:'0.8rem',
        }
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
        gap:'1rem',
        borderRadius:'0 0 1rem 1rem',
        "&>button":{
            background:'transparent',
            outline:'none',
            border:'none',
            cursor:'pointer',
            fontSize:'1.2rem',
            display:'flex',
            alignItems:'center',
            color:'white',
            '@media(max-width:700px)':{
                fontSize:'1.1rem'
            },
            '@media(max-width:500px)':{
                fontSize:'1rem'
            }
        },
    },
    edit:{
        fontSize:'1.5rem',
        position:'absolute',
        color:'orange',
        background:'none',
        border:'none',
        cursor:'pointer',
        top:'1.5rem',
        right:'1.5rem'
    }

}))