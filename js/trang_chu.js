/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/

$(document).ready(function () {
  // form đăng nhập
  $("#btn-login").click(function () {
    $("#myModal").modal();
  });
  // kiểm tra đăng nhập
  function KTName() {
    var re = /^[a-zA-Z]\w*/;
    if ($("#txtName").val() == "") {
      $("#tbName").html("* Bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtName").val())) {
      $("#tbName").html("*Phải bắt đầu bằng chữ cái");
      return false;
    }
    $("#spName").html("*");
    return true;
  }
  $("#txtName").blur(KTName);

  function KTPass() {
    var re = /(?=.*\d).{6,}/;
    if ($("#txtPass").val() == "") {
      $("#tbPass").html("* Bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtPass").val())) {
      $("#tbPass").html("* Phải có chữ, số, ít nhất 6 kí tự");
      return false;
    }
    $("#spPass").html("*");
    return true;
  }
  $("#txtPass").blur(KTPass);

  $('#btnDangNhap').click(function () {
    if (KTName()==true && KTPass()==true) {
      alert('Đăng nhập thành công');
      $("#myModal").modal('hide');
      return true;
    }
    else {
      alert('vui lòng nhập đầy đủ thông tin');
      return false;
    }
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("nav").addClass("add");
    } else
      $("nav").removeClass("add");
  })
})

/* /////////////java script của phần cuối trang ///////////////// */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 5900) {
      $(".effect-1").addClass("effect-content")
      $(".effect-2").addClass("effect-content-1")
      $(".effect-3").addClass("effect-content-2")
      $(".effect-4").addClass("effect-content-3")
    }
  })

});



/*/////////////////  Jquery HIỆU ỨNG CHO TRANG CHỦ ////////////////////////////*/
/* Jquery định dạng cho Thanh menu trượt */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("nav").addClass("add");
    } else
      $("nav").removeClass("add");
  })
})

/* /////////////java script của phần go to top  ///////////////// */
$(document).ready(function () {
  $("#gototop").hide()
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500)
      $("#gototop").slideDown("3000")
    else
      $("#gototop").slideUp("3000")
  })
  $("#gototop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
})


/* jquery menu */
$(document).ready(function () {
  /* ban đầu thanh chọn ở trạng thái ẩn */
  $(".list").hide()
  /* khi rê chuột  */
  $(".last").mouseenter(function () {
    $(".list").removeClass("sliceinbottom")
    $(".list").show().addClass("sliceintop");
  })
  /* khi rời chuột */
  $(".last").mouseleave(function () {
    $(".list").fadeOut(300).addClass(" sliceinbottom ");
  })
})
/////////////////////////////wowjs////////////////////////////////
$(document).ready(function () {
  $("div.phan-text-trai").addClass("wow animate__fadeInLeft")
  $("div.effect-left-right-1").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-2").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-3").addClass("wow animate__fadeInUp")
  $("div.effect-left-right-4").addClass("wow animate__fadeInUp")
  $("div.hinh-anh-header").addClass("wow animate__fadeIn")
  $("div.card").addClass("wow animate__fadeInDown")
  $("div.effect-1").addClass("wow animate__fadeInLeftBig")
  $("div.effect-2").addClass("wow animate__fadeInLeftBig")
  $("div.effect-3").addClass("wow animate__fadeInLeftBig")
  $("div.effect-4").addClass("wow animate__fadeInLeftBig")
  wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  })
  wow.init();
})
// kiểm tra đăng ký
$(document).ready(function () {
  function KTName() {
      var re = /^[a-zA-Z]\w*/;
      if ($("#txtName").val() == "") {
          $("#spName").html("* Bắt buộc nhập");
          return false;
      }
      if (!re.test($("#txtName").val())) {
          $("#spName").html("*Phải bắt đầu bằng chữ cái");
          return false;
      }
      $("#spName").html("*");
      return true;
  }
  $("#txtName").blur(KTName);

  function KTPass() {
      var re = /(?=.*\d).{6,}/;
      if ($("#txtPass").val() == "") {
          $("#spPass").html("* Bắt buộc nhập");
          return false;
      }
      if (!re.test($("#txtPass").val())) {
          $("#spPass").html("* Phải có chữ, số, ít nhất 6 kí tự");
          return false;
      }
      $("#spPass").html("*");
      return true;
  }
  $("#txtPass").blur(KTPass);
  function XNPass(){
      if ($("#txtCfPass").val() == "") {
          $("#spCfPass").html("* Bắt buộc nhập");
          return false;
      }
      if(document.getElementById('txtCfPass').value != 
      document.getElementById('txtPass').value){
          $("#spCfPass").html("* Mật khẩu không trùng khớp");
          return false;
      }
      else{
          $("#spCfPass").html("*");
          return true;
      }                                                         
  }
  $("#txtCfPass").blur(XNPass);
  function KTsdt() {
      var sdt = /^0\d{3}\d{3}\d{3}$/;
      if ($("#txtTel").val() == "") {
          $("#spTel").html("* Bắt buộc nhập");
          return false;
      }
      if (!sdt.test($("#txtTel").val())) {
          $("#spTel").html("Nhập theo dạng 0xxxxxxxxx");
          return false;
      }
      $("#spTel").html("*");
      return true;
  }
  $("#txtTel").blur(KTsdt);
  function KTEmail() {
      var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ($("#txtEmail").val() == "") {
          $("#spEmail").html("* Bắt buộc nhập");
          return false;
      }
      if (!email.test($("#txtEmail").val())) {
          $("#spEmail").html("Nhập theo dạng Example@gmail.com");
          return false;
      }
      $("#spEmail").html("*");
      return true;
  }
  $("#txtEmail").blur(KTEmail);
  $('#dk').click(function () {
      if (KTName() && KTPass() &&XNPass() && KTEmail() &&KTsdt()) {
          alert('Đăng ký thành công');
          return true;
      }
      else {

          return false;
      }
  })
});  