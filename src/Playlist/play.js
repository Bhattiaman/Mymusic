// import React, { useState } from 'react';
// import Raftaar from '../Album/Raftaar x Dhanda Nyoliwala_Chora Baba Ka.mp3';
// import playIcon from '../Assets/play-icon.svg'; // Replace with your actual path to the play icon





// const Play = () => {
//   const [audio] = useState(new Audio(Raftaar)); // Create audio instance once
//   const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing
//   const [songs, setSongs] = useState([
//     { id: 1, name: 'First Song', audio: Raftaar },
//     { id: 2, name: 'Second Song', audio: Raftaar },
//     { id: 3, name: 'Third Song', audio: Raftaar },
//     { id: 4, name: 'Fourth Song', audio: Raftaar }
//   ]);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const handleTogglePlay = (index) => {
//     if (isPlaying) {
//       audio.pause(); // Pause the audio if it is currently playing
//     } else {
//       audio.src = songs[index].audio; // Change audio source to the selected song
//       audio.play().catch((error) => {
//         console.error("Error playing audio:", error);
//       });
//     }
//     setIsPlaying(!isPlaying); // Toggle the playing state
//   };

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDrop = (index) => {
//     const updatedSongs = [...songs];
//     const [removed] = updatedSongs.splice(draggedIndex, 1);
//     updatedSongs.splice(index, 0, removed);
//     setSongs(updatedSongs);
//     setDraggedIndex(null); // Reset dragged index
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Prevent default behavior to allow drop
//   };

//   return (
//     <div>
//       <ul>
//         {songs.map((song, index) => (
//           <li
//             key={song.id}
//             style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
//             draggable
//             onDragStart={() => handleDragStart(index)}
//             onDragOver={handleDragOver}
//             onDrop={() => handleDrop(index)}
//           >
//             <span>{song.name}</span> {/* Display the song name */}
//             <img
//               src={playIcon}
//               alt="Play/Pause"
//               style={{ marginLeft: '10px', width: '20px', height: '20px', cursor: 'pointer' }}
//               onClick={() => handleTogglePlay(index)} // Click on the icon to play/pause music
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Play;
