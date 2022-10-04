var mHtml = $("html");
var page = 1;

/* header_menu 오프닝 */
$(document).ready(function () {
  $(".header__menu ul").fadeIn(1500);
  /* MAIN_X로고 */
  $(document).ready(function () {
    $(".text").fadeIn(500);
  });

  /* 메인 TXT오프닝 시작*/
  $(document).ready(function () {
    var jbTime = 60;
    $(".st07").animate({ opacity: "1" }, jbTime, function () {
      $(".st06").animate({ opacity: "1" }, jbTime, function () {
        $(".st05").animate({ opacity: "1" }, jbTime, function () {
          $(".st04").animate({ opacity: "1" }, jbTime, function () {
            $(".st03").animate({ opacity: "1" }, jbTime, function () {
              $(".st02").animate({ opacity: "1" }, jbTime, function () {
                $("h1").animate({ opacity: "1" }, jbTime);
              });
            });
          });
        });
      });
    });
  });
  /* 메인 TXT오프닝 퇴장*/
  $(document).ready(function () {
    var jbTime = 200;
    $(".st07").animate({ opacity: "0" }, jbTime, function () {
      $(".st06").animate({ opacity: "0" }, jbTime, function () {
        $(".st05").animate({ opacity: "0" }, jbTime, function () {
          $(".st04").animate({ opacity: "0" }, jbTime, function () {
            $(".st03").animate({ opacity: "0" }, jbTime, function () {
              $(".st02").animate({ opacity: "0" }, jbTime, function () {
                $("h1").animate({ opacity: "1" }, jbTime);
              });
            });
          });
        });
      });
    });
  });
});

$(document).scroll(() => {
  if (window.scrollY >= 1700) {
    if (!$(".sec02_A .A01").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A01").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B01").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A01").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A01").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B01").removeClass("op");
              }, 20);
            }, 40);
          }, 60);
        }, 80);
      }, 100);
      $(".sec02_con .A01").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A01").removeClass("visible");
    $(".sec02_con .A01").removeClass("op");
  }

  if (window.scrollY >= 1700) {
    if (!$(".sec02_A .A02").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A02").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B02").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A02").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A02").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B02").removeClass("op");
              }, 20);
            }, 40);
          }, 60);
        }, 80);
      }, 340);
      $(".sec02_con .A02").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A02").removeClass("visible");
    $(".sec02_con .A02").removeClass("op");
  }

  if (window.scrollY >= 1700) {
    if (!$(".sec02_A .A03").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A03").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B03").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A03").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A03").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B03").removeClass("op");
              }, 20);
            }, 40);
          }, 60);
        }, 80);
      }, 460);
      $(".sec02_con .A03").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A03").removeClass("visible");
    $(".sec02_con .A03").removeClass("op");
  }

  if (window.scrollY >= 1700) {
    if (!$(".sec02_A .A04").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A04").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B04").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A04").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A04").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B04").removeClass("op");
              }, 20);
            }, 40);
          }, 60);
        }, 80);
      }, 220);
      $(".sec02_con .A04").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A04").removeClass("visible");
    $(".sec02_con .A04").removeClass("op");
  }

  if (window.scrollY >= 1700) {
    if (!$(".sec02_A .A05").hasClass("visible")) {
      setTimeout(() => {
        $(".sec02_A .A05").addClass("op");
        setTimeout(() => {
          $(".sec02_B .B05").addClass("op");
          setTimeout(() => {
            $(".sec02_A .A05").removeClass("op");
            setTimeout(() => {
              $(".sec02_A .A05").addClass("op");
              setTimeout(() => {
                $(".sec02_B .B05").removeClass("op");
              }, 20);
            }, 40);
          }, 60);
        }, 80);
      }, 580);
      $(".sec02_con .A05").addClass("visible");
    }
  } else if (window.scrollY <= 1200) {
    $(".sec02_con .A05").removeClass("visible");
    $(".sec02_con .A05").removeClass("op");
  }
});

/* section2_add about 글자 tototo */
// $(document).scroll(() => {
//   if (window.scrollY >= 1700) {
//     if (!$(".sec02_con .to01").hasClass("op")) {
//       $(".sec02_con .to01").addClass("tototo01");
//       setTimeout(() => {
//         $(".sec02_con .to01").removeClass("tototo01");
//         $(".sec02_con .to01").addClass("op");
//       }, 100);
//       setTimeout(() => {
//         $(".sec02_con .to02").addClass("tototo02");
//       }, 150);
//       setTimeout(() => {
//         $(".sec02_con .to02").removeClass("tototo02");
//         $(".sec02_con .to02").addClass("op");
//       }, 200);
//       setTimeout(() => {
//         $(".sec02_con .to03").addClass("tototo03");
//       }, 250);
//       setTimeout(() => {
//         $(".sec02_con .to03").removeClass("tototo03");
//         $(".sec02_con .to03").addClass("op");
//       }, 300);
//       setTimeout(() => {
//         $(".sec02_con .to04").addClass("tototo04");
//       }, 350);
//       setTimeout(() => {
//         $(".sec02_con .to04").removeClass("tototo04");
//         $(".sec02_con .to04").addClass("op");
//       }, 400);
//       setTimeout(() => {
//         $(".sec02_con .to05").addClass("tototo04");
//       }, 450);
//       setTimeout(() => {
//         $(".sec02_con .to05").removeClass("tototo04");
//         $(".sec02_con .to05").addClass("op");
//       }, 500);
//     }
//   } else if (window.scrollY <= 1200) {
//     $(".sec02_con em").removeClass("op");
//   }
// });
