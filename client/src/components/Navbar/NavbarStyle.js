// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({

    title: {
        fontSize: '2.8rem',
        color: 'blue',
        margin: '2rem',
        fontFamily: 'Lobster, cursive',
        '@media(max-width:700px)': {
            fontSize: '2rem',
            margin: '1rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.7rem',
        },
        
    }
}
))