var mHtml = $("html");
var page = 1;

$(document).ready(function () {
  $(".header__menu ul").fadeIn(1500);
});
$(document).ready(function () {
  $(".sec01__img").fadeIn(500);
});

$(document).ready(function () {
  var jbTime = 80;
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
                          $(".st01").animate(
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
                          $(".st01").animate(
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
