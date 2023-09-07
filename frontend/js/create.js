// Submit form to create a new card
document.getElementById('create-card-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        type: e.target.type.value,
        rarity: e.target.rarity.value,
        text: e.target.text.value,
        image_url: e.target.image_url.value
    };

    axios.post('/api/', formData)
        .then(response => {
            alert('Card created successfully');
        })
        .catch(error => {
            alert('Error creating card');
            console.error(error);
        });
});
