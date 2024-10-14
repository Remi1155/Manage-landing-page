import ButtonStart from "./ButtonStart";

export default function MainTop() {
  return (
    <div
      className="
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            sm:mx-10
            
            "
    >
      <div
        className="
                w-screen
                flex
                justify-center
                px-5
                sm:w-1/2
                sm:order-2
                sm:px-0"
      >
        <img src="public/images/illustration-intro.svg" alt="" />
      </div>

      <div
        className="
                w-screen
                text-center
                px-5
                sm:w-1/2
                sm:order-1
                sm:px-0"
      >
        <div
          className="
                    text-3xl
                    mb-10
                    sm:text-4xl
                    md:text-5xl
                    "
        >
          Bring everyone
          <br /> together to build
          <br /> better products.
        </div>
        <div
          className="
                    mb-10
                    text-secondary"
        >
          Manage makes it simple for sofware teams to pla day-to-day tasks while
          keeping the larger team goals in view.
        </div>
        <ButtonStart bgColor="bg-primary" textColor="text-black" />
      </div>
    </div>
  );
}
