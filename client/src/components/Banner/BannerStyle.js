import {makeStyles} from '@material-ui/core/styles';
import BannerPicture from './assets/BannerPicture.jpg';

export default makeStyles(()=>({
    imageContainer:{
        width:'calc(100% - 1rem)',
        position:'relative',
        background:`url(${BannerPicture}) no-repeat center/cover`,
        height:'100vh',
        display:'grid',
        placeContent:'center',
        textAlign:"center"
    },
    bannerTitle:{
        fontSize:'3.5rem',
        color:'white',
        margin:'1rem'
    },
    caption:{
        fontSize:'1.8rem',
        color:'white'
    }
}))