import React, { useRef, forwardRef } from "react";
 
const NavbarPhone = forwardRef(({ onWorkClick, onAboutMeClick, onContactClick },ref) => {
  
  return (
   
    <nav className="flex justify-center lg:invisible fadeIn">  
      <ul className="gap-16 pt-5 text-center inline-flex">
        <li className="font-canvasBlack">
          <a onClick={onAboutMeClick} className="cursor-pointer text-white hover:text-my-yellow active:text-my-yellow active:underline">Qui suis-je</a>
        </li>
        <li className="font-canvasBlack">
          <a onClick={onWorkClick} className="cursor-pointer text-white hover:text-my-yellow active:text-my-yellow active:underline">Mes projets</a>
        </li>
        <li className="font-canvasBlack">
          <a onClick={onContactClick} className="cursor-pointer text-white hover:text-my-yellow active:text-my-yellow active:underline">Contact</a>
        </li>        
      </ul>
    </nav>
    
    
  );
});

export default NavbarPhone;

