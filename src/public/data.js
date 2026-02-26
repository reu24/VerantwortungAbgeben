fetch('/request', {
    method: 'GET',
}).then(async r => {
    document.getElementById('text').innerText = await r.text()
});
