import ButtonStart from "./ButtonStart";
import { useState } from "react";

function Header() {
  const lists = ["Pricing", "Product", "AboutUs", "Careers", "Community"];
  const [open, setOpen] = useState(true);
  const icons = [
    "public/images/icon-hamburger.svg",
    "public/images/icon-close.svg",
  ];

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`
        flex
        justify-between 
        items-center
        px-10 
        md:px-14
        lg:px-24
        w-screen
        h-20
        mb-16
        relative
        `}
    >
      <ul className={`
        absolute
        left-[50%]
        top-16
        translate-x-[-50%]
        text-2xl
        ${!open ? "flex" : "hidden"}
        flex-col
        items-center
        py-5
        bg-gray-100
        w-full
        `}
      >
        {
          lists.map((list, index) => (
            <li 
              key={index}
              className="
                hover:text-primary
                hover:cursor-pointer"
            >
              {list}
            </li>
          ))
        }
      </ul>

      <div>
        <img src="../../public/images/logo.svg" alt="" />
      </div>
      <nav className="">
        <ul
          className="
          hidden
          md:flex"
        >
          {lists.map((navList, index) => {
            return (
              <li
                key={index}
                className="
                  md:px-1
                  lg:px-3"
              >
                <a
                  href="#"
                  className="
                    hover:text-secondary"
                >
                  {navList}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className="
        hidden
        md:block"
      >
        <ButtonStart bgColor="bg-primary" textColor="text-black" />
      </div>

      <button>
        <div 
          onClick={onClick}
          className="md:hidden"
        >
          <img 
            src={open ? icons[0] : icons[1]} 
            alt="" 
          />
        </div>
      </button>
    </header>
  );
}

export default Header;
