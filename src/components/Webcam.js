import * as React from 'react';

export default function Webcam() {
  function useVideoStream(requestedOptions) {

  const [videoStream,
        setVideoStream] = React.useState(undefined);

  React.useEffect(() => {
    async function enableStream(){
      if(navigator.mediaDevices.getUserMedia)
    {
      navigator.mediaDevices.getUserMedia(requestedOptions)
        .then(stream => setVideoStream(stream))
        .catch(err => console.error(err));
    }
    }

    if(!videoStream)
    {
      enableStream();
    }
    else {
      return function cleanup() {
        console.log('Cleaning up');
        videoStream.getTracks().forEach(track => {track.stop();});
      };
    }
  }, []);

    return videoStream;
  }

  const videoStream = useVideoStream({video:true});
  const videoRef = React.useRef(null);

  if(videoStream && videoRef.current && !videoRef.current.srcObject)
  {videoRef.current.srcObject = videoStream;}

  function handlePlay()
  {videoRef.current.play();}

  return (
    <video width={320} height={240} ref={videoRef} onCanPlay={handlePlay} autoPlay/>
  )
}
