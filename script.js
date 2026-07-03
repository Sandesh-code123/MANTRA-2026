// Appointment form validation
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var department = document.getElementById("department").value;
  var formMessage = document.getElementById("formMessage");

  if (name == "" || email == "" || phone == "" || department == "") {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please fill in all the fields.";
    return false;
  }

  if (email.indexOf("@") == -1) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (phone.length != 10 || isNaN(phone)) {
    formMessage.style.color = "red";
    formMessage.innerHTML = "Please enter a valid 10 digit mobile number.";
    return false;
  }

  formMessage.style.color = "green";
  formMessage.innerHTML = "Thank you! Your appointment request has been received.";
  return false; // stops the page from reloading
}

// Gallery filter
function filterGallery(category) {
  var items = document.getElementsByClassName("galleryItem");
  for (var i = 0; i < items.length; i++) {
    if (category == "all" || items[i].className.indexOf(category) != -1) {
      items[i].style.display = "inline-block";
    } else {
      items[i].style.display = "none";
    }
  }
}

// FAQ toggle on services page
function toggleFaq(id) {
  var answer = document.getElementById(id);
  if (answer.style.display == "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
