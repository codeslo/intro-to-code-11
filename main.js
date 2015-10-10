$(document).ready(function(){


	loadVideo();

	
	$('#next').click(function()
	{
		// enable next button
	});

	
	$('#last').click(function()
	{
		// enable last button
	});

	// function to load videos
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

		

	});
		

	
	