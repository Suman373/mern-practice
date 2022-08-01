//  This is the styling for the form
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    formContainer:{
        minHeight:'15rem',
        display:'grid',
        placeContent:'center',
        width:'40rem',
        background:'white',
        textAlign:'center',
        border:'2px solid brown',
    },
    createPostTitle:{
        fontSize:'1.5rem',
        margin:'1rem',
        color:"black"
    },
    textFieldStyle:{
        width:'inherit',
        height:'10rem',
        outline:'none',
        fontSize:"1.2rem",
        border:'1px solid black',
        padding:'10px',
        resize:'none',
        '&::-webkit-scrollbar': {
            width: '0.4em',
            display:'none',
          }
    }
}))
