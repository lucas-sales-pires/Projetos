$(document).ready(function() {
    $('#carouselExampleSlidesOnly').carousel({
      interval: 5000, 
    });
  });
  $(document).ready(function() {
    $("#btn-contato").click(function() {
      $("#myModal").modal("show");
    });
  });
  $(document).ready(function () {
    // Fecha outros dropdowns quando um é clicado
    $(".dropdown").on("show.bs.dropdown", function () {
        $(".dropdown.show").removeClass("show");
    });
});
