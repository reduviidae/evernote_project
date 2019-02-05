document.addEventListener("DOMContentLoaded", getStarted)

const usersURL = "http://localhost:3000/api/v1/users/"
const notesURL = "http://localhost:3000/api/v1/notes/"

function displayNote(datum) {
  const mainSection = document.querySelector("main")
  mainSection.innerHTML =
  `<h2>${datum.title}</h2>
  <br>
  <p>${datum.body}</p>`
}

function displayUserNotes(data) {
  const sidelist = document.querySelector("#userNotes")
  data.notes.forEach(datum => {
    const li = document.createElement("li")
    li.innerHTML = `<h3>${datum.title}</h3>`
    li.id = `${datum.id}`
    sidelist.appendChild(li)
    li.addEventListener("click", () => {
      displayNote(datum)
    })
  })
}

function getStarted() {
  fetch(usersURL + 1)
  .then(res => res.json())
  .then(data => displayUserNotes(data))
}
