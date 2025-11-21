$(window).scroll(function () {
  //변수 선언
  const windowHeight = $(window).height();
  let windowScrollTop = $(window).scrollTop();
  const speed = 1000,
    easing = "easeOutExpo",
    pos = 0,
    offset = 2.5; // 숫자 커질수록 빨리 나타남

  // 우측 상단에 스크롤 양, 창 높이값 출력
  $(".result").html(windowScrollTop + " , " + windowHeight);

  if (windowScrollTop > windowHeight * offset) {
    //참일 경우
    // i는 0, 1, 2, 3
    for (let i = 0; i < 4; i++) {
      $(".motion")
        .eq(i)
        .stop()
        .animate({ top: pos, opacity: 1 }, (speed * (i + 1)) / 2, easing);
    }
  } else {
    //거짓일 경우 else 부분 없으면 최초 1회만 동작
    $(".motion")
      .stop()
      .animate({ top: pos + 600, opacity: 0 }, speed, easing);
  }

  // $(window).scroll
   if (windowScrollTop > 0) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
}); // $(window).scroll
