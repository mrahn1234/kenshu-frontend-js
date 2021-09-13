var modal_open = () => {
    document.querySelector('#modal-overlay').classList.add('is-active');
    document.querySelector('#modal-content').classList.add('is-active');
}

var modal_close = () => {
    document.querySelector('#modal-overlay').classList.remove('is-active');
    document.querySelector('#modal-content').classList.remove('is-active');
}

document.querySelector('#button').onclick = modal_open;
document.querySelector('#modal-close').onclick = modal_close;
document.querySelector('#modal-overlay').onclick = modal_close;