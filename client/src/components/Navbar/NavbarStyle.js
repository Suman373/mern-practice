// styling for the AppBar and the Title only
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({

    title: {
        fontSize: '2rem',
        color: 'blue',
        margin: '2rem',
        '@media(max-width:700px)': {
            fontSize: '1.8rem',
            margin: '1rem',
        },
        '@media(max-width:400px)': {
            fontSize: '1.5rem',
        },
        
    }
}
))