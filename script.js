function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mblkgzry", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./contact_send.html";
    }).catch((error) => {
        console.log(error);
    });
}

function toggleMenu() {
    document.getElementById('burger-menu').classList.toggle('d_none');
}
