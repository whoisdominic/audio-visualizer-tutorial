import React, {useEffect} from 'react';
import {Composition} from 'remotion';
import {LogoVisualizer} from './LogoVisualizer';
import sound from './videoplayback.mp4';
import image from './3AB724E1-110A-4959-A4AF-E527F428BDE3_1_102_o.jpeg';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="LogoVisualizer"
			component={LogoVisualizer}
			durationInFrames={60 * 40}
			fps={60}
			width={1080}
			height={1080}
			defaultProps={{
				staticImageUri: image,
				audioUri: sound,
				color: 'teal',
			}}
		/>
	);
};
