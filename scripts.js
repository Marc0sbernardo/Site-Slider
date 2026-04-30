let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.OnClick = () => moveItemsOnClick('next')
btnBack.OnClick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
    let ListItems = document.querySelectorAll('.list .list-item')
    let ThumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
    }else {

    }
    
}