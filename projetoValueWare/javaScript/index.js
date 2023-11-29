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
    $(".dropdown").on("show.bs.dropdown", function () {
        $(".dropdown.show").removeClass("show");
    });
});
