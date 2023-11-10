// ! Get request in AJAX

let getData = document.getElementById("getData");
// console.log(getData);

//Now we will utilize getRequest in AJAX
getData.addEventListener("click", () => {
    // alert(1)
    
    //Now let creates the object http request
   let xhr = new  XMLHttpRequest();

   //fetching the text data
   xhr.open('GET', 'ajaxdata.txt', true);
//    console.log("I am get request");

//now let fetch the txt data above
xhr.onprogress = function(){
    console.log("I am progressing");
}
xhr.onload = function(){
    console.log(this.responseText);
}
xhr.send();

})

// ! POST request in AJAX (we are fetching the data from the API)
//
let postData = document.getElementById("postData");

//Now we will utilize getRequest in AJAX
postData.addEventListener("click", () => {
    
   let xhr = new  XMLHttpRequest();

   //fetching the api data
   xhr.open('POST', 'https://fakestoreapi.com/products', true);


//now let fetch the txt data above
xhr.onprogress = function(){
    console.log("I am progressing");
}
xhr.onload = function(){
    if(this.status === 200){
        console.log(this.responseText);
    }else{
        console.log("Page not found");
    }
}

xhr.send();

})
