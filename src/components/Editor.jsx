import React, { useState } from "react";

const Editor = () => {

    const [memeText, setMemeText] = useState();

    const textMeme = (e) => {
        setMemeText(e.target.value);
    }

    return (
        <div>
            <section id="editor">
                <div>
                    <input onChange={textMeme} className="nes-input input" type="text" placeholder="Enter your text" name="meme" arial-label="default input example" />
                    <button onClick={handleClick} type="button" className="nes-btn">Select Image</button>
                    <button onClick={downloadMeme} type="button" className="nes-btn">Download image</button>
                </div>

                <figure className="meme-figure" id="export">
                    <figcaption className="meme-text">{memeText}</figcaption>
                    <img src="" className="meme-img" alt="" />
                </figure>
            </section >
        </div>
    )
}

function handleClick(){
    hideEditor();
}

function hideEditor() {
    document.querySelector('#editor').className = 'hidden'
}

export default Editor;