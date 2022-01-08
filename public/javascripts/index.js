window.onload = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    const difference = document.documentElement.scrollHeight - window.innerHeight;
    const scrollposition = document.documentElement.scrollTop;
    if (difference - scrollposition <= 2) {
        loadUser()
    }
}

async function loadUser() {
    var response = await fetch('/users');
    var users = await response.json();
    users.forEach(user => {
        parseUserToUI(user)
    });
}

function parseUserToUI(user) {
    var myTbody = document.querySelector("#usertable>tbody");
    var newRow = myTbody.insertRow();
    let namecell =  newRow.insertCell();
    namecell.colSpan = 2
    namecell.append(user.name)
    newRow.insertCell().append(user.gender);
    let addressCell =  newRow.insertCell();
    addressCell.colSpan = 3
    addressCell.append(user.address)
    newRow.insertCell().append(user.phone);
    let noteCell =  newRow.insertCell();
    noteCell.colSpan = 2
    noteCell.append(user.note)
}