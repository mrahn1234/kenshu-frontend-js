let textbox = document.getElementById('input');

textbox.oninput = function(){
    if(this.value.indexOf('yes') > -1 || this.value.includes('yes')) document.getElementById('text').textContent = this.value;
    else document.getElementById('text').textContent='';
}