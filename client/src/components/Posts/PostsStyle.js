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
        margin:'1rem',
        fontFamily:'Lobster,cursive'
    }
}));