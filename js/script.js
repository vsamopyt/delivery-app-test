const shoppingMenu = [
    [
        {id:"0-001", shop:"MacDac", dishes:"Pig Big Burger", image:"./images/001-burger.jpg",  price:3},
        {id:"0-002", shop:"MacDac", dishes:"Pig Medium Burger", image:"./images/001-burger.jpg",  price:2},
        {id:"0-003", shop:"MacDac", dishes:"Pig Small Burger", image:"./images/001-burger.jpg",  price:1},
        {id:"0-004", shop:"MacDac", dishes:"Beef Big Burger", image:"./images/001-burger.jpg",  price:6},
        {id:"0-005", shop:"MacDac", dishes:"Beef Medium Burger", image:"./images/001-burger.jpg",  price:4},
        {id:"0-006", shop:"MacDac", dishes:"Beef Small Burger", image:"./images/001-burger.jpg",  price:2},

    ],
    [
        {id:"1-001", shop:"KFC", dishes:"Chicken Big Wing", image:"./images/101-wings.jpg",  price:3},
        {id:"1-002", shop:"KFC", dishes:"Chicken Medium Wing", image:"./images/101-wings.jpg",  price:2},
        {id:"1-003", shop:"KFC", dishes:"Chicken Small Wing", image:"./images/101-wings.jpg",  price:1},

    ],
    [
        {id:"2-001", shop:"ExampleOne", dishes:"ExampleOne", image:"./images/101-wings.jpg",  price:3}

    ],
    [
        {id:"3-001", shop:"ExampleTwo", dishes:"ExampleTwo", image:"./images/101-wings.jpg",  price:3}

    ],
    [
        {id:"4-001", shop:"ExampleThree", dishes:"ExampleThree", image:"./images/101-wings.jpg",  price:3}

    ],
]

let asideButtons = document.querySelectorAll(".aside-buttons");
let mainButtons;
const orderedItemsTemp = [];



for (let i = 0; i < asideButtons.length; i++) {
    asideButtons[i].addEventListener("click", ()=>{
        localStorage.removeItem("orderedItems");

        // to set class active to button in order to make only one button active
        asideButtons.forEach(element => element.classList.remove("active"));       
        asideButtons[i].classList.add("active");

        //to make all buttons except class active disabled
        asideButtons.forEach(element => {
            if (element.classList.contains("active") === false) {
                element.disabled = true;
            }
        })

        //  to create cards for chosen shop
        let mainDishes = document.querySelectorAll(".main-list .main-item");
        mainDishes.forEach(element => element.remove());

        for(let key of  shoppingMenu[i]) {

            let mainItem = document.createElement("li");
            mainItem.classList.add("main-item");
            document.querySelector(".main-list").append(mainItem);

            let itemWraper =document.createElement("div");
            itemWraper.classList.add("item-wraper");
            mainItem.append(itemWraper);

            let mainImage = document.createElement("img");
            mainImage.setAttribute("src", key.image);
            mainImage.setAttribute("alt", "picture of "+ key.dishes);
            mainImage.classList.add("main-image");
            itemWraper.append(mainImage);

            let mainTitle =document.createElement("h3");
            mainTitle.classList.add("main-title");
            mainTitle.textContent = key.dishes;
            itemWraper.append(mainTitle);

            let mainButton = document.createElement("button");
            mainButton.classList.add("main-button");
            mainButton.setAttribute("data-id",key.id)
            mainButton.textContent = "add to cart";
            mainItem.append(mainButton);
        }
        
        // to order products
        let mainButtons = document.querySelectorAll(".main-button");
        for (let i= 0; i<mainButtons.length; i++) {
            mainButtons[i].addEventListener("click",() => {
                orderedItemsTemp.push(mainButtons[i].getAttribute("data-id"))
                let orderedItemsSet = new Set(orderedItemsTemp);
                console.log(orderedItemsSet);
                localStorage.setItem("orderedItems",JSON.stringify([...orderedItemsSet]) );
        
            } )
    }
    })
}

// to set all buttons active on dblclick

for (let i = 0; i < asideButtons.length; i++) {
    asideButtons[i].addEventListener("dblclick", () => {
        asideButtons.forEach(element => element.disabled = false);
    }
)}








  





