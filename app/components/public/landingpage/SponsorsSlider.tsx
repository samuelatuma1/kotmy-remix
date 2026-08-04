import { sponsorLogo } from '~/assets/images'
import AutoplayCarousel from '~/components/reusables/AutoplayCarousel'
import CarouselItem from '~/components/reusables/CarouselItem'


export default function SponsorsSlider({ data }: { data?: React.ReactNode }) {
    return (
        <AutoplayCarousel>
            <CarouselItem> {data}</CarouselItem>
           
        </AutoplayCarousel>
    )
}
