$(function() {
    $('#call-two').click(function() {
        $('#call_me-two').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                S_tel: {
                    required: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var number = $('input#S_tel').val();
                var dataString = 'to=' + to + '&S_tel='+ number +'';
                $.ajax({
                    type: "POST",
                    url: "second-call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-second').fadeIn('slow');
                        $('#call_me-two').trigger("reset");
                        $(':input', '#call_me-two').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});