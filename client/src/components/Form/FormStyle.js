//  This is the styling for the form
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wrapper: {
        margin: '2rem auto',
        textAlign: 'center',
        '@media(max-width:400px)':{
            margin:'3rem auto'
        }
    },
    headingStyle: {
        fontSize: '2.6rem',
        color: 'blue',
        marginBottom: '1rem',
        '@media(max-width:700px)': {
            fontSize: '2.1rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.7rem',
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
        position: 'relative',
        boxShadow: '0 0 2px black'
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
        color: 'red'
    },
    formControl:{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
    },
    createPostTitle: {
        fontSize: '1.8rem',
        fontFamily: 'serif',
        margin: '1rem',
        fontWeight:'600',
        color: "blue",
        '@media(max-width:700px)': {
            fontSize: '1.5rem',
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
        color:'blue',
        width: 'calc(100% - 10px)',
        background:'transparent',
        borderRadius:'1rem',
        boxShadow: '0 0 5px black',
    },
    textFieldStyle: {
        width: 'calc(100% - 10px)',
        height: '10rem',
        outline: 'none',
        fontSize: "1.2rem",
        padding: '10px',
        fontFamily: 'IBM Plex Sans, sans-serif',
        resize: 'none',
        border: 'none',
        borderRadius:'1rem',
        boxShadow: '0 0 5px black',
        color:'blue',
        background: 'transparent',
        '&::-webkit-scrollbar': {
            width: '0.4em',
            display: 'none',
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
        margin: '10px'
    }
}))
