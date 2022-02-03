const getIdealImageMaxSrc = (img, max) => {
	if (img.src?.images) {
		img = {
			...img,
			src: {
				...img.src,
				images: img.src.images.filter((img) => img.width <= max)
			},
		};
	}

	return img;
};

export default getIdealImageMaxSrc;
