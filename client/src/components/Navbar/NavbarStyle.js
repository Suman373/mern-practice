// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    navBarStyle:{
        width:'100%',
        height:'4rem',
        margin:'1rem auto',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        boxShadow:'none',
        background:'transparent'
    },
    title:{
        fontSize:'3.5rem',
        color:'blue',
        margin:'2rem',
        fontFamily:'Lobster, cursive' 
    },
    menuContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        gap:'1rem',
        fontSize:'1.5rem',
        color:'blue'
    }
}))