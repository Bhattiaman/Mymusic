import React, { useEffect, useState } from 'react'; // Import React and hooks
import close from '../Assets/close.svg';
import logo from '../Assets/logo.svg';
import home from '../Assets/home.svg';

import search from '../Assets/search.svg';
import playlist from '../Assets/playlist.svg';
import PlayMusicButton from './PlayMusicButton';

export default function LeftSidebar() {
  const [songNames, setSongNames] = useState([]); // State for song names

  // // Async function to fetch data
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://v1.nocodeapi.com/bhattiaman/spotify/hOhAdbAizXcfoctD/browse/categories?country=india');

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     const names = data.categories.items.map(item => item.name);
  //     setSongNames(names); // Update state with song names
  //   } catch (error) {
  //     console.error('There was a problem with the fetch operation:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(); // Fetch data on component mount
  // }, []);

  const playMusic = ()=>{

  }

  return (
    <div className="left">
      <div className="close">
        <img width={30} className="invert" src={close} alt="close" />
      </div>
      <div className="fll home bg-grey rounded m-1 p-1">
        <div className="logo">
          <img width={110} className="invert" src={logo} alt="logo" />
        </div>
        <ul className='fl'>
          <li><img className="invert" src={home} alt="home" /> Home</li>
          <li><img className="invert" src={search} alt="search" /> Search</li>
        </ul>
      </div>
      <div className="library bg-grey rounded m-1 p-1">
        <div className="heading">
          <img src={playlist} alt='' />
          <h2>Your Library</h2>
        </div>
        <div className="songList">
          <ul>
            {/* {songNames.map((name, index) => (
              <li key={index}>{name}</li>
               // Display song names here
            ))} */}
           <PlayMusicButton />
          </ul>
        </div>
        <div className="footer">
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}

// Define the FooterLinks component
function FooterLinks() {
  const links = [
    { href: 'https://www.spotify.com/jp/legal/', text: 'Legal' },
    { href: 'https://www.spotify.com/jp/privacy/', text: 'Privacy Center' },
    { href: 'https://www.spotify.com/jp/legal/privacy-policy/', text: 'Privacy Policy' },
    { href: 'https://www.spotify.com/jp/legal/cookies-policy/', text: 'Cookies' },
    { href: 'https://www.spotify.com/jp/legal/privacy-policy/#s3', text: 'About Ads' },
    { href: 'https://www.spotify.com/jp/accessibility/', text: 'Accessibility' },
  ];

  return (
    <>
      {links.map((link, idx) => (
        <div key={idx}>
          <a href={link.href}>
            <span>{link.text}</span>
          </a>
        </div>
      ))}
    </>
  );
}
