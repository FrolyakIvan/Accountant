$(function() {
    $('#call-six').click(function() {
        $('#call_me-six').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                SX_tel: {
                    required: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var number = $('input#SX_tel').val();
                var dataString = 'to=' + to + '&SX_tel='+ number +'';
                $.ajax({
                    type: "POST",
                    url: "sixth-call.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-sixth').fadeIn('slow');
                        $('#call_me-six').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#call_me-six').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});