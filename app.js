// Listen for all clicks on the document
$('#hi-temp').val('See ME!')
document.addEventListener(
  'click',
  function () {
    // Bail if it's not a .nav-link
    if (!event.target.classList.contains('nav-link')) return

    // Add the active class
    event.target.classList.add('active')

    // Get all nav links
    var links = document.querySelectorAll('.nav-link')

    // Loop through each link
    for (var i = 0; i < links.length; i++) {
      // If the link is the one clicked, skip it
      if (links[i] === event.target) continue

      // Remove the .active class
      links[i].classList.remove('active')
    }
  },
  false,
)

// Weather API (non Jquery)b5597dd37e39c1d17865dfa529234a43'
// http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=
// const display = document.querySelector('#weatherResults')
// const inputValue = document.querySelector('.inputValue')
// const submitButton = document.querySelector('.submit-btn')

// let city = document.querySelector('.name')
// let icon = document.querySelector('.icon')
// let maxTemp = document.querySelector('.hi-temp')
// let minTemp = document.querySelector('.low-temp')
// let humid = document.querySelector('.humidity')

// submitButton.addEventListener('click', function (name) {
//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=' +
//       inputValue.value +
//       '&appid=ef057d984223160d5c7aff529dc1653e',
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // var tempValue = data['main']['temp']
//       // var nameValue = data['name']
//       // var descValue = data['weather'][0]['description']

//       // main.innerHTML = nameValue
//       // desc.innerHTML = 'Desc - ' + descValue
//       // temp.innerHTML = 'Temp - ' + tempValue
//       // input.value = ''
//       console.log(data)
//     })

//     .catch((err) => alert('Wrong city name!'))
// })
let weather =
  'http://api.openweathermap.org/data/2.5/weather?q=33850&appid=b5597dd37e39c1d17865dfa529234a43'

let results = $.get(weather, function (data) {
  // $('.result').html(data)
  console.log(data)
  alert('Load was performed.')
})

$('#hi-temp').val('Hello World')
