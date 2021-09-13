btn_list = document.getElementsByClassName('button');
for(i = 0; i < btn_list.length; i++){
    btn_list[i].onclick = function (){
        if(!this.parentElement.querySelector('.list').classList.contains('is-active')){
            this.parentElement.querySelector('.list').classList.add('is-active')
            return;
        }
        this.parentElement.querySelector('.list').classList.remove('is-active')
    }
}