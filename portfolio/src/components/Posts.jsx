import React, { useEffect, useState, useRef, forwardRef } from "react";
import CardPost from "./CardPost";
import { Grid, Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { API_URL } from "../config";
 
const Posts = (props,ref) => {

	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState(null);

	useEffect( () => {
		fetch(API_URL + '/api/projets?populate=*', {
		method: 'GET',
		headers: {
		'Accept': 'application/json',
		Authorization:
      	'Bearer 814539379f88e65114c49d19804271bbeeb2a7dbf5e377c8f34b1738e11696088f9af28e913f62e40b79ae3ac61eea873c2009c196adecdb2ae2948f73c7929235ec0b8e103b3985b32147cfc341f59d234002a891edc20b90a1c2f9f3f7e2a71cf84c227713356c1155a4b89187fbee534af464c4b04d6e7d41061fc62cde0e',
		},
		})
		.then(response => response.json())
		// .then(data =>{ console.log(data)
		.then(data => {
			setPosts(data.data)
			setIsLoading(false)	
		});
	},[])

  return (
   
    <div className="projects">  
     <h1 ref={ref} className="text-my-yellow text-2xl font-canvasBlack mt-4 mb-4 text-center lg:text-4xl font-made_canvas fadeIn">Mes projets</h1>
	 <Grid container className="flex justify-center pt-6 " >
		{isLoading ?(
			<Box>
				<Skeleton variant="rectangular" width={210} height={118} />
				<Skeleton width="60%"/>
				<Skeleton/>
				<Skeleton/>
				<Skeleton/>
			</Box>
		) : posts.map( projet => <CardPost projet={projet} key={projet.id}/> )}

	 </Grid>
    </div>
  );
};

export default forwardRef(Posts);