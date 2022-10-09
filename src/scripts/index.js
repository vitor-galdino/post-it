const checkUserLog = () => {
    const userLog = JSON.parse(localStorage.getItem("userSave"));

    if (!userLog) {
        renderPostIt(userData)
    } else {
        renderPostIt(userLog);
        userData = userLog;
    }
}

const renderPostIt = (obj) => {
    const divContainer = document.querySelector(".container");
    obj.forEach((elem) => {
        const { id, title, text } = elem;

        const div = document.createElement("div");
        const span = document.createElement("span");
        span.classList.add("user-tool");

        div.classList = `post cor-${id}`, div.id = id;
        div.innerHTML = `
        <input class="all-inputs" type="text" value="${title}" maxlength="22">
        <textarea class="all-inputs" name="post-${id}" cols="30" rows="10">${text}</textarea>
        `;
        span.append(div);
        divContainer.append(span);
    })
}

checkUserLog();

const saveUserLog = () => {
    const inputs = document.querySelectorAll(".all-inputs");
    inputs.forEach((input) => {
        input.oninput = (e) => {
            const index = userData.findIndex((obj) => obj.id === parseInt(e.path[1].id));

            userData[index].title = e.path[1].children[0].value;
            userData[index].text = e.path[1].children[1].value;

            const jsonUserData = JSON.stringify(userData);
            localStorage.setItem("userSave", jsonUserData)
        }
    })
}
saveUserLog();