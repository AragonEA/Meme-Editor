import html2canvas from "html2canvas";
import React, { useState } from "react";

const Editor = () => {

    const [memeText, setMemeText] = useState();
    const [fontColor, setFontColor] = useState();
    const [fontSize, setFontSize] = useState(50);

    return (
        <div>
            <section id="editor">
                <div className="nes-container with-title is-centered">
                    <p class="title">Options</p>
                    <input onChange={e => setMemeText(e.target.value)} className="nes-input input" type="text" placeholder="Enter your text" name="meme" arial-label="default input example" />
                    <button onClick={handleClick} type="button" className="nes-btn">Select Image</button>
                    <button onClick={downloadMeme} type="button" className="nes-btn">Download image</button>
                    <section>
                        <div className="nes-container  with-title is-centered options-container">
                            <p class="title">Text</p>
                            <div>
                                <label for="fontColor">Color:</label>
                                <input onChange={e => setFontColor(e.target.value)} value={fontColor} type="color" id="fontColor" />
                            </div>
                            <div>
                                <label for="fontSize">Font size:</label>
                                <input onChange={e => setFontSize(e.target.value)} value={fontSize} type="number" id="fontSize" name="fontSize" max="150" placeholder="50" /> px
                            </div>
                        </div>
                    </section>
                </div>

                <figure className="meme-figure" id="export">
                    <img src="" className="meme-img" alt="" />
                    <figcaption style={{ color: `${fontColor}`,fontSize: `${fontSize}px` }} className="meme-text">{memeText}</figcaption>
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