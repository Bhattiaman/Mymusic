import React, { useEffect, useState } from 'react'; // Import React and hooks
import prevsong from '../Assets/prevsong.svg';
import play from '../Assets/play.svg';
import nextsong from '../Assets/nextsong.svg';
import volume from '../Assets/volume.svg';

export default function RightSidebar() {
    const [songDetails, setSongDetails] = useState([
        // // Sample song data (replace with your fetched data)
        // {
        //     id: 1,
        //     name: 'Song Title 1',
        //     image: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg'
        // },
        // {
        //     id: 2,
        //     name: 'Song Title 2',
        //     image: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg'
        // },
        // {
        //     id: 3,
        //     name: 'Song Title 3',
        //     image: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg'
        // }
    ]);

    return (
        <div className="right bg-grey rounded">
            <div className="header">
                <div className="nav">
                    <div className="hamburgerContainer">
                        <img width={40} className="invert hamburger" src="../Assets/hamburger.svg" alt="hamburger" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="buttons">
                    <button className="signupbtn">Sign up</button>
                    <button className="loginbtn">Log in</button>
                </div>
            </div>

            <div className="spotifyPlaylists">
                <h1>Spotify Playlists</h1>
                <div className="cardContainer">
                    {songDetails.map((song) => (
                        <SongCard key={song.id} song={song} />
                    ))}
                </div>

                <Playbar />
            </div>
        </div>
    );
}

function SongCard({ song }) {
    return (
        <div className="songCard">
            <div className="imageContainer">
                <img src={song.image} alt={song.name} className="songImage" />
                <div className="playButtonContainer">
                    <img src={play} alt="Play" className="playButton" />
                </div>
            </div>
            <div className="songName">{song.name}</div>
        </div>
    );
}

function Playbar() {
    return (
        <div className="playbar">
            <div className="seekbar">
                <div className="circle"></div>
            </div>

            <div className="abovebar">
                <div className="songinfo"></div>
                <div className="songbuttons">
                    <img width={35} id="previous" src={prevsong} alt="previous song" />
                    <img width={35} id="play" src={play} alt="play" />
                    <img width={35} id="next" src={nextsong} alt="next song" />
                </div>

                <div className="timevol">
                    <div className="songtime"></div>
                    <div className="volume">
                        <img width={25} src={volume} alt="volume" />
                        <div className="range">
                            <input type="range" name="volume" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    