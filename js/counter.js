$(function () {
  function runCounter($counter) {
    var target = parseInt($counter.attr("data-target")),
      count = 0,
      speed = 50;
    // 0부터 출발
    $counter.text(0);

    var counterInterval = setInterval(function () {
      count += Math.ceil(target / 100);
      if (count >= target) {
        count = target;
        clearInterval(counterInterval);
      }
      $counter.text(count);
    }, speed);
  } // function runCounter($counter)

  function checkScroll() {
    const scrollTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      elementTop = $("#counters").offset().top;

    $(".counter").each(function () {
      const $this = $(this);
      // elementTop = $this.offset().top;

      if (scrollTop + windowHeight > elementTop + 100) {
        // if (scrollTop + windowHeight > elementTop + 50 && scrollTop < elementTop + $this.outerHeight()) {
        // 위 if가 참이면 실행
        if (!$this.hasClass("active")) {
          $this.addClass("active");
          runCounter($this);
        }
      } else {
        $this.removeClass("active");
        $this.text(0);
      }
    });
  } // function checkScroll()

  // $.throttle(시간, 함수):
  // 시간: ms(밀리세컨드), ex. 100: 0.1초
  // $(window).on("scroll", $.throttle(100, checkScroll));
  $(window).on("scroll", $.throttle(100, checkScroll));
  checkScroll();
});
