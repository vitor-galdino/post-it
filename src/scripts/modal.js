const showModal = () => {
    const modalBtn = document.querySelectorAll(".user-tool");
    modalBtn.forEach(button => {
        button.onclick = (e) => {
            if (e.target.tagName.toLowerCase() === "span") {
                renderModal(parseInt(e.target.children[0].id));
                saveUserLog();
                closeModal();
            }
        }
    })
}

const renderModal = (id) => {
    const { title, text } = userData[id - 1]

    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
    <span class="close-modal user-tool">
        <div class="post cor-${id}" id="${id}">
            <input class="all-inputs" type="text" value="${title}" maxlength="22">
                <textarea class="all-inputs" name="post-${id}">${text}</textarea>
        </div>
    </span>
    `;
    document.body.append(div);
}
showModal();

const closeModal = () => {
    const closeBtn = document.querySelector(".close-modal");
    closeBtn.onclick = (e) => {
        if (e.target.tagName.toLowerCase() === "span") {
            closeBtn.classList.add("close-animation")
            renderPostIt(userData);
            setTimeout(() => {
                document.querySelector(".modal").remove();
                showModal();
            }, 600);
        }
    }
}

