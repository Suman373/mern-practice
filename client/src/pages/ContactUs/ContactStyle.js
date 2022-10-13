import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    wrapper: {
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    formWrapper: {
        minHeight: '30rem',
        width: '40rem',
        margin: '1rem 0',
        display: "grid",
        placeContent: 'center',

        "&>h2": {
            fontSize: '2.5rem',
            color: 'black',
            margin: '0.5rem 0',

            "@media(max-width:500px)": {
                fontSize: '1.8rem',
            }
        },
        "&>p": {
            fontSize: "1.2rem",
            color: 'black',
            margin: '1rem 0'
        },

        // form
        "& form": {
            width: 'fit-content',
            display: 'flex',
            alignItems: 'left',
            flexDirection: 'column',
            gap: '1.3rem',
            justifyContent: 'center',

            "& label": {
                fontSize: '1.3rem',
                color: 'var(--blue)',
            },

            "& input": {
                fontSize: '1.2rem',
                height: '2.4rem',
                color: 'var(--blue)',
                padding: '0.5rem',
                margin: '0.5rem 0',
                width: '100%',
                textIndent: '0.2rem',
                outline: 'none',
                border: '1px solid var(--blue)',
                borderRadius: '0.6rem'
            },

            "& textarea": {
                fontSize: '1.2rem',
                height: '10rem',
                margin:'0.5rem 0',
                padding: '0.5rem',
                textIndex: '0.2rem',
                width: '100%',
                outline: 'none',
                border: '1px solid var(--blue)',
                borderRadius: '0.6rem',
                resize: 'none'
            },

            "&>button": {
                fontSize: '1.2rem',
                width: 'fit-content',
                margin: '1rem auto',
                padding: '0.8rem 1rem',
                background: 'var(--blue)',
                color: '#ffffff',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0.8rem',
            }
        },
    },
    imgContainer: {
        height: '80vh',
        width: '40rem',
        position: 'relative',
        display: 'grid',
        placeContent: 'center',
        "@media(max-width:800px)": {
            display: 'none',
        }
    },
    formImage: {
        height: '30rem',
        width: '35rem'
    }

}))