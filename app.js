const jokeEl = document.querySelector('.joke');
const joke_btn = document.querySelector('.btn');

joke_btn.addEventListener('click', generatjoke)

async function generatjoke() {
    const config = {
        headers: {
            Accept: 'application/json' ,
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}