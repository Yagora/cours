$(document).ready(function(){
    $("#rollButton").click(function() {
        $.get( "/bitcoin", function( data ) {
            $( ".result" ).html( data );
        });
    });
});