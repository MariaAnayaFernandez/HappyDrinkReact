import './FrontVideo.scss'
import ReactPlayer from 'react-player'


export const FrontVideo = () => {
    return(
        <div className="vieo-portada">
            <ReactPlayer style = {{position:'absolute', maxHeight: 'max-content', zIndex:'-1' }} 
            url={require('../../../imagenes/video.mp4')} 
            loop 
            playing
            muted 
            width='100%'>
            </ReactPlayer>
        </div>
    )
}

