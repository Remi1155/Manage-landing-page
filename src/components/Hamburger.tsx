import { useState } from "react";

export default function Hamburger() {
  // 1. State
  const [open, setOpen] = useState(true);
  const icons = ["public/images/icon-hamburger.svg", "public/images/icon-close.svg"]

  // 2. Comportement
  const onClick = () => {
    setOpen(!open)
  }


  // 3. Render
  return (
    <button>
      <div onClick={onClick}>
        <img 
            src={open ? icons[0] : icons[1]}
            alt=""
            />
      </div>
    </button>
  );
}
