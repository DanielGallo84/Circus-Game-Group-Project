let formData = document.getElementById("subscription-form")
let userEmails = []

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email_field").value

    if (email == "") {
        alert("Please, make sure to type in a valid email address before sending it!")
      } else {
        alert("This form has been successfully submitted!")
        
        userEmails.push(email)

        localStorage.setItem("emails", JSON.stringify(userEmails))
        let storedEmail = JSON.parse(localStorage.getItem("emails"))

        formData.reset()
      }
    });