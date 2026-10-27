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

  $(document).on("click", function (e) {
    if ($(e.target).hasClass("rightbuttons")) {
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

    $(".koreahour").attr("src", "./assets/time.png");
    $(".koreaminute").attr("src", "./assets/minute.png");
    $(".koreasecond").attr("src", "./assets/second.png");
  });

  $(".koreahour, .koreaminute, .koreasecond, .karel-image").on(
    "mousemove",
    function (e) {
      let currentSrc = $(".koreahour").attr("src");
      let img = "";
      let text = "";

      if ($(".poster").hasClass("li-fullscreen")) {
        img = "./assets/illwobd.png";
        text =
          "Like the Irwol Obongdo completed only by the King,<br />wishing for Karel Martens' distinct completeness<br />and long, healthy life as he approaches 90.";
      } else if ($(".poster").hasClass("li-active")) {
        text =
          "See You at Platform L!<br />I'm Still Moving!<br />2018.10.11 - 2019.01.20";
      } else if (currentSrc.includes("change1-timego.png")) {
        img = "./assets/printed-matter.png";
        text =
          "Color Palette of Karel Martens<br />&amp; Circulation &lt;Printed Matter&gt;";
      } else if (currentSrc.includes("change1-time.png")) {
        text = "The Cycle and Harmony<br />of Yin-Yang in Taegeuk";
      } else if (currentSrc.includes("change2-timego.png")) {
        img = "./assets/techinque.png";
        text = "Layering Blessings<br />with Karel Martens' Technique";
      } else if (currentSrc.includes("change2-time.png")) {
        text = "Beauty of Korean Saekdong";
      } else if (currentSrc.includes("change3-timego.png")) {
        img = "./assets/neonkarel.png";
        text =
          "Evolution of All Things,<br />Urban Neon Lights,<br />and Karel Martens' Color Exploration";
      } else if (currentSrc.includes("change3-time.png")) {
        text = "Sam-Taegeuk.<br />Change and Development of All Things";
      } else {
        img = "./assets/3times-L.png";
        text =
          "<strong>KarelMartens - Still Moving</strong><br />국내 첫 개인전<br />Platform-L<br />2018.10.11 - 2019.01.20";
      }

      if (img === "") {
        $(".hover-img").hide();
      } else {
        $(".hover-img").attr("src", img).show();
      }

      $(".hover-text").html(text);

      let left = e.clientX + 18;
      let top = e.clientY + 18;

      if (left + $(".hover-card").outerWidth() > $(window).width()) {
        left = e.clientX - $(".hover-card").outerWidth() - 18;
      }
      if (top + $(".hover-card").outerHeight() > $(window).height()) {
        top = e.clientY - $(".hover-card").outerHeight() - 18;
      }

      $(".hover-card").css({ left: left, top: top });
      $(".hover-card").addClass("show");
    },
  );

  $(".koreahour, .koreaminute, .koreasecond, .karel-image").on(
    "mouseleave",
    function () {
      $(".hover-card").removeClass("show");
    },
  );
});
