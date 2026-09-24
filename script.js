
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

const modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    modeBtn.textContent = "Sáng";
  } else {
    modeBtn.textContent = "Tối";
  }
});

const links = document.querySelectorAll('nav a');

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    menu.classList.remove("show");
  });
});

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const countText = document.getElementById("count");
const form = document.getElementById("contact-form");
const successText = document.getElementById("success");

messageInput.addEventListener("input", function () {
  countText.textContent = messageInput.value.length;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Vui lòng nhập họ tên");
    return;
  }

  if (!emailInput.value.includes("@")) {
    alert("Email không hợp lệ");
    return;
  }

  if (messageInput.value.trim().length < 5) {
    alert("Lời nhắn quá ngắn");
    return;
  }

  successText.classList.remove("hidden");
  form.reset();
  countText.textContent = "0";
});


const searchBox = document.getElementById("search-box");
const projects = document.querySelectorAll(".project-box");

searchBox.addEventListener("input", function () {
  const keyword = searchBox.value.toLowerCase();

  projects.forEach(function (project) {
    const text = project.textContent.toLowerCase();
    if (text.includes(keyword)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});


document.getElementById("year").textContent = new Date().getFullYear();
