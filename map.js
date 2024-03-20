function initMap() {

  const uluru = { lat: -25.344, lng: 131.036 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function open_Home() {
  location.replace("index.html")
}

function open_Stiri_si_Noutati() {
  location.replace("Știri și Noutăți.html")
}

function open_Stiri() {
  location.replace("Știri.html")
}

function open_Educatie() {
  location.replace("Educație.html")
}

function open_Nivel_licenta_master() {
  location.replace("Nivel licență master.html")
}

function open_Materiale_didactice() {
  location.replace("Materiale didactice.html")
}

function open_Disciplina() {
  location.replace("Disciplina.html")
}

function open_Cercetare() {
  location.replace("Cercetare.html")
}

function open_ITEC_GCER() {
  location.replace("ITEC GCER.html")
}

function open_Personal() {
  location.replace("Personal.html")
}

function open_Contact() {
  location.replace("Contact.html")
}





