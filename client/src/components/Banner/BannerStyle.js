import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(()=>({

    imageContainer:{
        width:'100%',
        position:'relative',
        height:'85vh',
        display:'grid',
        placeContent:'center',
        textAlign:"center",
        // background:"black",
        overflow:'hidden',
        fontFamily:'IBM Plex Sans,serif',
    },
    leftAbstract:{
        height:'100vh',
        position:'absolute',
        left:'-25%',
        bottom:'30%',
        borderRadius:'50%',
        zIndex:'-1',
        transform:'rotate(40deg)',
        width:'40rem',
        background:"#fc53b3",
        "@media(max-width:1200px)":{
            height:'30rem',
            width:'20rem',
            left:"-10%",
            bottom:'20%'
        },
        "@media(max-width:700px)":{
            height:'25rem',
            width:'25rem',
            left:"-10%",
            opacity:'0.7',
            bottom:'20%'
        },

    },
    rightAbstract:{
        height:'100vh',
        width:'40rem',
        borderRadius:'',
        top:'30%',
        right:'-20%',
        borderRadius:'50%',
        position:'absolute',
        transform:'rotate(-45deg)',
        background:'#3db3f2',
        zIndex:"-1",
        "@media(max-width:1200px)":{
            height:'30rem',
            width:'25rem',
            right:'-10%',
            top:'40%',
        },
        "@media(max-width:700px)":{
            height:'25rem',
            width:'25rem',
            right:"-10%",
            top:'50%',
            opacity:'0.7'
        },
    },
    bannerTitle:{
        fontSize:'5rem',
        fontFamily:'serif',
        fontWeight:'900',
        height:'fit-content',
        width:'100%',
        zIndex:'10',
        '@media(max-width:700px)':{
            fontSize:'3rem',
        },
        '@media(max-width:400px)':{
            fontSize:'2.4rem'
        }
    },
    caption:{
        fontSize:'1.5rem',
        margin:'1rem 18rem',
        textAlign:'center',
        color:'black',
        zIndex:'10',
        fontWeight:'500',
        '@media(max-width:900px)':{
            fontSize:'1.2rem',
            margin:'1rem'
        },
        '@media(max-width:400px)':{
            fontSize:'1rem',
            margin:'1rem'
        },
    }
}))