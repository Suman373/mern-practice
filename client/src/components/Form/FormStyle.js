//  This is the styling for the form
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wrapper: {
        height:'max-content',
        margin: '2rem auto',
        textAlign: 'center',
        overflowX:'hidden',
        '@media(max-width:400px)':{
            margin:'3rem auto',
        }
    },
    headingStyle: {
        fontSize: '2rem',
        fontFamily:'sans-serif',
        color:'#ff258b',
        marginBottom: '1.2rem',
        '@media(max-width:700px)': {
            fontSize: '1.5rem',
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
        width: '45rem',
        background: 'transparent',
        textAlign: 'center',
        border: 'none',
        borderRadius:'1rem',
        marginBottom:'2rem',
        position: 'relative',
        overflowX:'hidden',
        boxShadow: '0 0 4px grey',
        "@media(max-width:700px)":{
            width:'30rem',
            minHeight:'27.5rem',
        },
        "@media(max-width:500px)":{
            width:'calc(100vw - 1rem)',
        },
        "@media(max-width:400px)":{
            width:'calc(100vw - 0.8rem)',
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
        fontSize: '1.5rem',
        margin: '1rem',
        fontWeight:'600',
        color: "black",
        '@media(max-width:700px)': {
            fontSize: '1.35rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.2rem',
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
        fontSize: "1.2rem",
        padding: '10px',
        fontFamily: 'sans-serif',
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
        fontSize: "1.2rem",
        color: 'green',
        textAlign: 'center',
        margin: '0.7rem',
        "@media(max-width:500px)":{
            fontSize:'1rem'
        }
    }
}))
