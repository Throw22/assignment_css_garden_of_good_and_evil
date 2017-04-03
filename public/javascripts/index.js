
$(document).ready(function(){
  defaultSliderLabel();


  $('#insanitySlider').on('change', function(){
    updateSliderLabel($(this).val())
  })

  function updateSliderLabel(val) {
    $('#insanityLabel').text(val);
  }

  function defaultSliderLabel(){
    $('#insanityLabel').text($('#insanitySlider').val())
  }


})

