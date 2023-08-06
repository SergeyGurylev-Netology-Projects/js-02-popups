document.getElementById("modal_main").className = "modal modal_active";

const buttons = Array.from(document.querySelectorAll('.btn, .modal__close_times'));
buttons.forEach(btn => {btn.onclick = onClickButton});

function onClickButton() {
    if (this.className.includes("show-success")) {
        document.getElementById("modal_success").className = "modal modal_active";
    }

    if (this.className.includes("modal__close")) {
        let modalElement = this.closest(".modal");
        modalElement.className = "modal";
        modalElement.close();
    }
}
