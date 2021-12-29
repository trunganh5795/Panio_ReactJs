
export const playAudio = (audioInit, keyboardMap, playingNote) => {
    if (audioInit) {
        let note = keyboardMap["_" + playingNote[0]]
        if (note) {
            audioInit.play(note)
        }

    }
}
export const pianoRender = (keyboardMap, playingNote, audioInit) => {
    let arrayKey = Object.keys(keyboardMap);
    return arrayKey.map((item, index) => {
        if (keyboardMap[item].includes("#")) {
            return (
                <div className="back-note-wraper" key={index}>
                    <div className={`note black ${"_" + playingNote[0] === item ? "active" : ""}`} key={index}
                        onClick={() => {
                            playAudio(audioInit, keyboardMap, [item.replace("_", "")])
                        }}
                    >
                        <span>{item.replace("_", "")}</span>
                    </div>
                </div >
            )
        } else {
            return (
                <div className={`note white ${"_" + playingNote[0] === item ? "active" : ""}`} key={index}
                    onClick={() => {
                        playAudio(audioInit, keyboardMap, [item.replace("_", "")])
                    }}
                >
                    <span>{item.replace("_", "")}</span>
                </div>
            )
        }
    })

}