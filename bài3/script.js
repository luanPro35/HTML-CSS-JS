document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const openModalButton = document.querySelector(".button");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    openModalButton.addEventListener("click", function () {
        modal.classList.remove("hide");
        modal.classList.add("show");
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            modal.classList.remove("show");
            modal.classList.add("hide");
        });
    });

    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            modal.classList.remove("hide");
            modal.classList.add("show");
        }
    });
});
