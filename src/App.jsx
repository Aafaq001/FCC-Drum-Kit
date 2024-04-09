/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'
// import drumPads from "./Audio.json"


function App() {

  useEffect(() => { 
    document.addEventListener('keydown', (event) => {
    playAudio(event.key.toUpperCase());
  });
 }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const [displayText, setDisplayText] = useState(""); 
  function playAudio(sel){
   const audio = document.getElementById(sel);
   audio.play();
   setDisplayText(sel);
  }


  return (
    <>
      <div id='drum-machine'>
          <div className='display-main'>
          <div className='keyDiv'>{drumPads.map((drumPad) => (
            <div className='drum-pad' key={drumPad.src} id={drumPad.src} onClick={() => playAudio(drumPad.text)}>
              <h3>{drumPad.text}</h3>
              <audio className='clip' src={drumPad.src} id={drumPad.text}></audio>
            </div>
           ))}
           </div>
          <div id='display'>
           <h1>{displayText}</h1>
          </div>
          </div>
        </div>
    </>
  )
}

export default App
