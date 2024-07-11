document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const apiKey = '54c7d23a27e211337659279cc10c5577'; // Substitua pela sua chave de API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar o tempo. Verifique os dados informados.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const weatherInfo = `O tempo em ${city}, ${state} é ${weatherDescription}. Temperatura atual: ${temperature}°C.`;
            document.getElementById('weatherInfo').textContent = weatherInfo;
        })
        .catch(error => {
            console.error('Erro ao obter dados do tempo:', error);
            document.getElementById('weatherInfo').textContent = error.message;
        });
});

document.getElementById('state').addEventListener('input', function() {
    const stateInput = document.getElementById('state').value.trim();
    const cityInput = document.getElementById('city').value.trim();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !(stateInput && cityInput);
});

document.getElementById('city').addEventListener('input', function() {
    const stateInput = document.getElementById('state').value.trim();
    const cityInput = document.getElementById('city').value.trim();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !(stateInput && cityInput);
});
