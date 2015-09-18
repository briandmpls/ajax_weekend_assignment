
$(document).ready(function() {

    $.ajax('data.json', {
        success: function(response){
            console.log(response);
            for (i=0;i < response.length;i++){
            	console.log(response[i]);
            	var $name
            	var $content = $("<p style= color:" + response[i].value + "> This line will be represented in " + response[i].color + ".</p>" )

            	$(".assignHere").append($content);
            }






        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})