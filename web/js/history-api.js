// function loadContent(){
//   var url = document.location.href;

//   console.log(document.location.href);

//   if (url.indexOf('www.mydomin.com/index.php?option=com_myblog&') >= 0) {
//     $('#div_id').hide();
//   } else {
//     $('#div_id').show();
//   }
// }


//TUTORIAL FOUR
// Adding popstate event listener to handle browser back button  
window.addEventListener("popstate", function(e) {
  // Get State value using e.state
  var url = location.pathname;
  getContent(url, false);
});

function getContent(url, anchor, addEntry) {
  $.get(url)
  .done(function( data ) {
       
      // Updating Content on Page
      $('#replace-me').html(data);
       
      if(addEntry == true) {
          // Add History Entry using pushState
          history.pushState(null, null, anchor); 
      }
       
  });
}


// document.addEventListener('DOMContentLoaded', function() {
//   // ...
//   $('#test-link').on('click', function(e){
//      e.preventDefault();
//     console.log('clicked');
//   });
  
// });



$(document).ready(function() {

  var reserve = false;
  
  //TUTORIAL FOUR
  $('a.load-ajax').on('click', function(e){

    console.log("ajax link");

      $("html, body").animate({ scrollTop: 0});
      $('#replace-me').show();
      $('#menus, #reserve').addClass('hidden');

      e.preventDefault();

      var href = $(this).attr('href');
      // var anchor = href.slice(0, -5);
        
      // Getting Content
      getContent(href, href, true);
      // $("#replace-me").load(href + " #replace-me > *");
      
     
  });

  
  
  // $('#menus').find('a').on('click', function(e){
  //     e.preventDefault();
  //     var href = $(this).attr('href');
      
  //     $.get(href)
  //     .done(function( data ) {
          
  //         // Updating Content on Page
  //         $('#replace-me').html(data);
          
  //         // Add History Entry using pushState
  //         history.pushState(null, null, href); 

  //     });
  // });

    

  //TUTORIAL ONE

  // var nav, content, fetchAndInsert;
  // nav = $('nav#mainNav');
  // content = $('#replace-me');

  // // //Fetches and inserts content into the container
  // fetchAndInsert = function(href){
  //   $.ajax({
  //     url: 'http://localhost:3000/' + href.split('/').pop(),
  //     method: 'GET',
  //     cache: false,
  //     success: function(data){
  //       content.html(data);
  //     }
  //   });
  // }

  // // //User goes back/forward
  // $(window).on('popstate', function(){
  //   console.log(location.pathname);
  //   // fetchAndInsert(location.pathname);
  // });

  // nav.find('a').on('click', function(e){
  //   var href = $(this).attr('href');

  //   //Manipulate history //second null is the title in string form
  //   history.pushState(null, null, href);

  //   //Fetch and insert content
  //   fetchAndInsert(href);

  //   e.preventDefault();

  // })

});