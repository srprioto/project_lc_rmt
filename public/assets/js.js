const Toast = {
    //inicia al cargar la pagina
    init() {
        this.hideTimeout = null;
    
        this.el = document.createElement("div");
        this.el.className = "toast";
        document.body.appendChild(this.el);
    },
    
    // activa el toast
    show(message, state) {
        clearTimeout(this.hideTimeout);
    
        this.el.innerHTML = `
            ${message}
        `;
        this.el.className = "toast toast--visible";
    
        if (state) {
        this.el.classList.add(`toast--${state}`);
        }
    
        this.hideTimeout = setTimeout(() => {
        this.el.classList.remove("toast--visible");
        }, 3000);
    }
};


function toastSuccess(){
    Toast.show("Correcto", "success")
}

function toastWarning(){
    Toast.show("Precaución", "warning")
}

function toastDanger(){
    Toast.show("Peligro", "danger")
}

document.addEventListener("DOMContentLoaded", () => Toast.init());