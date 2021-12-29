import React from 'react'
import SoundFontPlayer from "soundfont-player";
import BackGround from '../components/BackGround';
import Piano from '../components/Piano';
export default function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}} >
            <Piano />
            <BackGround/>

        </div>
    )
}
