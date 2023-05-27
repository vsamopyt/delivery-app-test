let orderedItems = JSON.parse(localStorage.getItem("orderedItems"));
let userOrder = document.querySelector(".user-order");

try {
    orderedItems.length >= 0;
} catch (error) {
    window.alert("You should choose products");   
}
// to get data from local storage
// to create cards with ordered items
for (let j = 0; j < orderedItems.length; j++) {
    let arrayMenu = orderedItems[j].split("-");
    for (let key of shoppingMenu[arrayMenu[0]]) {
        if(orderedItems[j] === key.id) {

            let orderItem = document.createElement("li");
            orderItem.classList.add("order-item");
            orderItem.setAttribute("object-id",key.id );
            userOrder.append(orderItem);

            let orderImage = document.createElement("img");
            orderImage.classList.add("order-image");
            orderImage.setAttribute("src", key.image);
            orderImage.setAttribute("alt", "picture of " + key.dishes);
            orderItem.append(orderImage);
            
            let orderWraper = document.createElement("div");
            orderWraper.classList.add("order-wraper");
            orderItem.append(orderWraper);

            let orderTitle = document.createElement("h2");
            orderTitle.classList.add("order-title");
            orderTitle.textContent = key.dishes;
            orderWraper.append(orderTitle);

            let orderPrice = document.createElement("span");
            orderPrice.classList.add("order-price");
            orderPrice.textContent = "price: " + key.price;
            orderPrice.setAttribute("data-price", key.price);
            orderWraper.append(orderPrice);

            let labelOrderInput = document.createElement("label");
            labelOrderInput.setAttribute("for", key.id);
            orderWraper.append(labelOrderInput);

            let orderInput = document.createElement("input");
            orderInput.setAttribute("type", "number");
            orderInput.setAttribute("id", key.id);
            orderInput.setAttribute("name", key.dishes);
            orderInput.classList.add("order-input");
            orderInput.value = 0;
            orderWraper.append(orderInput);
        }
   }  
}


//  to calculate total sum on input of item's volume 
let orderInputs = document.querySelectorAll(".order-input");
let orderPrices = document.querySelectorAll(".order-price");

    for (let i=0; i<orderInputs.length; i++) {
        orderInputs[i].addEventListener("input", () => {
            let arrayInputs = [];
            orderInputs.forEach((element, index) => {
                arrayInputs.push(+element.value * orderPrices[index].getAttribute("data-price") );
            })
            let summ = arrayInputs.reduce((accum, element) => {
                accum = accum + element;
                return accum;
            })
        document.querySelector(".form-element-conteiner span").textContent = "Total price: " + summ;
        })
    }

// to delete card of item on dblclick
let orderItems = document.querySelectorAll(".order-item");
let arrays = [];
let arrayA = [];

for (let i=0; i<orderItems.length; i++) {
    orderItems[i].addEventListener("dblclick", () => {
        orderItems[i].remove();
        arrays.push(orderItems[i].getAttribute("object-id"));

        arrayA = [];
        for (let i =0; i<orderItems.length; i++) {
            if(arrays.includes(orderItems[i].getAttribute("object-id")) !== true) {
                arrayA.push(orderItems[i].getAttribute("object-id"));
            }
        }
        localStorage.setItem("orderedItems",JSON.stringify(arrayA ));
    
    
// re-calculate price on deleting card (on dblclick)
        let orderInputs = document.querySelectorAll(".order-input");
        let orderPrices = document.querySelectorAll(".order-price");
        arrayInputs = [0];
        orderInputs.forEach((element, index) => {
            arrayInputs.push(+element.value * orderPrices[index].getAttribute("data-price") )
        })
        let summ = arrayInputs.reduce((accum, element) => {
            accum = accum + element;
            return accum;
        })      
        document.querySelector(".form-element-conteiner span").textContent = "Total price: " + summ;
    })
}


let listInputs = document.querySelectorAll(".info-input");
let listLabels = document.querySelectorAll(".label");
let submitButton = document.querySelector(".form-element-conteiner button");
let inputItems = document.querySelectorAll(".order-input");
let orderItem = document.querySelectorAll(".order-item");


let arrayUser = [];
let objectInputs = {};
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    arrayUser = [];
    for(let i = 0; i < listInputs.length; i++) {
        objectInputs[listLabels[i].textContent] = listInputs[i].value;
    }

    arrayUser.push(objectInputs);

    let inputItems = document.querySelectorAll(".order-input");
    let orderItem = document.querySelectorAll(".order-item");

    for(let k = 0; k < orderItem.length; k++) {
        let objectItems = {};
        objectItems.id = orderItem[k].getAttribute("object-id");
        objectItems.volume = inputItems[k].value;
        arrayUser.push(objectItems);
    }
    console.log(arrayUser)
})

