/* jquery thêm class hiệu ứng hover cho tất cả các ảnh có class  */
$(document).ready(function(){
  $("div.noi-dung-anh").addClass("wow animate__fadeIn")
  $("div.edit-card-1").addClass("wow animate__fadeInLeft")
  $("div.edit-card-2").addClass("wow animate__fadeInRight")
  $("div.nen-feedback").addClass("wow animate__fadeIn animate__slower 3s")
  $("header").addClass("wow animate__fadeIn animate__slow ")
  $("div.full-card-1").addClass("wow animate__fadeInLeftBig")
  $("div.full-card-2").addClass("wow animate__fadeInUp")
  $("div.full-card-3").addClass("wow animate__fadeInRightBig")
  wow = new WOW({
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          })
          wow.init();
})