import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({

    appContainer:{
        width:'inherit',
        position:'relative',
        overflowX:'hidden'
    },
    scrollBtn:{
        position:'fixed',
         height:'3rem',
        width:'3rem',
        fontSize:'1.5rem',
        color:'white',
        padding:'6px',
        borderRadius:'30%',
        right:'1rem',
        bottom:'1rem',
        cursor:'pointer',
        background:'blue',
        zIndex:'9999',
        animation:`$floataway 2000ms infinite`,
        transition:'animation 500ms ease-in-out'
    },
    "@keyframes floataway":{
        "0%,50%":{
            transform:'translateY(2px)'
        },
        "25%,100%":{
            transform:'translateY(-1px)'
        }
    }
}))