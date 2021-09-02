import {Audio, useCurrentFrame, useVideoConfig} from 'remotion';
import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import {ProfileImage} from './ProfileImage';

export const LogoVisualizer: React.FC<{
	staticImageUri: string;
	audioUri: string;
	color: string;
}> = ({audioUri, staticImageUri, color}) => {
	const frame = useCurrentFrame();

	const {fps} = useVideoConfig();

	const audioData = useAudioData(audioUri);

	if (!audioData) {
		return null;
	}

	const visualization = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples: 1,
	});

	const blobStyles: React.CSSProperties = {
		zIndex: 0,
		position: 'absolute',
		background: color,
		borderRadius: 10000,
		width: 575 + (1000 * visualization[0] - 5),
		minWidth: 575,
		minHeight: 575,
		height: 575 + (1000 * visualization[0] - 5),
		transition: '.15s ease',
		boxShadow: `2px 2px 15px 4px ${color}`,
	};

	const backgroundStyles: React.CSSProperties = {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'transparent',
	};

	return (
		<div style={backgroundStyles}>
			<Audio src={audioUri} />
			<ProfileImage uri={staticImageUri} />
			<div style={blobStyles} />
		</div>
	);
};
