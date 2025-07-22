import { useEffect } from "react";
const { VITE_APP_NAME } = import.meta.env;

// ------------------------------------------
// Custom tab title
const useDocumentTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} | ${VITE_APP_NAME}`;
	}, [title]);
};

export default useDocumentTitle;
