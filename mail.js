const firebaseConfig = {
    apiKey: "AIzaSyApmnFQ3QLtZsgS3jxSV-8vWjov8GnUdRM",
    authDomain: "shoot-3e4fe.firebaseapp.com",
    databaseURL: "https://shoot-3e4fe-default-rtdb.firebaseio.com",
    projectId: "shoot-3e4fe",
    storageBucket: "shoot-3e4fe.appspot.com",
    messagingSenderId: "1001319213477",
    appId: "1:1001319213477:web:8a2396817653e4ec0de04c",
    measurementId: "G-VPG4445GE8"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};