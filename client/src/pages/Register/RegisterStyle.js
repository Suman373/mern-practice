import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({
    registerWrapper:{
        minHeight:'100vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        gap:'1rem'
    },

    registerFormContainer:{
        minHeight:'30rem',
        width:'40rem',
        margin:'1rem 0',
        display:"grid",
        placeContent:'center',
        // background:"green",

        "&>h2":{
            fontSize:'2.5rem',
            color:'black',
            margin:'1rem 0',

            "@media(max-width:500px)":{
                fontSize:'1.8rem',
            }
        },

        "&>p":{
            fontSize:"1.2rem",
            color:'black',
            margin:'1rem 0'
        },

        // the Form
        "& form":{
            width:'fit-content',
            display:'flex',
            alignItems:'left',
            flexDirection:'column',
            gap:'1.3rem',
            justifyContent:'center',

            "& label":{
                fontSize:'1.3rem',
                color:'var(--blue)',
            },

            "& input":{
                fontSize:'1.2rem',
                height:'2.2rem',
                color:'var(--blue)',
                padding:'0.5rem',
                margin:'0.5rem 0',
                width:'100%',
                textIndent:'0.2rem',
                outline:'none',
                border:'1px solid var(--blue)',
                borderRadius:'0.6rem'
            },

            "&>button":{
                fontSize:'1.2rem',
                width:'fit-content',
                margin:'1rem auto',
                padding:'0.8rem 1rem',
                background:'var(--blue)',
                color:'#ffffff',
                outline:'none',
                border:'none',
                cursor:'pointer',
                borderRadius:'0.8rem',
            }
        },


        // media query for the registerFormContainer
        "@media(min-width:900px)":{
            width:'30rem',
            // background:'black',
        },
        "@media(max-width:700px)":{
            margin:'0 auto',
            width:'90vw',
        },
        "@media(max-width:500px)":{
            width:'calc(100vw - 0.8rem)',
        }
    },
    registerFormImage:{
        minHeight:'30rem',
        width:'30rem',
        margin:'1rem 0',
        background:'yellow',

        "@media(max-width:700px)":{
            display:'none',
        }
    }
    
}));