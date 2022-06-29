
   async function load()
    {
        let url = "https://icanhazdadjoke.com/slack";
        let jokeData = await (await fetch(url)).json();
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('para');
        jokeElement.innerHTML = jokeText;

    }

    load();


// secoond way 

    
    // let url = fetch("https://icanhazdadjoke.com/slack")
    // .then(data => data.json())
    // .then(jokeData =>{
    // const jokeText = jokeData.attachments[0].text;
    // const jokeElement = document.getElementById('para');
    // jokeElement.innerHTML = jokeText;
    // })