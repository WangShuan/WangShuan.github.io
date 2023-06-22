//計時器
var c = 90;
var t;
var timer_is_on = 0;
var D = 0;
var s;
var distance;
var H = (window.innerHeight - 450) / 2;
function timedCount() {
  document.getElementById("time").innerText = c + "s";
  c = c - 1;
  t = setTimeout(function () {
    timedCount();
  }, 1000);
  if (c == -1) {
    stopCount();
    down(); //數到0開啟結束畫面
  }
}

function addDot() {
  var URLs = [
    "https://i.ibb.co/MsWH6Bk/water.png",
    "https://i.ibb.co/QCDCnSf/super.png",
    "https://i.ibb.co/HB8HvvK/hell.png",
  ];
  var randomcolor = parseInt(Math.random() * URLs.length);
  var min = $(".game").offset().left + 30;
  var max = min + 700;

  function getRandom() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomL = getRandom();
  var add = $("<div></div>");
  add.attr("class", "dot");
  add.css("background-image", "url(" + URLs[randomcolor] + ")");
  add.css("left", randomL);
  add.css("top", H);
  add.animate(
    {
      top: H + 370,
    },
    8000,
    "linear",
    function () {
      $(this).remove();
    }
  );
  add.appendTo(".game");
  eat();
}

function eat() {
  setInterval(function () {
    var A = $("#p1");
    var B = $(".dot").first();
    var AW = A.offset().left + A.innerWidth();
    var AL = A.offset().left;
    var BL = B.offset().left;
    var x = B.offset().top;
    distance = AL;
    if (B.offset().top > A.offset().top && AL < BL && BL < AW) {
      if (B.offset().top == x) {
        if (
          B.css("background-image") ==
          'url("https://i.ibb.co/HB8HvvK/hell.png")'
        ) {
          if (A.hasClass("super")) {
            $(".dot").first().css({
              backgroundImage: 'url("https://i.ibb.co/MsWH6Bk/water.png")',
            });
          } else {
            D++;
            A.children($("img")).addClass("hell");
          }
        } else if (
          B.css("background-image") ==
          'url("https://i.ibb.co/QCDCnSf/super.png")'
        ) {
          s = c;
          A.children($("img")).removeClass("hell");
          A.addClass("super");
        }
        B.remove();
      }
    }
    if (D >= 3) {
      down();
    }
    $("#life").text(3 - D);
  }, 1);
}

//計時器開始與結束
function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  for (var i = 1; i < 99999; i++) window.clearInterval(i);
  timer_is_on = 0;
  c = 90;
}

//結束畫面
function down() {
  // 移除所有水滴
  $(".dot").remove();
  // 移除無敵狀態
  $("#p1").removeClass("super");
  // 移除中毒狀態
  $("#p1").children($("img")).removeClass("hell");
  // 讓香菇角色回到畫面開始的地方
  $("#p1").css({
    top: "300px",
    left: "100px",
  });
  // 香菇死掉了 讓香菇角色從畫面縮小至消失 並改變背景
  if (D >= 3) {
    $("#p1")
      .children($("img"))
      .animate(
        {
          height: "0",
        },
        500,
        function () {
          $(".game").children().hide();
          $(".game").css({
            background: "url('https://i.ibb.co/W3wGNRj/dead.png') no-repeat",
            backgroundSize: "cover",
          });
          $("#again").text("重新挑戰");
          $("#again").show();
          $(document).unbind("keydown");
          $("#p1").css({
            left: "100px",
          });
          D = 0;
          stopCount();
        }
      );
  } else {
    // 通關成功 香菇成功扎根
    // 讓香菇角色上下跳兩下後改變背景
    $("#p1")
      .animate({
        top: "250px",
      })
      .animate({
        top: "300px",
      })
      .animate({
        top: "250px",
      })
      .animate(
        {
          top: "300px",
        },
        500,
        function () {
          $(".game").children().hide();
          $(".game").css({
            background: "url('https://i.ibb.co/Gsv2H9Y/down.png') no-repeat",
            backgroundSize: "cover",
          });
          $("#again").show();
          $(document).unbind("keydown");
          $("#p1").css({
            left: "100px",
          });
          D = 0;
          stopCount();
        }
      );
  }
}

//讓香菇可以通過鍵盤的左右方向鍵移動
function game() {
  $(document).keydown(function (event) {
    var keyNum = event.which;
    var Item = $("#p1");
    var over = $(".game").offset().left;
    if (keyNum == 37) {
      if ($("#p1").offset().left >= over + 30) {
        Item.css({
          left: "-=30px",
        });
      }
    } else if (keyNum == 39) {
      if (
        $("#p1").offset().left <=
        over + $(".game").innerWidth() - $("#p1").innerWidth() - 30
      ) {
        Item.css({
          left: "+=30px",
        });
      }
    }
  });
}

//點擊新遊戲開始
$("#start").on("click", function () {
  $(".mask").hide();
  startCount();
  $(document).unbind("keydown");
  game();
  setInterval(function () {
    addDot(); //兩秒出現一滴水
  }, 2000);
});

//點擊再玩一次重新開始(重整頁面)
$("#again").on("click", function () {
  location.reload();
});

// 遊戲說明(點擊後收合說明)
$("#Introduction").on("click", function () {
  $(".Introduction").toggle();
});

// 計時五秒後移除無敵效果
$(function () {
  setInterval(function () {
    if (s == c + 5) {
      $("#p1").removeClass("super");
    }
  }, 1000);
});
