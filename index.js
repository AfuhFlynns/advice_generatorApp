
    //Defining the url or advice endpoint
    console.log("hello, world!");
    fetch("https://api.adviceslip.come/advice")
    .then(response => response.json())
    .then((data) =>{
        //Getting the button
        const changeAdvice = document.getElementById("btn")
        //Performing the search
        function adviceGenerator() {
                //Getting the displays
                const adviceNumber = document.getElementById("hashNumber")
                adviceNumber.innerText = data.slips.id;
                const advice = document.getElementById("adviceDisplay")
                advice.innerText = data.slips.advice;
        }
        adviceGenerator()
        changeAdvice.addEventListener("click", e=>{
            adviceGenerator()
        })
    })