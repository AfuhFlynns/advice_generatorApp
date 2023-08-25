const url = "https://restcountries.com/v3.1/all";

//Getting the data from the api source

function outPutData() {
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(console.error());
}