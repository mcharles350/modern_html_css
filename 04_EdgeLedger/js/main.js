// var map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }

// Initialize and add map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").getElementsByClassName.opacity = 0.9;
  } else {
    document.querySelector("#navbar").getElementsByClassName.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});
