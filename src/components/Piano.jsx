import React, { useEffect, useState } from 'react'
import { audio, keyboardMap } from '../config/config'
import SoundFontPlayer from "soundfont-player";
import { pianoRender, playAudio } from '../action/pianoAction';

export default function Piano() {
    const [piano, setPiano] = useState([]);
    const [playingNote, setPlayingNote] = useState([]);
    const [audioInit, setAudio] = useState(null);
    useEffect(async () => {
        let makeAudioPlayer = await SoundFontPlayer.instrument(audio, 'acoustic_grand_piano');
        setAudio(makeAudioPlayer);
        window.addEventListener("keydown", async (e) => {
            let keyDown = e.key.toUpperCase();
            if (!e.repeat) {
                setPlayingNote([keyDown]);
            }
        })
        window.addEventListener("keyup", (e) => {
            setPlayingNote([""]);
        })
    }, [])
    useEffect(() => {
        playAudio(audioInit, keyboardMap, playingNote);
        setPiano(pianoRender(keyboardMap, playingNote, audioInit));

    }, [playingNote,audioInit])

    return (
        <div className="piano-wraper">
            <div className="set">
                {piano}
            </div>
        </div >
    )
}
