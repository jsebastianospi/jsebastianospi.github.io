$(document).ready(function() {

// first page

    var a1 = 0;
    $("#right_scroll").click(function() {
      a1 = a1+1;
      if (a1 == 1) {
        $(".carousel_item1").toggleClass("transparent");
        $("#subtitle2").hide();
        $("#text1").hide();
        $("#subtitle3").show();
        $("#text2").show();
      }
      if (a1 == 2) {
        $(".carousel_item2").toggleClass("transparent");
        $("#subtitle3").hide();
        $("#text2").hide();
        $("#subtitle4").show();
        $("#text3").show();
      }
      else if (a1 == 3) {
          $(".carousel_item2").removeClass("transparent");
          $(".carousel_item1").removeClass("transparent");
          $("#subtitle4").hide();
          $("#text3").hide();
          $("#subtitle2").show();
          $("#text1").show();
          a1 = 0;
      }
    });

    var b1 = 0;
    $("#left_scroll").click(function() {
      b1 = b1+1;
      if (b1 == 1) {
        $(".carousel_item1").addClass("transparent");
        $("#subtitle2").hide();
        $("#text1").hide();
        $("#subtitle3").show();
        $("#text2").show();
      }
      if (b1 == 2) {
        $(".carousel_item2").addClass("transparent");
        $("#subtitle3").hide();
        $("#text2").hide();
        $("#subtitle4").show();
        $("#text3").show();
      }
      else if (b1 == 3) {
        $(".carousel_item2").removeClass("transparent");
        $(".carousel_item1").removeClass("transparent");
        $("#subtitle4").hide();
        $("#text3").hide();
        $("#subtitle2").show();
        $("#text1").show();
        b1 = 0;
      }

    });


    $("#logo img").hover(function() {
        $("#logo img").css("width",100);
    },
    function() {
        $("#logo img").css("width",75);
    });

    // $("#carousel").hover(function() {
    //     $(".carousel_item1").toggleClass("overlay");
    // });

// second
    var a2 = 0;
    $("#right_scroll2").click(function() {
      a2 = a2+1;
      if (a2 == 1) {
        $(".carousel_item5").addClass("not_transparent");
        $(".carousel_item4").addClass("transparent");
      }
      if (a2 == 2) {
        $(".carousel_item5").removeClass("not_transparent");
        $(".carousel_item6").addClass("not_transparent");
      }
      if (a2 == 3) {
        $(".carousel_item6").removeClass("not_transparent");
        $(".carousel_item7").addClass("not_transparent");
      }
      else if (a2 == 4) {
          $(".carousel_item7").removeClass("not_transparent");
          $(".carousel_item4").removeClass("transparent");
        a2 = 0;
      }

    });

    var b2 = 0;
    $("#left_scroll2").click(function() {
      b2 = b2+1;
      if (b2 == 1) {
        $(".carousel_item7").addClass("not_transparent");
        $(".carousel_item4").addClass("transparent");
      }
      if (b2 == 2) {
          $(".carousel_item7").removeClass("not_transparent");
          $(".carousel_item6").addClass("not_transparent");
      }
      if (b2 == 3) {
          $(".carousel_item6").removeClass("not_transparent");
          $(".carousel_item5").addClass("not_transparent");
      }
      else if (b2 == 4) {
          $(".carousel_item5").removeClass("not_transparent");
          $(".carousel_item4").removeClass("transparent");
        b2 = 0;
      }
    });

    // Moi
    $("#profilepic").hover(function() {
        $("#bla").show();
    },
    function() {
        $("#bla").hide();
    });

});
