//  This is the styling for the form
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wrapper: {
        margin: '2rem auto',
        textAlign: 'center',
        overflowX:'hidden',
        '@media(max-width:400px)':{
            margin:'3rem auto',
        }
    },
    headingStyle: {
        fontSize: '2.4rem',
        fontFamily:'sans-serif',
        color:'#ff258b',
        textShadow:'0 0 1px black',
        marginBottom: '1.2rem',
        '@media(max-width:700px)': {
            fontSize: '1.8rem',
        },
        '@media(max-width:500px)': {
            fontSize: '1.2rem',
        },
    },
    formContainer: {
        minHeight: '30rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        fontFamily: 'IBM Plex Sans, sans-serif',
        width: '45rem',
        background: 'transparent',
        textAlign: 'center',
        border: 'none',
        borderRadius:'1rem',
        marginBottom:'10px',
        position: 'relative',
        boxShadow: '0 0 4px grey',
        "@media(max-width:700px)":{
            width:'30rem',
            minHeight:'27.5rem',
        },
        "@media(max-width:500px)":{
            width:'22rem',
            margin:'0 auto'
        },
        "@media(max-width:400px)":{
            width:'20rem',
            height:'30rem'
        }
    },
    formContainer_closed: {
        display: 'none'
    },
    closeBtnStyle: {
        position: 'absolute',
        top: '5px',
        right: '10px',
        display: 'block',
        fontSize: '2.2rem',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        color: '#e00d2d',
        '@media(max-width:700px)': {
            fontSize: '1.5rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.3rem',
        },

    },
    formControl:{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
    },
    createPostTitle: {
        fontSize: '1.6rem',
        fontFamily: 'sans-serif',
        margin: '1rem',
        fontWeight:'600',
        color: "black",
        '@media(max-width:700px)': {
            fontSize: '1.3rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.1rem',
        },
    },
    creator_title_tag_style: {
        outline: 'none',
        border: 'none',
        fontSize: '1.2rem',
        padding: '10px',
        color:'black',
        width: 'calc(100% - 0.7rem)',
        background:'transparent',
        borderRadius:'1rem',
        boxShadow: '0 0 5px grey',
        "&:focus":{
            outline:'1px solid var(--blue)',
        },
        "@media(max-width:700px)":{
            fontSize:'1.2rem'
        },
        "@media(max-width:500px)":{
            fontSize:'1rem',
            padding:'10px',
        }
    },
    textFieldStyle: {
        width: 'calc(100% - 10px)',
        height: '10rem',
        outline: 'none',
        fontWeight:'600',
        fontSize: "1.2rem",
        padding: '10px',
        fontFamily: 'IBM Plex Sans, sans-serif',
        resize: 'none',
        border: 'none',
        borderRadius:'1rem',
        boxShadow: '0 0 5px grey',
        color:'black',
        "&:focus":{
            outline:'1px solid var(--blue)',
        },
        background: 'transparent',
        '&::-webkit-scrollbar': {
            width: '0.4em',
            display: 'none',
        },
        "@media(max-width:700px)":{
            fontSize:'1.1rem'
        },
        "@media(max-width:500px)":{
            fontSize:'1rem',
            padding:'10px',
        }
    },
    fileUpload: {
        width:'100%',
        margin:'0 auto',
        paddingBottom:'5px',
        borderBottom:'1px solid black'
    },
    formClearedMessage: {
        fontSize: "1.3rem",
        color: 'green',
        textAlign: 'center',
        fontFamily: 'serif',
        margin: '10px',
        "@media(max-width:500px)":{
            fontSize:'1rem'
        }
    }
}))
