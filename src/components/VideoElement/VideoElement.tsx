import { useRef } from "react";

export const VideoElement = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = (): void => {
    if (videoRef?.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={play}>Play</button>
      <video controls ref={videoRef} id="video">
        <source
          src="https://file-examples.com/storage/fef4e75e176737761a179bf/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
