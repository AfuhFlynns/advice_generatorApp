const data = [
    author="Afuh Flynns Tembeng",
    date = "24/08/2023",
    {
        advice:"It is easy to take notice, but not easy to take action",
        id:1
    },
    {
        advice:"The calls you get early in the morning from other people is just a manifestation of other poeple's agender over your life",
        id:2
    },
    {
        advice:"The worst thing you should ever do is to wake up early in the morning and the first thing you think is your phone",
        id:3
    },
    {
        advice:"The more you imagine, the more steps and guidelines you find to solve your problem",
        id:4
    },
    {
        advice:"It is not always all about the shoe quality but what matters is if the shoes take you to where you are going to!",
        id:5
    },
    {
        advice:"Your riality can only be what your mind has created",
        id:6
    },
    {
        advice:"Your mind is like a Supper computer and will run based on what data is given to it by your mouth: What you say is what you become!!",
        id:7
    },
    {
        advice:"If you tried once and it did not work, it doesn't means if your try again for a 100 times it won't work",
        id:8
    },
    {
        advice:"The best teacher of all times is life itself. Let life teach you so you can mend your errors",
        id:9
    },
    {
        advice:"If you can Imagine a change, then a chage can occur",
        id:10
    },
    {
        advice:"The first thought that gets into your mind at the beginning of the day can influence the whole course of your day",
        id:11
    },
    {
        advice:"There is no magic pill for gaining knowledge the only pill is learn more and practice more of what you are interested in!",
        id:12
    },
    {
        advice:"When you fill like all hope is gone just try taking a quick break, meditate and visualize the best version of your self",
        id:13
    },
    {
        advice:"",
        id:14
    },
    {
        advice:"",
        id:15
    },
    {
        advice:"",
        id:16
    },
    {
        advice:"",
        id:17
    }
]

    //Defining the url or advice endpoint
    console.log("hello, world!");
    fetch("https://api.adviceslip.come/advice")
        //Getting the button
        //Performing the search
        function adviceGenerator() {
                //Getting the displays
                const adviceNumber = document.getElementById("hashNumber")
                adviceNumber.innerText = data.slips.id;
                const advice = document.getElementById("adviceDisplay")
                advice.innerText = data.slips.advice;
        }
        adviceGenerator()