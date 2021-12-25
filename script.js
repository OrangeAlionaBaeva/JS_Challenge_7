const addRemovebtns = () => {
    let alldivarray = document.querySelectorAll("div.pane");
    let counter = 0;
    for (const element of alldivarray) {
        element.insertAdjacentHTML('beforeend', `<button id="button-${counter+1}" class="removebtn">REMOVE</button>`);
        counter += 1;
    }


    let allBtnArr = document.querySelectorAll("div.pane button");
    for (const element of allBtnArr) {
        element.addEventListener('click', (evt) => {
            let parentId = document.getElementById(element.id).parentElement.id;
            document.getElementById(parentId).innerHTML = ``;
        });
    }
}

const adddivs = () => {
    location.reload();
    return false;
}