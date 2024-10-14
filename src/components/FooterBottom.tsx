export default function FooterBottom() {
  const socialNetworks = [
    "public/images/icon-facebook.svg",
    "public/images/icon-youtube.svg",
    "public/images/icon-instagram.svg",
    "public/images/icon-pinterest.svg",
    "public/images/icon-twitter.svg",
  ];

  const leftData = ["Home", "Pricing", "Products", "About Us"];

  const rightData = ["Careers", "Community", "Privacy Policy"];

  return (
    <div
      className="
            flex
            flex-col
            bg-[#1e1e26]
            items-center
            p-12
            md:px-28
            
            md:w-screen
            md:flex-row
            md:relative
            "
    >
      <div
        className="
            w-screen
            flex
            justify-between
            mb-10
            px-20
            sm:px-28
            md:w-1/3
            md:order-3
            md:px-0
            sm:mx-4
            "
      >
        <input
          type="text"
          placeholder="Updates in your inbox..."
          className="
                    w-3/4
                    p-3
                    rounded-3xl
                    mr-3
                    h-fit"
        />
        <button
          className="
                bg-primary
                px-5
                py-3
                rounded-3xl
                h-fit"
        >
          GO
        </button>
      </div>

      <div
        className="
        flex
        w-screen
        justify-between
        pb-10
        px-20
        sm:px-28
        md:w-1/3
        md:order-2
        md:px-0
        sm:mx-4
        "
      >
        <div>
          {leftData.map((item, index) => (
            <li
              key={index}
              className="
                text-white
                list-none
                hover:cursor-pointer
                hover:text-[#f88e75]
                "
            >
              {item}
            </li>
          ))}
        </div>

        <div>
          {rightData.map((item, index) => (
            <li
              key={index}
              className="
                        text-white
                        list-none
                        ml-4
                        hover:cursor-pointer
                        hover:text-primary
                        "
            >
              {item}
            </li>
          ))}
        </div>
      </div>

      <div className="
        w-screen
        flex
        flex-col
        items-center
        md:w-1/3
        md:order-1
        sm:mx-4"
      >
        <div
          className="
            flex
            w-full
            justify-between
            mb-10
            px-20
            sm:px-28
            md:px-0
            md:mr-7
            md:order-2
            "
        >
          {socialNetworks.map((item, index) => (
            <span
              key={index}
              className="
                w-8
                hover:cursor-pointer
                md:w-5
                lg:w-10
                "
            >
              <img 
              src={item} 
              alt="" 
              className="
                w-full
                " 
              />
            </span>
          ))}
        </div>

        <div
          className="
        mb-10
        md:order-1
        "
        >
          <img src="public/images/logo.svg" alt="" />
        </div>
      </div>

      <div
        className="
            text-gray-100
            text-[12px]
            md:w-1/3
            md:absolute
            md:right-[1rem]
            md:bottom-20
            "
      >
        Copyright 2020. All Rights Reserved
      </div>
    </div>
  );
}
