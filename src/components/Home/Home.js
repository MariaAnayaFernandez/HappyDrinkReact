import { FrontVideo } from './FrontVideo/FrontVideo'
import { PromoBox } from './PromoBox/PromoBox'
import { BannerBox } from './BannerBox/BannerBox'

export const Home = () => {
    return (
        <div>
            <FrontVideo/>
            <PromoBox/>
            <BannerBox/>
        </div>
    )
}