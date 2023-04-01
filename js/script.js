VANTA.TOPOLOGY({
    el: "#bodyBody",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x7c3ab3,
    backgroundColor: 0x0
  })

  $('#headline').click(function(){
    $('#lower_text').slideDown('slow', function(){

    })
  })

  $('#lower_text').click(function(){
    $('#gonza').slideDown('slow', function(){

    })
    $('#click').slideUp('slow', function(){

    })
  })

  // Audio

let soundButton = document.querySelector('.soundButton'),
audio = document.querySelector('audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function(){
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.pause = function() {
audio.onblur()
}
