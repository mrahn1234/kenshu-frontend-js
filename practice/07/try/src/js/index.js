$(document).ready(function () {
  $("#button").click((e) => {
    var input_name = $("input[name='name']").val();
    var input_mail = $("input[name='mail']").val();
    var input_sex = $("input[name=gender]:checked").val();
    var input_age = $("select[name='age']").val();
    var input_term = $("#term").is(":checked");
    if (
      input_name.trim() === "" ||
      input_mail.trim() === "" ||
      input_age.trim() === "" ||
      input_sex === undefined ||
      !input_term
    ) {
      e.preventDefault();
      $('#error').addClass('is-active');
    }
  });
});
