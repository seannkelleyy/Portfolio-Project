import axios from "axios";
import { useEffect, useState } from "react";

export const PictureService = () => {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		axios
			.get("https://picsum.photos/v2/list?page=2&limit=10")
			.then(({ data }) => {
				const formattedPictures = data.slice(0, 10).map((picture) => ({
					image: picture.download_url,
				}));
				setPictures(formattedPictures);
			});
	}, []);

	return pictures;
};
