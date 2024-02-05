const butInstall = document.getElementById('buttonInstall');


// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install!';
});


// TODO: Implement a click event handler on the `butInstall` element




// TODO: Add an handler for the `appinstalled` event

