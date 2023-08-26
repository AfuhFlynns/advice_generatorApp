$(document).ready(function (){
    'use strict'

    function headingcolor() {
        setTimeout(() => {
            let changeHeadingcolor = document.getElementById("heading")
        changeHeadingcolor.style.color = `blueviolet`
        }, 2000);
    }
    const data = [
        {
            advice:"Just a little smile on your face early in the morning can brighten your whole day",
            id:1,
            author:"Afuh Flynns Tembeng",
            date:"01/01/2023"
        },
        {
            advice:"The calls you get early in the morning from other people is just a manifestation of other poeple's agender over your life",
            id:2,
            author:"Afuh Flynns Tembeng",
            date:"20/01/2023"
        },
        {
            advice:"The worst thing you should ever do is to wake up early in the morning and the first thing you think is your phone",
            id:3,
            author:"Afuh Flynns Tembeng",
            date:"27/01/2023"
        },
        {
            advice:"The more you imagine, the more steps and guidelines you find to solve your problem",
            id:4,
            author:"Afuh Flynns Tembeng",
            date:"26/03/2023"
        },
        {
            advice:"It is not always all about the shoe quality but what matters is if the shoes take you to where you are going to!",
            id:5,
            author:"Afuh Flynns Tembeng",
            date:"26/02/2023"
        },
        {
            advice:"Your riality can only be what your mind has created",
            id:6,
            author:"Afuh Flynns Tembeng",
            date:"24/08/2023"
        },
        {
            advice:"Your mind is like a Supper computer and will run based on what data is given to it by your mouth: What you say is what you become!!",
            id:7,
            author:"Afuh Flynns Tembeng",
            date:"30/12/2020"
        },
        {
            advice:"If you tried once and it did not work, it doesn't means if your try again for a 100 times it won't work",
            id:8,
            author:"Afuh Flynns Tembeng",
            date:"22/04/2023"
        },
        {
            advice:"The best teacher of all times is life itself. Let life teach you so you can mend your errors",
            id:9,
            author:"Afuh Flynns Tembeng",
            date:"01/04/2023"
        },
        {
            advice:"If you can Imagine a change, then a chage can occur",
            id:10,
            author:"Afuh Flynns Tembeng",
            date:"08/08/2023"
        },
        {
            advice:"The first thought that gets into your mind at the beginning of the day can influence the whole course of your day",
            id:11,
            author:"Afuh Flynns Tembeng",
            date:"28/07/2023"
        },
        {
            advice:"There is no magic pill for gaining knowledge the only pill is learn more and practice more of what you are interested in!",
            id:12,
            author:"Afuh Flynns Tembeng",
            date:"29/07/2023"
        },
        {
            advice:"When you fill like all hope is gone just try taking a quick break, meditate and visualize the best version of your self",
            id:13,
            author:"Afuh Flynns Tembeng",
            date:"30/08/2023"
        },
        {
            advice:"What matters is not the goal you get after putting in effort, what is more important is the reward of the effort",
            id:14,
            author:"Afuh Flynns Tembeng",
            date:"24/08/2023"
        },
        {
            advice:"A website can only become a webapp with javascript",
            id:15,
            author:"Afuh Flynns Tembeng",
            date:"29/09/2023"
        },
        {
            advice:"Before trusting someone you should ensure that the amount of trust you give them is equal to the amount the give to you too",
            id:16,
            author:"Afuh Flynns Tembeng",
            date:"02/08/2023"
        },
        {
            advice:"Your intuition may be the best and fastest way to make decisions but it is dangerous because the decisions are feeling based and not from the mind and brain!",
            id:17,
            author:"Afuh Flynns Tembeng",
            date:"07/09/2023"
        },
        {
            advice:"Imagination is more powerful than knowledge",
            id:18,
            author:"Albert Einstein",
            date:"unkown"
        },
        {
            advice:"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
            id:19,
            author:"Albert Einstein",
            date: "Unknown"
        },
        {   advice:"You miss 100% of the shots you don't take.",
            id:20,
            author:"Wayne Gretzky",
            date: "Unknown"
        },
        {   advice:"Don't wait for opportunity, create it.",
            id:21,
            author:"George Bernard Shaw", 
            date: "Unknown"
        },
        {
            advice:"If you want to achieve greatness, stop asking for permission.",
            id:22,
            author:"Unknown", 
            date: "Unknown"
        },
        {
            advice:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
            id:23,
            author:"Nelson Mandela", 
            date: "Unknown"
        },
        {
            advice:"Success is not how high you have climbed, but how you make a positive difference to the world.",
            id:24, 
            author:"Roy T. Bennett", 
            date: "Unknown"
        },
        {
            advice:"Believe you can and you're halfway there.",
            id:25,
            author:"Theodore Roosevelt", 
            date: "Unknown"
        },
        {
            advice:"The only limit to our realization of tomorrow will be our doubts of today.",
            id:26,
            author:"Franklin D. Roosevelt",
            date: "Unknown"
        },
        {
           advice:"Strive not to be a success, but rather to be of value.",
           id:27,
           author:"Albert Einstein",
           date: "Unknown"
        },
        {
           advice:"The biggest risk is not taking any risk... In a world that's changing really quickly, the only        strategy that is guaranteed to fail is not taking risks.",
           id:28,
           author:"Mark Zuckerberg",
           date: "Unknown"
        },
        {
           advice:"If you want to live a happy life, tie it to a goal, not to people or things.",
           id:29,
           author:"Albert Einstein",
           date: "Unknown"
        },
        {
           advice:"Success is stumbling from failure to failure with no loss of enthusiasm.",
           id:30,
           author:"Winston Churchill",
           date: "Unknown"
        },
        {
           advice:"I have not failed. I've just found 10,000 ways that won't work.",
           id:31,
           author:"Thomas Edison",
           date: "Unknown"
        },
        {
           advice:"The best revenge is massive success.",
           id:34,
           author:"Frank Sinatra",
           date: "Unknown"
        },
        {
           advice:"The only person you are destined to become is the person you decide to be.",
           id:35,
           author:"Ralph Waldo Emerson ",
           date: "Unknown"
        },
        {
           advice:"The only way to do good work is to love what you do.",
           id:36,
           author:"Steve Jobs",
           date: "Unknown"
        }
    ]
    
            function adviceGenerator() {
                //Geting the advice
                var currentIndex = 0;
               function changeAdvice() {
                if (data.length > currentIndex) {
                        //Getting the displays
                    const gottenAdvice = data[currentIndex];
                    const adviceDisplay = document.getElementById("adviceDisplay")
                    adviceDisplay.innerText = (`"${gottenAdvice.advice}"`);
    
                    const adviceNumber = document.getElementById("hashNumber")
                    adviceNumber.innerText = (`${gottenAdvice.id}`);
    
                        const AuthorName = document.getElementById("authorName")
                        AuthorName.innerText = (`[${gottenAdvice.author}]`)
                        const issueDate = document.getElementById("adviceDate")
                        issueDate.innerText = (`${gottenAdvice.date}`)
                    currentIndex++
                    setInterval(() => {
                        if (currentIndex ==data.length) {
                            currentIndex = 0;
                        }
                    }, 40000);
                }
               }
               //Go to previous advice
               function previousAdvice() {
                currentIndex--
                if (currentIndex < 0) {
                    currentIndex = data.length - 1;
                } 
                if (currentIndex == currentIndex) {
                        //Getting the displays
                    const gottenAdvice = data[currentIndex];
                    const adviceDisplay = document.getElementById("adviceDisplay")
                    adviceDisplay.innerText = (`"${gottenAdvice.advice}"`);
    
                    const adviceNumber = document.getElementById("hashNumber")
                    adviceNumber.innerText = (`${gottenAdvice.id}`);
    
                        const AuthorName = document.getElementById("authorName")
                        AuthorName.innerText = (`[${gottenAdvice.author}]`)
                        const issueDate = document.getElementById("adviceDate")
                        issueDate.innerText = (`${gottenAdvice.date}`)
                }
               }
               //buttons and other functions
               const Next = document.getElementById("btn")
               Next.addEventListener("click", e=>{
                setInterval(() => {
                    if (currentIndex ==data.length) {
                        currentIndex = 0;
                    }
                }, 0);
                changeAdvice();
               })
               const toPreviousAdvice = document.getElementById("backArrow");
               toPreviousAdvice.addEventListener("click", e=>{
                setTimeout(() => {
                    previousAdvice();
                }, 0);
               })
                const changeAdviceByTime =()=>{
                        setInterval(() => {
                            changeAdvice();
                        }, 40000);
                }
                changeAdviceByTime();
            }
            adviceGenerator()
            const lightMode = document.getElementById("lightMode")
                const darkMode = document.getElementById("darkMode")
            //Change mode 
            const changeMode =()=>{
                    function toLightMode() {
                        lightMode.addEventListener("click", e=>{
                            darkMode.style.display=`block`
                            document.getElementById("chageMode").style.backgroundColor = `black`
                            document.getElementById("chageMode").style.opacity = `0.9`;
                            document.getElementById("heading").style.color = `white`
                            document.getElementById("heading").style.opacity = `0.8`
                            document.getElementById("item").style.color = `white`
                            document.getElementById("item").style.opacity = `0.5`
                            lightMode.style.display=`none`
                            var backgroundStyles = document.body
                                if (backgroundStyles.style.backgroundColor =`rgb(7, 14, 37)`) {
                                    backgroundStyles.style.backgroundColor =`rgb(56, 59, 63)`
                                    backgroundStyles.style.color=`black`
                                } else {
                                    backgroundStyles.style.backgroundColor = `rgb(7, 14, 37)`
                                }
                        })
                    }
                    toLightMode();
                    function toDarkMode() {
                        darkMode.addEventListener("click", e=>{
                            lightMode.style.display=`block`
                            document.getElementById("heading").style.color = `white`
                            document.getElementById("heading").style.opacity = `0.99`
                            document.getElementById("item").style.opacity = `0.99`
                            darkMode.style.display=`none`
                            var backgroundStyles = document.body
                                if (backgroundStyles.style.backgroundColor =`rgb(56, 59, 63)`) {
                                    backgroundStyles.style.backgroundColor =`rgb(7, 14, 37)`
                                    backgroundStyles.style.color=`white`
                                } else {
                                    backgroundStyles.style.backgroundColor = `rgb(56, 59, 63)`
                                }
                        })
                    }
                    toDarkMode();
            }
            changeMode();
    
            //Working on the popup
            const cancelPopupbtn = document.getElementById("cancelWelcome")
            const welcomePopup = document.getElementById("welcomePopup")
            const contentBody = document.getElementById("contentBody")
            const showPopup = ()=>{
                setTimeout(() => {
                    welcomePopup.style.display = `flex`
                    let bodyBackgroundchange = document.body
                    bodyBackgroundchange.style.backgroundColor = `rgb(36, 35, 35)`
                    const changeHeading = document.getElementById("heading")
                    changeHeading.style.opacity = `0.1`
                    contentBody.style.display = `none`
                    
                }, 6000);
            }
            showPopup()
            const disablePopup = ()=>{
                let bodyBackgroundchange = document.body
                    bodyBackgroundchange.style.backgroundColor = `rgb(7, 14, 37)`
                    welcomePopup.style.display = `none`
                    const Heading = document.getElementById("heading")
                    Heading.style.opacity = `1`
            }
            disablePopup();
            cancelPopupbtn.addEventListener("click", e=>{
                contentBody.style.display = `block`
                disablePopup();
                headingcolor();
            })
})