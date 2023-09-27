
let productsList = document.querySelectorAll(".products .product");
let showContainer = document.querySelector(".show-price .sum");
let totalPrice = document.querySelector(".show-price .total .total-content")
let showBtn = document.querySelector(".show-btn");
let pricesList = [];
let total;


productsList.forEach(p=>{
    p.addEventListener("click",function(e){
        e.currentTarget.classList.toggle("active");
        if(e.currentTarget.classList.contains("active") && pricesList.includes(document.querySelector(e.currentTarget.dataset.connect).dataset.price) === false){
            pricesList.push(document.querySelector(e.currentTarget.dataset.connect).dataset.price);
            let newPrice = pricesList.filter(x=>{return parseInt(x) != 0});
            showContainer.innerHTML = newPrice.join("+");
            total = pricesList.reduce((x,y)=>{return parseInt(x) + parseInt(y)});
        }if(e.currentTarget.classList.contains("active") === false && pricesList.includes(document.querySelector(e.currentTarget.dataset.connect).dataset.price) === true){
            let index = pricesList.indexOf(document.querySelector(e.currentTarget.dataset.connect).dataset.price);
            pricesList[index] = "0";
            let newPrice = pricesList.filter(x=>{return parseInt(x) != 0});
            showContainer.innerHTML = newPrice.join("+");
            total = pricesList.reduce((x,y)=>{return parseInt(x) + parseInt(y)});
        }

    })

})


showBtn.addEventListener("click",function(){
    totalPrice.innerHTML=`Total Price : ${total || 0}$`;
    console.log(total);
})





