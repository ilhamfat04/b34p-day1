function showData() {

    // Dom mengambil data
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    // console.log(subject)

    // dom mengirim data
    document.getElementById("input-name").value = ""

    // validasi
    if (name == "") {
        alert('name input field must be not empyt')
    }
    if (email == "") {
        alert('email input field must be not empyt')
    }
    if (phone == "") {
        alert('phone input field must be not empyt')
    }
    if (subject == "") {
        alert('subject input field must be not empyt')
    }
    if (message == "") {
        alert('message input field must be not empyt')
    }

    //dom create element
    let emailReceiver = 'rhomairama@gmail.com'

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, 
                ${subject}, ${message}, this is my phone number ${phone}`

    // a.click()

    let dataName = "Jemmy"
    // object
    let dataObject = {
        dataName: name,
        email: email,
        phone: phone,
        subject: subject,
        message
    }

    console.table(dataObject.dataName)
    console.table(dataObject)

    // console.log(dataObject.dataName);
    // console.log(dataName)
}

