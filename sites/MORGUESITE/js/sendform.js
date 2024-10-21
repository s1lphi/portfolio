const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const aboutarea = document.getElementById('aboutarea').value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Full Name and Email are required fields.");
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Invalid email address.");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '../php/send-form.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (this.responseText === 'success') {
      alert('Form submitted successfully!');
    } else {
      alert('Error submitting form. Please try again later.');
    }
  };
  xhr.send('name=' + name + '&email=' + email + '&aboutarea=' + aboutarea + '&submit=1');
});