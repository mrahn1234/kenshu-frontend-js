$(document).ready(function () {
  $("#button").click((e) => {
    const input_name = $("input[name='name']").val();
    const input_mail = $("input[name='mail']").val();
    const input_sex = $("input[name=gender]:checked").val();
    const input_age = $("select[name='age']").val();
    const input_term = $("#term").is(":checked");
    if (
      input_name.trim() === "" ||
      input_mail.trim() === "" ||
      input_age.trim() === "" ||
      input_sex === undefined ||
      !input_term
    ) {
      e.preventDefault();
      $("#error").addClass("is-active");
    }
  });
});
