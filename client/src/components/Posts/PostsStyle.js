// styling of the posts container
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    postsContainer:{
        minHeight:'100vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap-reverse',
        flexDirection:'row-reverse',
        overflowX:'hidden',
        '@media(max-width:700px)': {
            flexDirection:'column-reverse',
            justifyContent:'flex-start'
        },

    },
    titleStyle:{
        fontSize:'1.6rem',
        color:'#ff258b',
        textAlign:"center",
        marginTop:'2rem',
        padding:'1rem',
        '@media(max-width:700px)': {
            fontSize: '1.3rem',
        },
        '@media(max-width:500px)': {
            fontSize: '1.1rem',
        },
    }
}));