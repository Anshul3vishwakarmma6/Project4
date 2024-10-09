fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const manhwaList = document.getElementById('manhwa-list');
        data.forEach(manhwa => {
            const manhwaDiv = document.createElement('div');
            manhwaDiv.className = 'manhwa';
            manhwaDiv.innerHTML = `<h2>${manhwa.title}</h2>
                                    <p><strong>Genre:</strong> ${manhwa.genre}</p>
                                    <p>${manhwa.description}</p>`;
            manhwaList.appendChild(manhwaDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
