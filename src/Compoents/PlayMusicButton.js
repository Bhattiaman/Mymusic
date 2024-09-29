import React, { useRef } from 'react';
import playicon from '../Assets/play.svg';

const fetchMusicFiles = () => {
  const musicContext = require.context('../Album', false, /\.mp3$/); // Corrected the variable name
  return musicContext.keys().map((file) => ({
    name: file.replace('./', '').replace('.mp3',''), // Removes the './' prefix from the file name
    path: musicContext(file), // Fixed the semicolon to a comma
  }));
};

const PlayMusicButton = () => {
  const audioRef = useRef(null); // Create a ref to access the audio element
  const [currentSong, setCurrentSong] = React.useState(null); // State to track the current song

  const playMusic = (path) => {
    if (audioRef.current) {
      audioRef.current.src = path; // Set the audio source to the selected song
      audioRef.current.play(); // Play the audio
      setCurrentSong(path); // Update the current song state
    }
  };

  const musicFiles = fetchMusicFiles(); // Fetch the list of music files

  return (
    <div>
      <audio ref={audioRef} />
      <ul>
        {musicFiles.map((file, index) => (
          <li key={index}>
            {file.name}
            <div className='spotify-play-button'>
              <img onClick={() => playMusic(file.path)} src={playicon} alt="Click here to play music" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayMusicButton;
