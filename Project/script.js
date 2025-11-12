// date and time on Home page
let dateBox = document.getElementById("datetime");
if (dateBox) {
  setInterval(() => {
    dateBox.textContent = new Date().toLocaleString();
  }, 1000);
}

// Save form data on register page
let saveBtn = document.getElementById("saveBtn");
if (saveBtn) {
  saveBtn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dept = document.getElementById("department").value;
    let about = document.getElementById("about").value;
    let gender = document.querySelector("input[name='gender']:checked").value;

    if (name === "" || email === "" || password === "") {
      alert("Please fill all required fields!");
      return;
    }

    // Save simple data
    let student = {
      name: name,
      email: email,
      dept: dept,
      gender: gender,
      about: about
    };

    localStorage.setItem("student", JSON.stringify(student));
    alert("Data saved! Go to Profile page to see it.");
  });
}

// Show saved info on Profile page
let profileArea = document.getElementById("profileArea");
if (profileArea) {
  let data = localStorage.getItem("student");
  if (data) {
    let s = JSON.parse(data);
    profileArea.innerHTML = `
      <h3>Your Profile</h3>
      <p><b>Name:</b> ${s.name}</p>
      <p><b>Email:</b> ${s.email}</p>
      <p><b>Department:</b> ${s.dept}</p>
      <p><b>Gender:</b> ${s.gender}</p>
      <p><b>About:</b> ${s.about}</p>
    `;
  } else {
    profileArea.innerHTML = "<p>No data saved yet.</p>";
  }
}

// Clear saved data button
let clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    localStorage.removeItem("student");
    alert("Saved data cleared!");
    location.reload();
  });
}
