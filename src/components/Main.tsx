import MainTop from "./MainTop"
import Carousel from "./Carousel"
import ButtonStart from "./ButtonStart"
import MainCenter from "./MainCenter"


export default function() {
    return (
        <div>
            <MainTop />

            <MainCenter />

            <div className="
                text-2xl
                sm:text-3xl
                flex
                justify-center
                my-10"
            >
                What they've said
            </div>

            <Carousel />
            <div className="
                flex
                justify-center
                my-10"
            >
                <ButtonStart bgColor="bg-primary" textColor="text-black" />
            </div>
        </div>
    )
}