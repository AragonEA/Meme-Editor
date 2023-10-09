export const handleClick = (e) => {
  const editorImg = document.querySelector('.meme-img');
  hideTemplateSelector();
  editorImg.src = e.target.dataset.imgSrc;
  ShowEditor();
}

const Selector = () => {
  return (
    <section id="imageSelector" className="hidden">
    </section>
  )
}

function ShowEditor() {
  document.querySelector('#editor').className = ''
}

function hideTemplateSelector() {
  document.querySelector('#imageSelector').className = 'hidden';
}


export default Selector;