let ol = document.createElement('ol');
document.getElementById('block__task').append(ol);
let n =90300030;

for(let i =0; i<n;i++){

    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;

    ol.prepend(li);
    // li=li.classList.add('li-active');
}

// let llll=document.querySelector('ol');
// llll.classList.add('li-active');


let listItems = document.getElementsByTagName("li")
let removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);
function removeItem() {
    let last = listItems[listItems.length - 1];
    last.parentNode.removeChild(last);
}
//
// let li2=document.querySelector('.li-active');
// function showBigger(){
//     this.setAttribute('style', 'color:green');
// }
// li2.addEventListener("mouseover", showBigger);




function b2() {
ol = document.querySelector("ol"), // выбираем первый элемент ol в документе
li = ol.querySelectorAll("li"); // выбираем все элементы li в первoм элементe ol
	li.forEach(function(elem) { // проходим все элементы коллекции
elem.addEventListener("mouseover", function(){this.style.color = "mediumpurple";
    this.style.fontSize = "24px";
    this.style.fontStyle = "italic";
})
	})
	li.forEach(function(elem) { 
elem.addEventListener("mouseout", function(){this.style.color = "black";
    this.style.fontSize = "20px";
    this.style.fontStyle = "normal";
})
	})    
}




