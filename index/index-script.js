$(document).ready(() => {
  $('#select').select2({ 
    width: "100%"
});

  let active = false;
  const nav = $("#mobile-menu");
  const copy = $('.logos-slide').clone()
  $('.logos').append(copy)



  function toggleClick() {
    active = !active;

    if (active) {
      console.log(active);
      nav.css({ opacity: 1, zIndex: 4, visibility: "visible" });

    } else {
      console.log("closed");
      nav.css({ opacity: 0, zIndex: 0, visibility: "hidden" });

    }
  }

  // Add an event listener to the checkbox
  $("#check").on("click", toggleClick);
});