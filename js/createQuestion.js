const btnSendFormServer = document.querySelector(".btn-edit-item");
const editName = document.querySelector('.name')
const tell = document.querySelector(".tell");
const comments = document.querySelector(".comments");



btnSendFormServer.addEventListener("click", getValueINputSendServerForm);

async function getValueINputSendServerForm(e) {
  const obj = {
    editName: editName.value,
    tell: tell.value,
    comments: comments.value,
  };

  const result = await fetch("http://localhost:3001/question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}
