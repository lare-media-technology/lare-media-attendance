'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CameraPhotoCapture: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [photoSrc, setPhotoSrc] = useState<string | null>(null);

	useEffect(() => {
		const initializeCamera = async () => {
			try {
				// Access the user's camera
				const stream = await navigator.mediaDevices.getUserMedia({ video: true });

				if (videoRef.current) {
					const currentVideoRef = videoRef.current; // Copy to a local variable
					currentVideoRef.srcObject = stream;
					currentVideoRef.play(); // Start playing the video stream

					// Wait for the video to be loaded and playing
					await new Promise(resolve => {
						currentVideoRef.addEventListener('canplay', resolve);
					});

				}
			} catch (error) {
				console.error('Error accessing camera:', error);
			}
		};

		initializeCamera();

		return () => {
			// Clean up: stop the camera when the component unmounts
			if (videoRef.current) {
				const currentVideoRef = videoRef.current; // Copy to a local variable
				const stream = currentVideoRef.srcObject as MediaStream;
				if (stream) {
					const tracks = stream.getTracks();
					tracks.forEach(track => track.stop());
				}
			}
		};
	}, []);

	const capturePhoto = () => {
		if (videoRef.current && canvasRef.current) {
			const video = videoRef.current;
			const canvas = canvasRef.current;
			const context = canvas.getContext('2d');

			// Set canvas dimensions to match its parent container
			if (context) {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;

				// Draw the current frame from the video feed onto the canvas
				context.drawImage(video, 0, 0, canvas.width, canvas.height);

				// Convert canvas to base64 data URL and set as the image source
				setPhotoSrc(canvas.toDataURL('image/png'));
			}
		}
	};
	return (
		<Box p="2">
			<Text fontSize='xl' align="center">Take Photo</Text>

			<video
				ref={videoRef}
				width="100%"
				height="400"
				autoPlay
				muted
				onClick={capturePhoto}
				style={{ cursor: 'pointer' }}
			></video>
			<Button w="full" color="white" bg="green.600" borderRadius="0" marginY="2" onClick={capturePhoto} >Capture Photo</Button>
			<canvas ref={canvasRef} style={{  width: '100%', height: '400px', display: 'none' }}></canvas>

			{photoSrc && (
				<>
					<img src={photoSrc} alt="Captured Photo" />
				</>
			)}
		</Box>
	);
};

export default CameraPhotoCapture;
