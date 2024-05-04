$(document).ready(function() {
    $(".fo").click(function() {
      $(".form-menu-child").hide();
      $(this).find(".form-menu-child").show();
    });
    $(".form-menu-trang-chu").click(function() {
      $(".show-item").hide();
      $("#trang-chu").show();
    });
    $(".form-menu-child").click(function(event) {
      event.stopPropagation();
    });
    $(".menu-child").click(function(event) {
      event.stopPropagation();
      var showItemId = $(this).data("show-item");
      $(".show-item").hide();
      $("#" + showItemId).find(".show-item").show();
    });
  });
  //...Cần sửa thêm
  $(document).ready(function() {
    $('button[type="submit"]').click(function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của việc gửi form

        var searchTerm = $('input[type="search"]').val().trim(); // Lấy giá trị từ input search và loại bỏ khoảng trắng đầu và cuối

        if (searchTerm !== '') {
            // Tìm kiếm các phần tử chứa nội dung tương tự và thêm lớp highlight
            $('.show-form-menu .form-menu-danh-muc-item .show-item').each(function() {
                var content = $(this).text().trim();
                if (content.includes(searchTerm)) {
                    $(this).addClass('highlight');
                    $(this).parents('.form-menu-danh-muc-item').addClass('highlight');
                } else {
                    $(this).removeClass('highlight');
                    $(this).parents('.form-menu-danh-muc-item').removeClass('highlight');
                }
            });
        }
    });
});