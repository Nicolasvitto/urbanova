// Initialize Google Map
function initMap() {
    const saoPaulo = { lat: -23.5505, lng: -46.6333 }; // Coordenadas de São Paulo
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: saoPaulo,
    });

    // Adicione marcadores, se necessário
    const marker = new google.maps.Marker({
        position: saoPaulo,
        map: map,
        title: "São Paulo",
    });
}

// Chart configuration
const ctx = document.getElementById('graficoMobilidade').getContext('2d');

const graficoMobilidade = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ônibus', 'Metrô', 'Ciclovias', 'Carros', 'Pedestres'],
        datasets: [{
            label: 'Uso de Transporte',
            data: [300, 200, 150, 400, 250],
            backgroundColor: [
                'rgba(0, 123, 255, 0.7)',
                'rgba(40, 167, 69, 0.7)',
                'rgba(255, 193, 7, 0.7)',
                'rgba(220, 53, 69, 0.7)',
                'rgba(108, 117, 125, 0.7)'
            ],
            borderColor: [
                'rgba(0, 123, 255, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(220, 53, 69, 1)',
                'rgba(108, 117, 125, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Distribuição de Modais de Transporte em São Paulo',
                font: {
                    size: 18
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Usuários',
                    font: {
                        size: 14
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Modal de Transporte',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});


// News functionality
const newsContainer = document.querySelector('.news-container');
const loadMoreButton = document.querySelector('.load-more');

let currentPage = 1;

async function fetchNews(page = 1) {
    try {
        // Show loading state
        loadMoreButton.disabled = true;
        loadMoreButton.textContent = 'Carregando...';
        
        const response = await fetch(`/api/news?page=${page}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        showError('Erro ao carregar notícias. Tente novamente mais tarde.');
        return [];
    } finally {
        // Restore button state
        loadMoreButton.disabled = false;
        loadMoreButton.textContent = 'Carregar mais notícias';
    }
}


function renderNews(articles) {
    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-description">${article.description}</p>
                <a href="${article.link}" class="news-link">Leia mais</a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

async function loadMoreNews() {
    currentPage++;
    const news = await fetchNews(currentPage);
    renderNews(news);
    
    if (news.length < 3) {
        loadMoreButton.style.display = 'none';
    }
}

// Initial load and event listener
fetchNews().then(renderNews);
loadMoreButton.addEventListener('click', loadMoreNews);