const parentContainer = document.querySelector(".service-box");

parentContainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('readmore-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('service-desc-readmore');

    currentText.classList.toggle('service-desc-readmore--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})