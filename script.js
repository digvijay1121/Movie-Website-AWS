// AWS S3 Bucket
const bucket = "https://ott-platform-2026.s3.ap-south-1.amazonaws.com";

// Movie/Show Data
const contentData = {
    trending: [
        { id: 1, title: "Uri: The Surgical Strike", year: 2019, rating: 8.2, poster: `${bucket}/posters/movie1.jpg`, trailer: `${bucket}/trailers/trailer1.mp4` },
        { id: 2, title: "Dhurandhar", year: 2018, rating: 8.5, poster: `${bucket}/posters/movie2.jpg`, trailer: `${bucket}/trailers/trailer2.mp4` },
        { id: 3, title: "Chhichhore", year: 2019, rating: 8.3, poster: `${bucket}/posters/movie3.jpg`, trailer: `${bucket}/trailers/trailer3.mp4` },
        { id: 4, title: "Bajrangi Bhaijaan", year: 2015, rating: 8.1, poster: `${bucket}/posters/movie4.jpg`, trailer: `${bucket}/trailers/trailer4.mp4` },
        { id: 5, title: "12th Fail", year: 2023, rating: 9.0, poster: `${bucket}/posters/movie5.jpg`, trailer: `${bucket}/trailers/trailer5.mp4` },
        { id: 6, title: "Bhaag Milkha Bhaag", year: 2013, rating: 8.0, poster: `${bucket}/posters/movie1.jpg`, trailer: `${bucket}/trailers/trailer1.mp4` },
    ],
    movies: [
        { id: 7, title: "Pathaan", year: 2023, rating: 7.8, poster: `${bucket}/posters/movie2.jpg`, trailer: `${bucket}/trailers/trailer2.mp4` },
        { id: 8, title: "Border", year: 1997, rating: 8.4, poster: `${bucket}/posters/movie3.jpg`, trailer: `${bucket}/trailers/trailer3.mp4` },
        { id: 9, title: "Raees", year: 2017, rating: 7.2, poster: `${bucket}/posters/movie4.jpg`, trailer: `${bucket}/trailers/trailer4.mp4` },
        { id: 10, title: "Khiladi", year: 2023, rating: 6.9, poster: `${bucket}/posters/movie5.jpg`, trailer: `${bucket}/trailers/trailer5.mp4` },
        { id: 11, title: "Jawan", year: 2023, rating: 7.5, poster: `${bucket}/posters/movie1.jpg`, trailer: `${bucket}/trailers/trailer1.mp4` },
        { id: 12, title: "Dunki", year: 2023, rating: 7.4, poster: `${bucket}/posters/movie2.jpg`, trailer: `${bucket}/trailers/trailer2.mp4` },
    ],
    shows: [
        { id: 13, title: "Sacred Games", year: 2018, rating: 8.6, poster: `${bucket}/posters/movie3.jpg`, trailer: `${bucket}/trailers/trailer3.mp4` },
        { id: 14, title: "Mirzapur", year: 2018, rating: 8.7, poster: `${bucket}/posters/movie4.jpg`, trailer: `${bucket}/trailers/trailer4.mp4` },
        { id: 15, title: "Castlevania", year: 2017, rating: 8.5, poster: `${bucket}/posters/movie5.jpg`, trailer: `${bucket}/trailers/trailer5.mp4` },
        { id: 16, title: "The Crown", year: 2016, rating: 8.8, poster: `${bucket}/posters/movie1.jpg`, trailer: `${bucket}/trailers/trailer1.mp4` },
        { id: 17, title: "Breaking Bad", year: 2008, rating: 9.5, poster: `${bucket}/posters/movie2.jpg`, trailer: `${bucket}/trailers/trailer2.mp4` },
        { id: 18, title: "Sherlock", year: 2010, rating: 9.1, poster: `${bucket}/posters/movie3.jpg`, trailer: `${bucket}/trailers/trailer3.mp4` },
    ]
};

// DOM Elements
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const playBtn = document.getElementById('playBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCarousel('trending', contentData.trending);
    renderCarousel('movies', contentData.movies);
    renderCarousel('shows', contentData.shows);
    setupEventListeners();
});

/**
 * Render carousel with cards
 */
function renderCarousel(type, items) {
    const carousel = document.getElementById(`${type}Carousel`);
    carousel.innerHTML = '';

    items.forEach(item => {
        const card = createCard(item);
        carousel.appendChild(card);
    });
}

/**
 * Create content card
 */
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.poster}" alt="${item.title}" class="card-poster" loading="lazy">
        <div class="card-overlay">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-rating">
                <span>${item.year}</span>
                <span>⭐ ${item.rating}</span>
            </div>
            <div class="card-buttons">
                <button class="card-btn play" onclick="playVideo(event)" data-trailer="${item.trailer}" data-title="${item.title}">
                    <i class="fas fa-play"></i> Play
                </button>
                <button class="card-btn add">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

/**
 * Play video trailer
 */
function playVideo(event) {
    event.stopPropagation();
    const button = event.currentTarget;
    const trailerUrl = button.dataset.trailer;

    videoSource.src = trailerUrl;
    videoPlayer.load();
    videoModal.classList.add('active');

    setTimeout(() => {
        videoPlayer.play().catch(err => {
            console.log('Autoplay prevented:', err);
        });
    }, 100);
}

/**
 * Scroll carousel
 */
function scrollCarousel(button, direction) {
    const carousel = button.closest('.carousel-wrapper').querySelector('.carousel');
    const scrollAmount = 300;

    if (direction === 1) {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

/**
 * Close video modal
 */
function closeVideoModal() {
    videoModal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoSource.src = '';
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Close modal button
    closeModal.addEventListener('click', closeVideoModal);

    // Close modal on outside click
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Play button
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const firstTrailer = contentData.trending[0].trailer;
            videoSource.src = firstTrailer;
            videoPlayer.load();
            videoModal.classList.add('active');
            setTimeout(() => {
                videoPlayer.play().catch(err => console.log('Autoplay prevented'));
            }, 100);
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            filterContent(query);
        });
    }

    // Add to list button effects
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add')) {
            const btn = e.target.closest('.add');
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        }
    });

    // Smooth scroll for nav items
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

/**
 * Filter content based on search
 */
function filterContent(query) {
    if (!query.trim()) {
        renderCarousel('trending', contentData.trending);
        renderCarousel('movies', contentData.movies);
        renderCarousel('shows', contentData.shows);
        return;
    }

    const filtered = {
        trending: contentData.trending.filter(item => item.title.toLowerCase().includes(query)),
        movies: contentData.movies.filter(item => item.title.toLowerCase().includes(query)),
        shows: contentData.shows.filter(item => item.title.toLowerCase().includes(query))
    };

    renderCarousel('trending', filtered.trending.length ? filtered.trending : []);
    renderCarousel('movies', filtered.movies.length ? filtered.movies : []);
    renderCarousel('shows', filtered.shows.length ? filtered.shows : []);
}

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        const carousel = document.querySelector('.carousel:hover');
        if (carousel) {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowLeft') {
        const carousel = document.querySelector('.carousel:hover');
        if (carousel) {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }
});
