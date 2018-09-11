// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown_Function() {
    document.getElementById("location_dropdown").classList.toggle("show_location");
    document.getElementsByClassName("down_arrow_icon")[0].innerText = "▲";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#select_location')) {
    document.getElementsByClassName("down_arrow_icon")[0].innerText = "▼";
    var dropdowns = document.getElementsByClassName("location_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_location')) {
        openDropdown.classList.remove('show_location');
      }
    }
  }
}
//Toogle click VIE-ENG

//Jquery
$(document).ready(function(){
    //Hover dropdown menu
    $('ul.nav li.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(500).fadeIn(500);
      }, 
      function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(500).fadeOut(500);
    });
    //Hover and display Search
    $("#button_search").hover(
      function(){
        $("#input_search")[0].className = "form-control form_input_search_1";
        $("#button_search")[0].className = "btn btn-default btn_search_1";
      },
      function(){
        $("#input_search")[0].className = "form-control form_input_search";
        $("#button_search")[0].className = "btn btn-default btn_search";
    });
});

//Thu gọn và phóng to tiểu sử
function expand_collapse()
{
  if ($(".gioi_thieu_rutgon")[0].style.display != "none"){
    $(".gioi_thieu_rutgon")[0].style.display = "none";
    $(".gioi_thieu_full")[0].style.display = "block";
    $("#button_xemthem")[0].innerText = "Thu gọn";
  }
  else
  {
    $(".gioi_thieu_full")[0].style.display = "none";
    $(".gioi_thieu_rutgon")[0].style.display = "block";
    $("#button_xemthem")[0].innerText = "Xem thêm";
  }

}
