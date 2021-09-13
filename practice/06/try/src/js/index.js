$(document).ready(function(){
    $("#button").click(()=>{
      if($('#name').val().trim() === '' ||$("input[name=gender]:checked").val()=== undefined )
      {
          alert('名前を入力したり性を選択したりしてください！！！');
      }
      else{
        $('#name-text').text($('#name').val());
        $('#gender-text').text($("input[name=gender]:checked").val())
        $('#text-wrapper').addClass('is-active');
      }
    })
})