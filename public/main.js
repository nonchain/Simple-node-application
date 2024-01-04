const btnAddFriend = document.querySelector(".button-confirm");
const inputNewFriend = document.querySelector('input[name="name"]');

btnAddFriend &&
  btnAddFriend.addEventListener("click", () => {
    fetch("http://localhost:3001/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputNewFriend.value,
      }),
    }).then(() => {
      const element = document.createElement("a");
      element.setAttribute("href", "http://localhost:3001/");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  });
