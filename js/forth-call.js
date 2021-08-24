$(function() {
    $('#call-four').click(function() {
        $('#call_me-four').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                F_tel: {
                    required: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var number = $('input#F_tel').val();
                var dataString = 'to=' + to + '&F_tel='+ number +'';
                $.ajax({
                    type: "POST",
                    url: "forth-call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-forth').fadeIn('slow');
                        $('#call_me-four').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#call_me-four').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});