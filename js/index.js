console.log("Your index.js file is loaded correctly!");

// Add jQuery code for modal popup functionality
$(document).ready(function(){
  // Show modal popup on hover
  $('#sticky-circle').hover(function(){
    $('#modal-popup').css('display', 'block');
  });

  // Hide modal popup when close button is clicked
  $('.close').click(function(){
    $('#modal-popup').css('display', 'none');
  });

  // Hide modal popup when submit button is clicked
  $('#submit-feedback').click(function(){
    var feedback = $('#feedback-text').val();
    // You can handle the feedback submission here
    
    // Change button appearance after submission
    $(this).css({
      'background-color': '#fff',
      'color': '#000',
      'border': '2px solid #000'
    }).prop('disabled', true).text('Submitted');

    // Hide modal after a delay
    setTimeout(function() {
      $('#modal-popup').css('display', 'none');
    }, 60000); // 1 minute delay
  });
});

