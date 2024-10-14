import MainLeft from "./MainLeft"
import MainRight from "./MainRight"

export default function MainCenter() {
    return (
        <div className="
                flex
                flex-col
                my-10
                sm:mx-10
                sm:flex-row"
            >
                <MainLeft />
                <MainRight />
            </div>
    )
}