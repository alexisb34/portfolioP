import React, { useRef, forwardRef } from "react";
 
const NavbarWeb =  forwardRef(({ onWorkClick, onAboutMeClick, onContactClick },ref) => {
  
  return (
   
    <nav className="hidden lg:flex invisible lg:visible lg:text-center justify-center fadeIn">  
      <ul className="gap-16 pt-5 text-center md:w-2/3 md:justify-between inline-flex">
        <li className="font-canvasBlack">
          <a onClick={onAboutMeClick} className="cursor-pointer transition duration-700 ease-in-out text-white hover:text-my-yellow active:text-my-yellow active:underline">Qui suis-je</a>
        </li>
        <li className="font-canvasBlack">
          <a onClick={onWorkClick} className="cursor-pointer transition duration-700 ease-in-out text-white hover:text-my-yellow active:text-my-yellow active:underline">Mes projets</a>
        </li>
        <li className="font-canvasBlack">
          <a onClick={onContactClick} className="cursor-pointer transition duration-700 ease-in-out text-white hover:text-my-yellow active:text-my-yellow active:underline">Contact</a>
        </li>        
      </ul>
    </nav>
  );
});

export default NavbarWeb;

