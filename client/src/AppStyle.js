// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    appBar:{
        borderBottom:'2px solid black',
        margin:'1rem auto',
        display:'flex',
        background:'#000008',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'none'
    },
    title:{
        fontSize:'3rem',
        color:'blue',
        fontFamily:'Lobster, cursive' 
    }
}))