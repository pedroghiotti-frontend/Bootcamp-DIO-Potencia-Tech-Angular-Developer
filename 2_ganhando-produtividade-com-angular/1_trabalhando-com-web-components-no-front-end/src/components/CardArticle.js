class CardAticle extends HTMLElement
{
    constructor()
    {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(this.build(), this.style());
    }

    build()
    {
        const root = document.createElement('div');
        root.setAttribute('class', 'card');

        // card-left
        const cardLeft = document.createElement('div');
        cardLeft.classList += 'card-left';

        const clSpan = document.createElement('span');
        clSpan.textContent = `By ${this.getAttribute('author') || 'someone... probably.'}`;

        const clh1 = document.createElement('h1');
        clh1.textContent = this.getAttribute('headline') || 'Something... probably';

        const clp = document.createElement('p');
        clp.textContent = this.innerHTML;
        this.innerHTML = '';
        
        cardLeft.append(clSpan, clh1, clp);
        
        // card-right
        const cardRight = document.createElement('div');
        cardRight.classList += 'card-right';
        
        const crImg = document.createElement('img');
        crImg.src = this.getAttribute('src') || 'https://unsplash.it/200';

        cardRight.append(crImg);

        root.append(cardLeft, cardRight);

        return root;
    }

    style()
    {
        const styles = document.createElement('style');
        
        styles.textContent = 
        `
        .card
        {
            width: 50%;
            display: flex;
            flex-direction: row;
            padding: .5rem;
            background-color: white;
            border-radius: .5rem;
            filter: drop-shadow(0px 0px 10px black);
            justify-content: space-between;
        }
        .card-left
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .card-left > h1
        {
            margin-top: 1rem;
            font-size: 1.5rem;
        }
        .card-left > span
        {
            font-size: .8rem;
            font-weight: bold;
        }
        .card-left > p
        {
            font-size: 1rem;
            font-weight: 300;
            color: grey;
        }
        .card-right > img
        {
            border-radius: .5rem;
        
        }
        `;

        return styles;
    }
}

customElements.define('card-article', CardAticle);