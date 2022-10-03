var mHtml = $("html");
var page = 1;

$(document).ready(function () {
  $(".header__menu ul").fadeIn(1500);

  $(document).scroll(() => {
    if (window.scrollY >= 1700) {
      if (!$(".sec02_con .to01").hasClass("op")) {
        $(".sec02_con .to01").addClass("tototo01");
        setTimeout(() => {
          $(".sec02_con .to01").removeClass("tototo01");
          $(".sec02_con .to01").addClass("op");
        }, 100);
        setTimeout(() => {
          $(".sec02_con .to02").addClass("tototo02");
        }, 100);
        setTimeout(() => {
          $(".sec02_con .to02").removeClass("tototo02");
          $(".sec02_con .to02").addClass("op");
        }, 250);
        setTimeout(() => {
          $(".sec02_con .to03").addClass("tototo03");
        }, 200);
        setTimeout(() => {
          $(".sec02_con .to03").removeClass("tototo03");
          $(".sec02_con .to03").addClass("op");
        }, 350);
        setTimeout(() => {
          $(".sec02_con .to04").addClass("tototo04");
        }, 300);
        setTimeout(() => {
          $(".sec02_con .to04").removeClass("tototo04");
          $(".sec02_con .to04").addClass("op");
        }, 450);
        setTimeout(() => {
          $(".sec02_con .to05").addClass("tototo05");
        }, 400);
        setTimeout(() => {
          $(".sec02_con .to05").removeClass("tototo05");
          $(".sec02_con .to05").addClass("op");
        }, 550);
      }
    } else if (window.scrollY <= 1200) {
      $(".sec02_con em").removeClass("op");
    }
  });
});
/* $(document).ready(function () {
  $(".sub01__subtitle").fadeIn(1500);
}); */
$(document).ready(function () {
  $(".text").fadeIn(500);
});

$(document).ready(function () {
  var jbTime = 60;
  $(".st07").animate(
    {
      opacity: "1",
    },
    jbTime,
    function () {
      $(".st06").animate(
        {
          opacity: "1",
        },
        jbTime,
        function () {
          $(".st05").animate(
            {
              opacity: "1",
            },
            jbTime,
            function () {
              $(".st04").animate(
                {
                  opacity: "1",
                },
                jbTime,
                function () {
                  $(".st03").animate(
                    {
                      opacity: "1",
                    },
                    jbTime,
                    function () {
                      $(".st02").animate(
                        {
                          opacity: "1",
                        },
                        jbTime,
                        function () {
                          $("h1").animate(
                            {
                              opacity: "1",
                            },
                            jbTime
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});

$(document).ready(function () {
  var jbTime = 200;
  $(".st07").animate(
    {
      opacity: "0",
    },
    jbTime,
    function () {
      $(".st06").animate(
        {
          opacity: "0",
        },
        jbTime,
        function () {
          $(".st05").animate(
            {
              opacity: "0",
            },
            jbTime,
            function () {
              $(".st04").animate(
                {
                  opacity: "0",
                },
                jbTime,
                function () {
                  $(".st03").animate(
                    {
                      opacity: "0",
                    },
                    jbTime,
                    function () {
                      $(".st02").animate(
                        {
                          opacity: "0",
                        },
                        jbTime,
                        function () {
                          $("h1").animate(
                            {
                              opacity: "1",
                            },
                            jbTime
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});
