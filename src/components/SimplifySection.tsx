import ButtonStart from "./ButtonStart"

export default function SimplifySection() {
    return (
        <div className="
            bg-primary
            text-white
            flex
            flex-col
            md:flex-row
            p-10
            justify-between
            items-center
            md:px-20
            
            bg-simplify
            bg-cover"
        >
            <div className="
                text-2xl
                sm:text-3xl
                mb-5"
            >
                Simplify how your team <br /> works today.
            </div>
            <ButtonStart bgColor="bg-white" textColor="text-primary" />
        </div>
    )
}