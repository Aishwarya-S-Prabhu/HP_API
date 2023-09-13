// import React, { useState, useEffect } from 'react';

// function BackgroundMusic({ audioSrc }) {
//   const [audio] = useState(new Audio(audioSrc));
//   const [permissionGranted, setPermissionGranted] = useState(false);

//   useEffect(() => {
//     if (permissionGranted) {
//       audio.play();
//     }
//   }, [audio, permissionGranted]);

//   const handlePermission = () => {
//     if (!permissionGranted) {
//       audio.play();
//       setPermissionGranted(true);
//     }
//   };

//   return (
//     <div>
//       {!permissionGranted && (
//         <div>
//           <p>This website uses background music.</p>
//           <button onClick={handlePermission}>Click to Enable Music</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BackgroundMusic;


import React, { useState, useEffect } from 'react';

function BackgroundMusic({ audioSrc }) {
  const [audio] = useState(new Audio(audioSrc));
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    if (audioPlayed) {
      audio.play();
    }
  }, [audio, audioPlayed]);

  const handleInteraction = () => {
    if (!audioPlayed) {
      setAudioPlayed(true);
    }
  };

  return (
    <div onClick={handleInteraction}>
      <p>This website uses background music.</p>
      {audioPlayed && <p>Background music is playing.</p>}
    </div>
  );
}

export default BackgroundMusic;
