let nameButton = document.getElementById('btn_name')
let startButton = document.getElementById('btn_start')
let formData = document.getElementById('form_box')
let playerNames = []

nameButton.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.getElementById('nameField').value

    if (name == '') {
        alert('Please, make sure to type in a valid name address before sending it!')
      } else {
        alert('This form has been successfully submitted!')
        
        playerNames.push(name)

        localStorage.setItem('names', JSON.stringify(playerNames))
        let storedEmail = JSON.parse(localStorage.getItem('names'))

        formData.reset()
      }
    });

startButton.addEventListener('click', (e) => {
  e.preventDefault();

  location.href = "./../pages/game/index.html";

})