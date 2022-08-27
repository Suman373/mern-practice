// styling of the posts container
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    postsContainer:{
        minHeight:'100vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        overflowX:'hidden'
    },
    titleStyle:{
        fontSize:'2rem',
        color:'black',
        textAlign:"center",
        margin:'0.5rem',
        fontFamily:'Lobster,cursive',
        '@media(max-width:700px)': {
            fontSize: '1.5rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.2rem',
        },
    }
}));