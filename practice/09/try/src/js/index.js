$(document).ready(function () {
  $(".thumb-item").mouseenter((e) => {
    $(".is-active").removeClass("is-active");
    let path = $(e.target).attr("src");
    if (path) $(".main img").attr("src", path.replace("_small", "_large"));
  });
});
