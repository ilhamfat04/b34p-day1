function showData() {
    // e.preventDefault()
    // DOM = DOCUMENT OBJECT MODEL
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    document.getElementById("name").value = ""

    // VALIDATION
    if (name == "") {
        return alert("Name input must be not empty")
    }

    let emailReceiver = 'jokowi@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${subject}, ${message}. This is my phone ${phone}`
    // a.click()

    let dataObject = {
        dataName: name,
        dataEmail: email,
        phone,
        subject,
        message
    }

    console.table(dataObject);
}
