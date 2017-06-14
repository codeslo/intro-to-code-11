// in jQuery everything is contained in a document.ready function
$(document).ready(function(){
	// store an array of video data here
	var videoArray = [];


	loadVideo();

	
	$('#next').click(function()
	{
		// enable next button
	});

	
	$('#last').click(function()
	{
		// enable last button
	});

	// function to load videos this is a jQuery ajax request
	function loadVideo()
	{
		var myKey = '';
		var request = ''+myKey;
		$.ajax({
			url:request,
			success:function(data){
				// handle data from your request here

					playVideo();

			}
		});
	}


		function playVideo()
		{
			// use playVideo to display your videos in the app
		}

		

	}); // this is the end of document.ready
		

	
	