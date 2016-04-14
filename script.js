$(document).ready(function () {
    $('form').on('submit', function (event) {
        $.ajax({
            url: 'validator.php', // файл, к которому обращаемся
            dataType: 'json', // тип загружаемых данных
            type: 'POST', // метод передачи данных
            data: {
                'username':     $('input[name=username]').val(),
                'password':     $('input[name=password]').val(),
                'email':        $('input[name=email]').val(),
                'gender':       $('input[name=gender]').val(),
                'credit_card':  $('input[name=credit_card]').val(),
                'bio':          $('input[name=bio]').val()
            },
            success: function (data, textStatus) {
               // console.log(data);
                $('input').removeClass('error');
               if (data.result) {
                    $('div#answer').text('Ok!');
                } else {
                   $.each(data.error, function (key, result) {
                       var newKey;
                       newKey = key.toLowerCase().replace(' ','_');
                       $('input[name='+newKey+']').addClass('error');
                   });
                    $('div#answer').text('Error!');
                }
            }
        });
    });
    event.preventDefault();
});
