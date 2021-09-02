import {Img} from 'remotion';
import React from 'react';

export const ProfileImage: React.FC<{uri: string}> = ({uri}) => {
	const imageStyles: React.CSSProperties = {
		width: 600,
		height: 600,
		borderRadius: 600,
		borderColor: '#212121',
		position: 'absolute',
		zIndex: 5,
		boxShadow: '4px 4px 15px 5px #b0b0b0',
	};

	return <Img src={uri} style={imageStyles} />;
};
