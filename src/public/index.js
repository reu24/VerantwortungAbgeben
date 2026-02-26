document.getElementById("submit-button").addEventListener("click", event => {
    event.preventDefault();
    const inputText = document.getElementById("input-text").value;

    fetch('request', {
        method: 'POST',
        body: inputText,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        document.getElementById("input-text").value = '';
        document.getElementById("submit-button").disabled = true;
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
});

document.getElementById('input-text').addEventListener('keyup', event => {
    document.getElementById("submit-button").disabled = document.getElementById("input-text").value.trim() === "";
});