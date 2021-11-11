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
        removeButton.addEventListener('click', () => this.test(itemBox))
    }
    edit(input){
        if(input.value == ""){
            error.innerHTML = "Can't leave it empty!"
            error.hidden = false
        }
        else{
            input.classList.toggle('item_clicked')
            input.disabled = !input.disabled
            error.hidden = true
        }
        
    }
    move(itemBox){
        secondContainer.append(itemBox)
        let test = itemBox.childNodes[2]
        itemBox.removeChild(test)

    }
    remove(item){
        container.removeChild(item)
    }
    test(item){
        secondContainer.removeChild(item)
    }
}

    
let addFunction = (inputValue) => {
    inputValue = document.querySelector('.input').value;
    if (inputValue == ""){
        error.innerHTML = "You need to type something!"
        error.hidden = false
    }
    else {
        new item(inputValue)
        error.hidden = true
    }
    inputValue = document.querySelector('.input').value = ""
}

let resetFunction = () => {
    container.innerHTML = ""
    secondContainer.innerHTML = ""
    error.hidden = true
}


