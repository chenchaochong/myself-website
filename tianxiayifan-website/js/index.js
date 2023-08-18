// JavaScript Document
$(function () {
  // 飘雪花
  $(document).snowfall({
    image: "./img/huaban.png",
    flakeCount: 20,
    minSize: 8,
    maxSize: 30,
  });
  // 回到顶部
  $("#fixScroll").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1080) {
      $("#fixScroll").show();
    } else {
      $("#fixScroll").hide();
    }
  });
  $("#fixScroll").click(function () {
    $(window).scrollTop(0);
  });
  // 防偷窥,禁用f12
  document.onkeydown = function (e) {
    var currKey = 0,
      evt = e || window.event;
    currKey = evt.keyCode || evt.which || evt.charCode;
    if (currKey == 123) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
  };
  // js禁止鼠标右键
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
