$(document).ready(() => {
  $('#select').select2({ 
    width: "100%"
});

  let active = false;
  const container = $('.container')
  const nav = $("#mobile-menu");
  const bar = $(['.bar'])
  const barComponents = $('#check, .top, .middle, .bottom')
  const copy = $('.logos-slide').clone()
  $('.logos').append(copy)



  function toggleClick() {
    active = !active;

    if (active) {
      console.log(active);
      nav.css({ opacity: 1, zIndex: 4, visibility: "visible" });
      container.append(bar);
      bar.append(barComponents)

    } else {
      console.log("closed");
      nav.css({ opacity: 0, zIndex: 0, visibility: "hidden" });

    }
  }

  // Add an event listener to the checkbox
  $("#check").on("click", toggleClick);
});