const btnAddFriend = document.querySelector(".button-confirm");
const inputNewFriend = document.querySelector('input[name="name"]');

btnAddFriend.addEventListener("click", () => {
  fetch("http://localhost:3001/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": inputNewFriend.value
    })
  })
})