$(function() {
    $('#call-five').click(function() {
        $('#call_me-five').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                FF_tel: {
                    required: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var number = $('input#FF_tel').val();
                var dataString = 'to=' + to + '&FF_tel='+ number +'';
                $.ajax({
                    type: "POST",
                    url: "fifth-call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-fifth').fadeIn('slow');
                        $('#call_me-five').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#call_me-five').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});