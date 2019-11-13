export async function fetchUp() {
    const response = await fetch('https://api.randomuser.me/?results=3');
    const myJson = await response.json();
    const persons = myJson.results;

    // console.log(await response.json());

    const personsEl = document.querySelector('.section-speakers-persons');
    personsEl.innerHTML = '';

    persons.map(person => {
        const cardEl = document.createElement('div');
        cardEl.className = 'section-speakers-card';
        cardEl.innerHTML = `
        
                <div class="section-speakers-card-img">
                    <img src=${person.picture.large} alt="cat">
                </div>
                <div class="section-speakers-card-name">
                    <div>${person.name.first}</div>
                    <div>${person.name.last}</div>
                    
                </div>
                <div class="section-speakers-card-function">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div class="section-speakers-card-site">www.yandex.ru</div>
            `;

        personsEl.appendChild(cardEl);
    })
}

