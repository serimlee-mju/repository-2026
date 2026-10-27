$(document).ready(function () {
  let hourAngle = 0;
  let minuteAngle = 0;
  let secondAngle = 0;

  setInterval(function () {
    if ($(".rightbuttons[data-name='li']").hasClass("active")) {
      return;
    }

    hourAngle += 6;
    minuteAngle += 6;
    secondAngle += 6;

    $(".koreahour").css("transform", "rotate(" + hourAngle + "deg)");
    $(".koreaminute").css("transform", "rotate(" + minuteAngle + "deg)");
    $(".koreasecond").css("transform", "rotate(" + secondAngle + "deg)");
  }, 1000);

  $(".rightbuttons").on("mouseenter", function () {
    let name = $(this).attr("data-name");
    $(this).attr("src", `./assets/button-${name}-on.png`);
  });

  $(".rightbuttons").on("mouseleave", function () {
    let name = $(this).attr("data-name");

    if (!$(this).hasClass("active")) {
      $(this).attr("src", `./assets/button-${name}.png`);
    }
  });

  let karelInterval = null;
  let sequenceInterval = null;

  $(".rightbuttons").on("click", function () {
    let clickedName = $(this).attr("data-name");

    if (clickedName === "geon" && $(this).hasClass("active")) {
      let currentSrc = $(".koreahour").attr("src");

      if (currentSrc.includes("change1-time.png")) {
        $(".koreahour").attr("src", "./assets/change1-timego.png");
        $(".koreaminute").attr("src", "./assets/change1-minutego.png");
        $(".koreasecond").attr("src", "./assets/change1-secondgo.png");
        return;
      }

      $(this).removeClass("active");
      $(this).attr("src", "./assets/button-geon.png");

      $(".koreahour").attr("src", "./assets/time.png");
      $(".koreaminute").attr("src", "./assets/minute.png");
      $(".koreasecond").attr("src", "./assets/second.png");
      return;
    }

    if (clickedName === "gon" && $(this).hasClass("active")) {
      let currentSrc = $(".koreahour").attr("src");

      if (currentSrc.includes("change2-time.png")) {
        $(".koreahour").attr("src", "./assets/change2-timego.png");
        $(".koreaminute").attr("src", "./assets/change2-minutego.png");
        $(".koreasecond").attr("src", "./assets/change2-secondgo.png");
        return;
      }

      $(this).removeClass("active");
      $(this).attr("src", "./assets/button-gon.png");

      $(".koreahour").attr("src", "./assets/time.png");
      $(".koreaminute").attr("src", "./assets/minute.png");
      $(".koreasecond").attr("src", "./assets/second.png");
      return;
    }

    if (clickedName === "gam" && $(this).hasClass("active")) {
      let currentSrc = $(".koreahour").attr("src");

      if (currentSrc.includes("change3-time.png")) {
        $(".koreahour").attr("src", "./assets/change3-timego.png");
        $(".koreaminute").attr("src", "./assets/change3-minutego.png");
        $(".koreasecond").attr("src", "./assets/change3-secondgo.png");
        return;
      }

      $(this).removeClass("active");
      $(this).attr("src", "./assets/button-gam.png");

      $(".koreahour").attr("src", "./assets/time.png");
      $(".koreaminute").attr("src", "./assets/minute.png");
      $(".koreasecond").attr("src", "./assets/second.png");
      return;
    }

    if (clickedName === "li" && $(this).hasClass("active")) {
      if ($(".poster").hasClass("li-fullscreen")) {
        clearInterval(karelInterval);
        clearInterval(sequenceInterval);

        let $liBtn = $(this);
        $liBtn.removeClass("active");
        $liBtn.attr("src", "./assets/button-li.png");

        $(".poster").removeClass("li-active li-fullscreen");

        $(".koreahour").attr("src", "./assets/time.png");
        $(".koreaminute").attr("src", "./assets/minute.png");
        $(".koreasecond").attr("src", "./assets/second.png");
        return;
      }

      clearInterval(karelInterval);
      clearInterval(sequenceInterval);

      $(".poster").addClass("li-fullscreen");

      // li-start01부터 li-start06까지 순서대로 재생되도록 배열에 추가
      let startImages = [
        "./assets/li-start01.png",
        "./assets/li-start02.png",
        "./assets/li-start03.png",
        "./assets/li-start04.png",
        "./assets/li-start05.png",
        "./assets/li-start06.png",
      ];

      let currentIndex = 0;
      $("#karelImage").attr("src", startImages[currentIndex]);
      currentIndex = 1;

      sequenceInterval = setInterval(function () {
        $("#karelImage").attr("src", startImages[currentIndex]);
        currentIndex = (currentIndex + 1) % startImages.length;
      }, 250);

      return;
    }

    clearInterval(karelInterval);
    clearInterval(sequenceInterval);

    $(".rightbuttons")
      .removeClass("active")
      .each(function () {
        let name = $(this).attr("data-name");
        $(this).attr("src", `./assets/button-${name}.png`);
      });

    $(".poster").removeClass("li-active li-fullscreen");

    $(this).addClass("active");
    $(this).attr("src", `./assets/button-${clickedName}-on.png`);

    if (clickedName === "geon") {
      $(".koreahour").attr("src", "./assets/change1-time.png");
      $(".koreaminute").attr("src", "./assets/change1-minute.png");
      $(".koreasecond").attr("src", "./assets/change1-second.png");
    } else if (clickedName === "gon") {
      $(".koreahour").attr("src", "./assets/change2-time.png");
      $(".koreaminute").attr("src", "./assets/change2-minute.png");
      $(".koreasecond").attr("src", "./assets/change2-second.png");
    } else if (clickedName === "gam") {
      $(".koreahour").attr("src", "./assets/change3-time.png");
      $(".koreaminute").attr("src", "./assets/change3-minute.png");
      $(".koreasecond").attr("src", "./assets/change3-second.png");
    } else if (clickedName === "li") {
      $(".poster").addClass("li-active");

      let liImages = [
        "./assets/Karel-li01.png",
        "./assets/Karel-li02.png",
        "./assets/Karel-li03.png",
        "./assets/Karel-li04.png",
      ];

      let liIndex = 0;
      $("#karelImage").attr("src", liImages[liIndex]);

      clearInterval(karelInterval);
      karelInterval = setInterval(function () {
        liIndex = (liIndex + 1) % liImages.length;
        $("#karelImage").attr("src", liImages[liIndex]);
      }, 500);
    }
  });
});
