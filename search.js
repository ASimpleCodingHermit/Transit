/* As a user, ability to:
    -type in text
    -click go 
    -render results on page
*/
/**
 * From the technical side:
 * -detect when Go (Submit Button) is clicked
 * -grab user input
 * - use user input in api call
 * - parse the response
 * - display data accordingly
 */

$(document).ready(() => {
  $('#submit').click(() => {
    let userInput = $('#search').val()
    // alert(userInput)
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=ba8c91ab1388097103ad2a2e3ac5d7ce`,
    }).done((res) => {})
  })
})
