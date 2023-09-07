// Fetch card data, populate the form, and submit updated data
const id = window.location.pathname.split('/').pop();

axios.get(`/api/${id}`)
    .then(response => {
        const card = response.data;
        const form = document.getElementById('update-card-form');

        form.name.value = card.name;
        form.type.value = card.type;
        form.rarity.value = card.rarity;
        form.text.value = card.text;
        form.image_url.value = card.image_url;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

document.getElementById('update-card-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        type: e.target.type.value,
        rarity: e.target.rarity.value,
        text: e.target.text.value,
        image_url: e.target.image_url.value
    };

    axios.put(`/api/${id}`, formData)
        .then(response => {
            alert('Card updated successfully');
        })
        .catch(error => {
            alert('Error updating card');
            console.error(error);
        });
});
