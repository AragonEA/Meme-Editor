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


export default Selector;