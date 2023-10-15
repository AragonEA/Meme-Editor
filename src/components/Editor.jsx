import html2canvas from "html2canvas";
import React, { useState } from "react";

const Editor = () => {

    const [memeText, setMemeText] = useState();

    return (
        <div>
            <section id="editor">
                <div className="nes-container with-title is-centered">
                    <p class="title">Options</p>
                    <input onChange={e => setMemeText(e.target.value)} className="nes-input input" type="text" placeholder="Enter your text" name="meme" arial-label="default input example" />
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


const downloadMeme = (e) => {
    html2canvas(document.querySelector("#export"), { useCORS: true })
        .then(canvas => {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "meme.jpg";
            link.href = img;
            link.click();
        })
}

function handleClick() {
    hideEditor();
    showTemplateSelector();
}

function hideEditor() {
    document.querySelector('#editor').className = 'hidden'
}

function showTemplateSelector() {
    document.querySelector('#imageSelector').className = '';
}

export default Editor;