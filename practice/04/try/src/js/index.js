let btn_list = document.getElementsByClassName('button');
for(i = 0; i < btn_list.length; i++){
    btn_list[i].onclick = (e) => {
        if(!e.target.parentElement.querySelector('.list').classList.contains('is-active')){
            e.target.parentElement.querySelector('.list').classList.add('is-active')
            return;
        }
        e.target.parentElement.querySelector('.list').classList.remove('is-active')
    }
}