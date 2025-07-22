import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header, Footer } from "./components/index";
import { HomePage, NotFoundPage } from "./pages/index";

// ------------------------------------------
// Main root component. Also used to configure global elements like notifications, shared contexts and main routing
function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
			<Toaster position="top-center" />
		</>
	);
}

export default App;
