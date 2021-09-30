$(document).ready(function () {
  let list = $(".list");
  let count = 1;
  let pause_carousel = false; // define flag for autoplaying
  const next_slide_time = 2000; // define time for every slide (in autoplay)
  const slide_width = parseInt($(".item").css("width")); // define slide width
  const carousel_len = $(list).children().length; // length before prepend&append ,not prepend & append yet
  let first_clone, last_clone; //define first & last node

  // cloning first and last node
  let clone_node = () => {
    first_clone = $(list.children()[0]).clone();
    last_clone = $(list.children()[carousel_len - 1]).clone();
    first_clone.attr("id", "first-clone");
    last_clone.attr("id", "last-clone");
    list.append(first_clone);
    list.prepend(last_clone);
  };

  // Slide animation function
  let slide_animation = (step, transition = "transform 0.3s") => {
    list.css("transition", transition);
    let move_distance = `translateX(-${slide_width * step}px)`;
    list.css("transform", move_distance);
  };

  // next slide func
  let next_slide = () => {
    if (count >= list.children().length - 1) return;
    count++;
    slide_animation(count);
  };

  // previous slide func
  let prev_slide = () => {
    if (count <= 0) return;
    count--;
    slide_animation(count);
  };

  //add event, reference from example
  let add_event = () => {
    // event autoplay
    let autoplay = setInterval(() => {
      if (!pause_carousel) next_slide();
    }, next_slide_time);

    // event click next slide
    $(".next").click((e) => {
      next_slide();
    });

    // event click prev slide
    $(".prev").click((e) => {
      prev_slide();
    });

    // stopping | continuing autoplay when hover | unhover in carousel
    $(".wrapper")
      .mouseenter(() => {
        pause_carousel = true;
      })
      .mouseleave(() => {
        pause_carousel = false;
      });
    //reset carousel
    list[0].addEventListener("transitionend", () => {
      if (list.children()[count].id === first_clone.attr("id")) {
        count = 1;
        slide_animation(count, "none");
      } else if (list.children()[count].id === last_clone.attr("id")) {
        count = carousel_len;
        slide_animation(count, "none");
      }
    });
  };
  /* -----------------Execute----------------- */

  // set first slide (carousel = [3,1,2,3,1] => carousel[0] = 3, carousel[1] = 1)
  clone_node();
  slide_animation(count, "none");

  // execute add event handle
  add_event();

  /* -----------------end Execute----------------- */
});
