// Handle Intern Registration
document.getElementById("registerForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const internData = {
    name: form.name.value,
    gender: form.gender.value,
    age: form.age.value,
    degree: form.degree.value,
    graduationyear: form.graduationyear.value,
    contact: form.contact.value
  };

  try {
    const res = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(internData)
    });

    const data = await res.json();
    const messageDiv = document.getElementById("message");

    if (res.ok) {
      messageDiv.style.color = "green";
      messageDiv.textContent = "Intern registered successfully!";
      form.reset();
    } else {
      messageDiv.style.color = "red";
      messageDiv.textContent = data.message || "Registration failed.";
    }
  } catch (err) {
    document.getElementById("message").textContent = "Error connecting to server.";
  }
});

// Toggle Admin Login Box
document.getElementById("top-right")?.addEventListener("click", () => {
  const loginBox = document.getElementById("loginBox");
  if (loginBox) {
    loginBox.style.display = loginBox.style.display === "none" ? "block" : "none";
  }
});

// Admin Login
document.getElementById("loginSubmit")?.addEventListener("click", async () => {
  const email = document.getElementById("adminEmail").value;
  const code = document.getElementById("adminPassword").value;

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, code })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Login successful");
      window.location.href = "/admin.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    alert("Error connecting to server");
  }
});

// Load Interns in Admin Dashboard
window.onload = async () => {
  // This runs only on admin.html
  const table = document.querySelector("#internTable tbody");
  if (!table) return;

  try {
    const res = await fetch("http://localhost:5000/intern");
    const interns = await res.json();
    if (!Array.isArray(interns)) {
      console.error("Unexpected data:", interns);
      return;
    }

    interns.forEach(intern => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${intern.name}</td>
        <td>${intern.gender}</td>
        <td>${intern.age}</td>
        <td>${intern.degree}</td>
        <td>${intern.graduationyear}</td>
        <td>${intern.contact}</td>
      `;
      table.appendChild(row);
    });
  } catch (err) {
    console.error("Failed to load interns:", err);
  }
};
