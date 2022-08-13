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
    },
    titleStyle:{
        fontSize:'2rem',
        color:'blue',
        textAlign:"center",
        margin:'0.5rem',
        fontFamily:'Lobster,cursive',
        '@media(max-width:700px)': {
            fontSize: '1.7rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.4rem',
        },
    }
}));