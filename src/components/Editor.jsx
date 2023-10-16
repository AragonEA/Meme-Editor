import html2canvas from "html2canvas";
import React, { useState } from "react";

const Editor = () => {

    const [memeText, setMemeText] = useState();
    const [fontColor, setFontColor] = useState();
    const [fontSize, setFontSize] = useState(50);
    const [xAxis, setXAxis] = useState(0)
    const [yAxis, setYAxis] = useState(0)
    const [memeHeight, setMemeHeight] = useState()
    const [memeWidth, setMemeWidth] = useState()

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
                            <div>
                                <div>
                                    <label for="X">Position X:</label>
                                    <input onChange={e => setXAxis(e.target.value)} value={xAxis} type="range" id="positionX" name="X" min="-1000" max="1000" />
                                </div>
                                <div>
                                    <label for="Y">Position Y:</label>
                                    <input onChange={e => setYAxis(e.target.value)} value={yAxis} type="range" id="positionY" name="Y" min="-1000" max="1000" />
                                </div>
                            </div>
                        </div>
                        <div className="nes-container  with-title is-centered options-container">
                            <p class="title">Image</p>
                            <div>
                                <label for="memeHeight">Image height:</label>
                                <input onChange={e => setMemeHeight(e.target.value)} value={memeHeight} type="number" id="memeHeight" name="memeHeight" min="100" max="1500" placeholder="100" /> px
                            </div>
                            <div>
                                <label for="memeWidth">Image width:</label>
                                <input onChange={e => setMemeWidth(e.target.value)} value={memeWidth} type="number" id="memeWidth" name="memeWidth" min="100" max="1500" placeholder="100" /> px
                            </div>
                            <button onClick={setDefaultSize} type="button" className="nes-btn">Default size</button>
                        </div>
                    </section>
                </div>

                <figure className="meme-figure" id="export">
                    <figcaption style={{ color: `${fontColor}`,fontSize: `${fontSize}px`, transform: `translate(${xAxis}px, ${yAxis}px)` }} className="meme-text">{memeText}</figcaption>
                    <img style={{ height: `${memeHeight}px`, width: `${memeWidth}px` }} src="https://i.imgflip.com/2wifvo.jpg" className="meme-img" />
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

function setDefaultSize() {
    const img = document.querySelector('.meme-img');
    img.style.height = '100%';
    img.style.width = '100%';
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