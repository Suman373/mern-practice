import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
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
        border:'none',
        cursor:'pointer',
        background:'linear-gradient(30deg,hotpink,blue)',
        zIndex:'9999',
        animation:`$floataway 2000ms infinite`,
        transition:'animation 500ms ease-in-out',
        "@media(max-width:700px)":{
            height:'2.4rem',
            width:'2.4rem',
            fontSize:'1.2rem'
        },
        "@media(max-width:500px)":{
            height:'1.8rem',
            width:'1.8rem',
            fontSize:"1rem"
        }
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