$(function() {
    $('#re_call-submit-btn').click(function() {
        $('#re_call-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                H_name: {
                    required: true
                },
                H_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#H_name').val();
                var number = $('input#H_tel').val();
                var dataString = 'to=' + to + '&H_name=' + fullname +'&H_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "header-re_call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-re_call').fadeOut('1000');
                        $('#thanks-re_call').fadeIn('slow');
                        $('#re_call-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#re_call-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});