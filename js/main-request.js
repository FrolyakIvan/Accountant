$(function() {
    $('#main-request-submit-btn').click(function() {
        $('#request-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                M_name: {
                    required: true
                },
                M_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#M_name').val();
                var number = $('input#M_tel').val();
                var dataString = 'to=' + to + '&M_name=' + fullname +'&M_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "main-request.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-main').fadeIn('slow');
                        $('#request-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#request-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});