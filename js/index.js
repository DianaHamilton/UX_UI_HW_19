console.log("worked! homework#19");

function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 3000);
  
  $(".search").on("click", function(){
    $(".search").toggleClass("active");
    if ($(".search").hasClass("active")) {
      $(".searchBar").css("height", "30vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }
    else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");
    }
  });
  
  $(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });
   
