const addButton = document.querySelector('addButton');
let inputValue = document.querySelector('.input');
const container = document.querySelector('.container');
const secondContainer = document.querySelector('.second-container');
let error = document.querySelector('.error-message')

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')


        let editButton = document.createElement('button')
        editButton.classList.add('editButton')
        editButton.innerHTML = "EDIT"
        let completedButton = document.createElement('button')
        completedButton.classList.add('completeButton')
        completedButton.innerHTML = "COMPLETE"

        let removeButton = document.createElement('button')
        removeButton.classList.add('removeButton')
        removeButton.innerHTML = "REMOVE"

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(completedButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input))
        completedButton.addEventListener('click', () => this.move(itemBox))
        removeButton.addEventListener('click', () => this.remove(itemBox))
        console.log(itemBox.parentNode)
    }
    edit(input){
        input.disabled = !input.disabled
        input.classList.toggle('item_clicked')
        
    }
    move(itemBox){
        secondContainer.append(itemBox)
        
    }
    remove(item){
        container.removeChild(item)
    }
}


let addFunction = (inputValue) => {
    

    if (inputValue == ""){
        error.innerHTML = "Error"
        error.hidden = false
    }
    else {
        new item(inputValue)
    }

    inputValue = "";
}

let resetFunction = () => {
    container.innerHTML = ""
    secondContainer.innerHTML = ""
}
// function check(){
//     if(inputValue.value != ""){
//         new item(inputValue.value);
//         inputValue.value = "";
//     }
//  }

// addButton.addEventListener('click', () => {

// });


