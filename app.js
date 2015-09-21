
function searchCallback(results) {
    console.log(results);
}
var jon ;
$(document).ready(function() {
	
	
	$('.submitButton').on("click",function(event){
		event.preventDefault();
		

		var lookFor = $(".inputText").val().toLowerCase();
		alert(lookFor);
		console.log(lookFor);
		search(lookFor);
	});
});







function search(query){
	$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    json: 'json_callback',
	    url: "http://api.giphy.com/v1/gifs/search?q=" + query +"&api_key=dc6zaTOxFJmzC"  
	}).done(function(response){
		searchCallback(response);
		$(".placeHere").children("img").remove();
		//$(".placeHere img").remove();
		jon = "<img src =" + response.data[2].images.original.url+"></img>";
		$(".placeHere").append(jon);
		
		

		
		console.log(response.data.length);

	});
	
};
