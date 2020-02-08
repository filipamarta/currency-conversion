$(document).ready(function () {
    ajaxCurrency(processResults);
});

var amountInput = function(response){
    $('#inpt-amount').keyup(function() {
        var inputValue = parseInt($('#inpt-amount').val());
        var amount = $('#currency1').text(inputValue);
        var convert = inputValue * response;
        var amountConverted = $('#currency2').text(convert);
        return amount;
    });
}

//AJAX Success & Error
var processResults = function(error, data){
    if (error) {
        var message = 'Something went wrong with the upload of the list!';
        $('.currency-error').append(message);
    }
    amountInput(data.quotes.USDEUR);
}

//AJAX
 var ajaxCurrency = function(callback){
    var accessKey = '82f848ceee8692d0b92befab40375710';
    $.ajax({
    type: 'GET',
    url: 'http://apilayer.net/api/live?access_key='+accessKey+'&currencies=USD,EUR&format=1',
    async: true,
    success: function(results) { 
        callback(null, results) 
    },
    error: function(request, statusText, httpError) { 
        callback(httpError || statusText) 
    }
})}; 