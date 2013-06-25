$(document).ready(function() {
	$('#submit_button').on("click", function(event) {
		event.preventDefault();
		var serialized_word = $("input").serialize();


		var request = $.ajax({
			type: "POST",
			url: '/grandma',
			data: serialized_word
		});

    request.done(function(grandmaSays) {
        $("#grandma_says").text(grandmaSays);
      });
	});
});












  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
