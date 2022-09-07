const accordioned = (e) => {
    e.preventDefault()
    // console.log(e.target)
    let el = e.target
    el.classList.toggle("active");
    el.querySelector('.chevron').removeAttribute('bottom')
    el.querySelector('.chevron').setAttribute('class', 'chevron top')
    let panel = el.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        el.querySelector('.chevron').removeAttribute('top')
        el.querySelector('.chevron').setAttribute('class', 'chevron bottom')
    } else {
        el.querySelector('.chevron').setAttribute('class', 'chevron top')
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};

export default accordioned;