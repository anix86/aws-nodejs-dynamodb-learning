$.ajax({
    url: "/all-posts",
    success: function( result ) {
        let sHTML = ""
        console.log(result)
        result.Items.forEach(item => {
            console.log(item);
            sHTML += "<img src='" + item.imageURl + "' height=200px style='margin:5px'/>"

        });
      $( "#content" ).html( sHTML );
    }
  });