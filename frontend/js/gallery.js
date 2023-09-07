// Fetch all cards from the API and display them
axios.get('/api/')
    .then(response => {
        const cards = response.data;
        const gallery = document.getElementById('card-gallery');

        // Loop through each card and display it
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.innerHTML = `
        <h3>${card.name}</h3>
        <p>Type: ${card.type}</p>
        <p>Rarity: ${card.rarity}</p>
        <p>Text: ${card.text}</p>
        <img src="${card.image_url}" alt="${card.name}" />
      `;
            gallery.appendChild(cardElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
