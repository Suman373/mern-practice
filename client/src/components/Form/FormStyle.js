//  This is the styling for the form
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    wrapper:{
        marginTop:'1rem',
        textAlign:'center'

    },
    formContainer:{
        minHeight:'30rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'1rem',
        fontFamily: 'IBM Plex Sans, sans-serif',
        width:'45rem',
        background:'white',
        textAlign:'center',
        border:'none',
        position:'relative',
        boxShadow:'0 0 2px black'
    },
    formContainer_closed:{
        display:'none'
    },
    closeBtnStyle:{
        position:'absolute',
        top:'5px',
        right:'5px',
        display:'block',
        fontSize:'2rem',
        border:'none',
        cursor:'pointer',
        background:'transparent',
        color:'red'
    },
    createPostTitle:{
        fontSize:'1.8rem',
        fontFamily:'Lobster, cursive',
        margin:'1rem',
        color:"black"
    },
    creator_title_tag_style:{
        outline:'none',
        border:'none',
        fontSize:'1.5rem',
        padding:'10px',
        width: 'calc(100% - 10px)',
        borderBottom:'2px solid black'
    },
    textFieldStyle:{
        width:'calc(100% - 10px)',
        height:'10rem',
        outline:'none', 
        fontSize:"1.5rem",
        padding:'10px',
         fontFamily: 'IBM Plex Sans, sans-serif',
        resize:'none',
        border:'none',
        '&::-webkit-scrollbar': {
            width: '0.4em',
            display:'none',
          }
    },
    formClearedMessage:{
        fontSize:"1.5rem",
        color:'green',
        textAlign:'center',
        margin:'10px'
    }
}))
