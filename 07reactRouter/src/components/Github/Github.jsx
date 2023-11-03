// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";



const Github = () => {
	const data = useLoaderData()
	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/GausAlMunirTushar')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		setData(data)
	// 	})
	// }, [])
	
	return (
		<div className="container mx-auto text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			Username: {data.name}
			<img className="rounded-full" src={data.avatar_url} alt="Github Picture" />
		</div>
	);
};

export default Github;


export const githubInfoLoader = async () => {
	const response = await fetch('https://api.github.com/users/GausAlMunirTushar')
	return response.json()
}