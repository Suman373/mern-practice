// custom styling for all the post
import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    postContainer:{
        height:'40rem',
        width:'35rem',
        margin:'1rem',
        padding:'1rem',
        borderRadius:'1rem',
        border:'none',
        boxShadow:'0 0 4px grey',
        position:'relative',
        '@media(max-width:700px)':{
            height:'35rem',
            width:'30rem',

        },
        '@media(max-width:500px)':{
            minHeight:'30rem',
            width:'calc(100vw - 1.5rem)',
        },
    
    }, 
    mediaCard:{
        height:'55%',
        width:'100%',
        position:'relative',
        borderRadius:'1rem',
        border:'1px solid grey',
        "@media(max-width:500px)":{
            height:'16rem',
        }
    },
    infoContainer:{
        padding:'1rem',
    },
    username:{
        fontSize:'1.3rem',
        fontWeight:'600',
        color:'var(--blue)',
        '@media(max-width:700px)':{
            fontSize:'1.2rem'
        },
        '@media(max-width:500px)':{
            fontSize:'1.1rem'
        }
    },
    postTitle:{
        fontSize:"1.1rem",
        color:'var(--pink)',
        margin:'10px 0',
        '@media(max-width:700px)':{
            fontSize:'1rem'
        },
        '@media(max-width:500px)':{
            fontSize:'0.89rem'
        }
    },
    descriptionPara:{
        fontSize:'1.09rem',
        padding:'5px',
        '@media(max-width:700px)':{
            fontSize:'0.9rem'
        },
        '@media(max-width:500px)':{
            fontSize:'0.88rem',
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
        fontSize:'1.4rem',
        position:'absolute',
        color:'orange',
        background:'none',
        border:'none',
        cursor:'pointer',
        top:'1.5rem',
        right:'1.5rem'
    }

}))