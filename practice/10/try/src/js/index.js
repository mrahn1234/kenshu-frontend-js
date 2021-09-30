$(document).ready(function () {
  let list = $(".list");
  let count = 1;
  let slide_width = parseInt($(".item").css("width"));
  let carousel_len = $(list).children().length; // length before prepend&append ,not prepend & append yet
  let first_clone = $(list.children()[0]).clone();
  let last_clone = $(list.children()[carousel_len - 1]).clone();
  first_clone.attr("id", "first-clone");
  last_clone.attr("id", "last-clone");
  list.append(first_clone);
  list.prepend(last_clone);
  let re_css = (step, transition = "transform 0.3s") => {
    list.css("transition", transition);
    let move_distance = `translateX(-${slide_width * count}px)`;
    list.css("transform", move_distance);
  };
  re_css(count, "none");  // set first slide (count = 0: last_clone)
  let next_slide = () => {
    if (count >= list.children().length - 1) return;
    count++;
    re_css(count);
  };
  let prev_slide = () => {
    if (count <= 0) return;
    count--;
    re_css(count);
  };
  let pause_carousel = false;
  let next_slide_time = 2000;
  let autoplay = setInterval(() => {
    if (!pause_carousel) next_slide();
  }, next_slide_time);
  $(".next").click(function (e) {
    next_slide();
  });
  $(".prev").click(function (e) {
    prev_slide();
  });
  $(".wrapper")
    .mouseenter(() => {
      pause_carousel = true;
    })
    .mouseleave(() => {
      pause_carousel = false;
    });
  list[0].addEventListener("transitionend", function () {
    if (list.children()[count].id === first_clone.attr("id")) {
      count = 1;
      re_css(count, "none");
    } else if (list.children()[count].id === last_clone.attr("id")) {
      count = carousel_len;
      re_css(count, "none");
    }
  });
});
