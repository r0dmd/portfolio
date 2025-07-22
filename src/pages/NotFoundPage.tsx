import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/index.js";

// ------------------------------------------
const NotFoundPage = () => {
	useDocumentTitle("Oops!");
	const navigate = useNavigate();

	const goHome = () => {
		navigate("/");
	};

	return (
		<main>
			<h2>Sorry!</h2>
			<p>The page you were trying to access was not found.</p>
			<button
				type="button"
				onClick={goHome}
				className="px-4 py-2 text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700"
			>
				Go back to the homepage
			</button>
		</main>
	);
};

export default NotFoundPage;
