function show_icon_share(e){
  document.getElementById("show_share").innerHTML="<span id='show_icon' style='float:right'><a href='https://www.facebook.com/sharer/sharer.php?u=https%3A//news.zing.vn/'><span>Facebook</span></a><a href='https://twitter.com/home?status=https%3A//news.zing.vn/'><span>Twitter</span></a><a href='#'><span>Google+</span></a><a href='#'><span>Github</span></a><a href='#'><span>Email</span></a></span>"
}
function hide_icon_share(e){
  document.getElementById("show_share").innerHTML="Share";
}
function zoom_image(e){
  function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
  document.getElementById("infomation").style.display="none";
  document.getElementById("show_zoom").style.display="block";
  imageZoom("myimage", "myresult");
}
function out_zoom_image(e){
  document.getElementById("show_zoom").style.display="none";
  document.getElementById("infomation").style.display="block";
}
function change_price(){
  var x=document.getElementById("my_Select").value;
  if(x==10.5){
    document.getElementById("price_select").style.display="none";
    document.getElementById("price_9").style.display="none";
    document.getElementById("price_8").style.display="none"
    document.getElementById("price_10.5").style.display="block";
  }
  if(x==8){
    document.getElementById("price_select").style.display="none";
    document.getElementById("price_9").style.display="none";
    document.getElementById("price_8").style.display="block"
    document.getElementById("price_10.5").style.display="none";
  }
  if(x==9){
    document.getElementById("price_select").style.display="none";
    document.getElementById("price_9").style.display="block";
    document.getElementById("price_8").style.display="none"
    document.getElementById("price_10.5").style.display="none";
  }
  if(x==0){
    document.getElementById("price_select").style.display="block";
    document.getElementById("price_9").style.display="none";
    document.getElementById("price_8").style.display="none"
    document.getElementById("price_10.5").style.display="none";
  }
}
var btn = document.getElementById("myBtn");
function powup_custom_btn(e) {
    document.getElementById('myModal').style.display = "block";
}
function close_powup(e) {
    document.getElementById('myModal').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

