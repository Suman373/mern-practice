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
        overflow:'hidden',
        '@media(max-width:700px)': {
            fontSize: '1.3rem',
            flexDirection:'column'
        },
        '@media(max-width:500px)': {
            fontSize: '1rem',
        },

    },
    titleStyle:{
        fontSize:'2rem',
        color:'black',
        textAlign:"center",
        marginTop:'-3rem',
        padding:'1rem',
        '@media(max-width:700px)': {
            fontSize: '1.3rem',
        },
        '@media(max-width:500px)': {
            fontSize: '1rem',
        },
    }
}));