let list = document.querySelector('.list');

let search = document.querySelector('.search')

let listbtn = document.querySelector('.delete-btn');

let addItem = document.querySelector('.add-item');

let addItembtn = document.querySelector('.add-button');

list.addEventListener('click', e =>{
     if(e.target.className == 'delete-btn'){
        
        e.target.parentNode.remove()

        if(list.children.length == 0){
            let listEmptyMsg = document.createElement('div')
            listEmptyMsg.style.textAlign = 'center'
            listEmptyMsg.style.color = '#333'
            listEmptyMsg.innerText = 'Your list is empty'
            listEmptyMsg.id = 'emptyMsg'
            list.appendChild(listEmptyMsg)
        }
  }
})

addItembtn.addEventListener('click', e =>{
    e.preventDefault()
    if(!addItem.value){
        return
    }
    if(document.querySelector('#emptyMsg')){
        document.querySelector('#emptyMsg').remove()
    }
    
    list.appendChild(creatListItem(addItem.value))
    addItem.value = ''

        
})

creatListItem = (itemValue) =>{
    let itemSpan = document.createElement('span')
    let btnSpan = document.createElement('span')
    let li = document.createElement('li')

    itemSpan.innerText = itemValue;
    itemSpan.className = 'title'
    btnSpan.innerText = 'delete'
    btnSpan.className = 'delete-btn'
    li.className = 'list-item'
    li.appendChild(itemSpan)
    li.appendChild(btnSpan)
  
    return (li)
}

search.addEventListener("input", (e)=>{
    Array.from(list.children).forEach(element =>{
        if(document.querySelector('#emptyMsg')){
            return
        }

        if(element.querySelector('.title').innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = 'flex'
    
        }else{
            element.style.display = 'none'
    
        }
    })
    
})