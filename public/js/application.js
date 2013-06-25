$(document).ready(function() {
	$('#submit_button').on("click", function notify(e) {
		e.preventDefault(); 
		var serialized_word = $("input").serialize();
		// console.log($("input").serialize());
		$.ajax({
			type: "POST",
			url: '/grandma',
			data: serialized_word,
			dataType: 'string',
		});
	});
});












  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()