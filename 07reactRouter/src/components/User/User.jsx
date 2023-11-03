import { useParams } from "react-router-dom";


const User = () => {
	const {userid} = useParams()
	return (
		<div className="lg:container mx-auto bg-gray-600 text-white text-3xl p-4">
			<h1 className="text-center">User: {userid}</h1>
		</div>
	);
};

export default User;