$(function() {
    $('#call-three').click(function() {
        $('#call_me-three').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                T_tel: {
                    required: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var number = $('input#T_tel').val();
                var dataString = 'to=' + to + '&T_tel='+ number +'';
                $.ajax({
                    type: "POST",
                    url: "third-call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-third').fadeIn('slow');
                        $('#call_me-three').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#call_me-three').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});