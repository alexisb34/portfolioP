import React from "react";
import image from '../assets/images/page_accueil.jpg';

const Quote = () => {

	return(

	<div className="lg:grid lg: grid-cols-7">
		<img className= "rounded-lg m-auto block max-w-[88%] lg:max-w-xs lg:m-10 lg:mt-0 lg:col-span-2 fadeIn"src= {image} alt="image"/>
		<div id="quote" className="text-white text-center pl-8 m-auto invisible lg:visible lg:col-span-4 fadeIn">
			"La mémoire ne filme pas, la mémoire photographie."<br/>
			<span className="font-made_canvas text-base pl-24 fadeIn">Milan Kundera</span>
		</div>
	</div> 
	);
};

export default Quote;