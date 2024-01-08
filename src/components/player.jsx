import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import Album from './album';
// import IITLTWD from '../images/IITLTWD.jpg';
import Rex from '../tracks/Rex.mp3';
// import Fireplay from '../tracks/Fireplay.mp3'
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

export default function Player() {





  return(  
<>
    {/* <Album image={IITLTWD} /> */}
    <AudioPlayer
    // autoPlay
    src={Rex}
    onPlay={e => console.log("Listening to Rawk n Roll")}
    // other props here
  />
  </>
  )
  };


















// import React, { useState, useEffect } from 'react';
// import Album from './album';
// import IITLTWD from '../images/IITLTWD.jpg';
// import Rex from '../tracks/Rex.mp3';
// import Fireplay from '../tracks/Fireplay.mp3'
// import { Howl } from 'howler';

// const AlbumPlayer = () => {
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audioPlayer, setAudioPlayer] = useState(null);

//   const tracks = [
//     {
//       id: 1,
//       title: 'Rex',
//       src: {Rex},
//     },
//     {
//       id: 2,
//       title: 'Fireplay',
//       src: {Fireplay},
//     },
//     // Add more tracks as needed
//   ];
  
//   useEffect(() => {
//     if (currentTrack) {
//       const newAudioPlayer = new Howl({
//         src: [currentTrack.src],
//         html5: true,
//       });

//       setAudioPlayer(newAudioPlayer);

//       return () => {
//         newAudioPlayer.unload();
//       };
//     }
//   }, [currentTrack]);

//   const handlePlayPause = () => {
//     if (audioPlayer) {
//       if (isPlaying) {
//         audioPlayer.pause();
//       } else {
//         audioPlayer.play();
//       }

//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleTrackChange = (track) => {
//     if (audioPlayer) {
//       audioPlayer.stop();
//       audioPlayer.unload();
//     }
  
//     setCurrentTrack(track);
//     setIsPlaying(true);
//   };
  

//   return (
//     <div>
//       {/* <h2>Album Name</h2> */}
//       <Album image={IITLTWD}/>
//       <div>
//         <ul>
//           {tracks.map((track) => (
//             <li key={track.id}>
//               <button onClick={() => handleTrackChange(track)}>
//                 {track.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {currentTrack && (
//         <div>
//           <h3>Now Playing: {currentTrack.title}</h3>
//           <button onClick={handlePlayPause}>
//             {isPlaying ? 'Pause' : 'Play'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlbumPlayer;


