// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({

    title: {
        fontSize: '2rem',
        color: 'var(--blue)',
        margin: '2rem',
        '@media(max-width:700px)': {
            fontSize: '1.6rem',
        },
        '@media(max-width:500px)': {
            fontSize: '1.4rem',
        },
        
    }
}
))