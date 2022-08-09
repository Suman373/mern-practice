// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({

    title: {
        fontSize: '2.8rem',
        color: 'blue',
        margin: '2rem',
        fontFamily: 'Lobster, cursive',
        '@media(max-width:600px)': {
            fontSize: '2rem',
            margin: '1rem',
            color: 'black'
        },
    }
}
))