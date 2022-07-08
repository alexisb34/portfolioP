import React from "react";
import { useState, useRef, forwardRef } from "react";
import gif from '../assets/images/mr-bean.gif';
 
const Contact = (props, ref) => {

	const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    apikey: "911a574e-cb2e-46aa-bce7-be98735f08d0",
    subject: "New Submission from Web3Forms",
    redirect: "https://web3forms.com/success",
    firstName: "",
    email: "",
    message: ""
  });
  const { firstName, email, message } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const form = useRef(null);
  const result = useRef(null);

	const handleSubmit = (e) => {

    const formData = new FormData(form.current);
    console.log(formData);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        setSubmitted(true);
        // result.innerHTML = json.message;
        // result.classList.remove("text-gray-500");
        // result.classList.add("text-green-500");
      }
      else {
        console.log(response);
        // result.innerHTML = json.message;
        // result.classList.remove("text-gray-500");
        // result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.current.reset();
      setTimeout(() => {
        // result.style.display = "none";
      }, 5000);
    });
  };
	
	if (submitted) {
	  return (
		<>
		  <div className="text-2xl text-white text-center mt-16">Merci pour votre message !</div>
		  <div className="text-md text-white text-center pb-3">On se contacte rapidement.</div>
      <img className= "rounded-lg m-auto block pb-64"src= {gif} alt="gif mr bean"/>
		</>
	  );
	}
		  
	return (
   
    <form
      ref={form}
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      target="_blank"
      className="pb-10 fadeIn"
    >
      <input type="hidden" name="access_key" value="911a574e-cb2e-46aa-bce7-be98735f08d0"></input>
      <h1 ref={ref} className="text-my-yellow text-2xl lg:text-4xl font-canvasBlack mt-20 text-center font-made_canvas">Contact</h1>
      <div className="mb-3 pt-16 text-center">
        <input type="hidden" name="from_name" value="Portfolio"/>
        <input type="checkbox" name="botcheck" id="" style={{ display: "none" }}/>
        <input type="hidden" name="apikey" value="911a574e-cb2e-46aa-bce7-be98735f08d0" />
        <input
          type="hidden"
          name="subject"
          value= { "Nouveau message de " + firstName }
        />
        <input
          type="text"
          placeholder="Votre nom"
          name="name"
          value={firstName}
          onChange={handleChange("firstName")}
          className="px-3 py-3 max-w-2xl placeholder-gray-400 text-gray-600 relative bg-white w-3/5 rounded text-sm border-0 shadow focus:outline-none focus:ring focus:ring-my-yellow"
          required
        />
      </div>
      <div className="mb-3 pt-0 text-center">
        <input
          type="email"
          placeholder="exemple@gmail.com"
          name="email"
          value={email}
          onChange={handleChange("email")}
          className="px-3 py-3 max-w-2xl placeholder-gray-400 text-gray-600 relative bg-white w-3/5 rounded text-sm border-0 shadow focus:outline-none focus:ring focus:ring-my-yellow"
          required
        />
      </div>
      <div className="mb-3 pt-0 text-center">
        <textarea
          placeholder="Votre message"
          rows="4"
          name="message"
          onChange={handleChange("message")}
          value={message}
          className="px-3 py-3 max-w-2xl placeholder-gray-400 text-gray-600 relative bg-white w-3/5 rounded text-sm border-0 shadow focus:outline-none focus:ring focus:ring-my-yellow"
          required
        />
      </div>
      <div className="mb-3 pt-0 text-center ">
        <button
          className="glow-on-hover border-2 border-my-yellow mb-8 hover:text-my-yellow transition duration-700 ease-in-out"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default forwardRef(Contact);