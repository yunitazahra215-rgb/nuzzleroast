// Update waktu real-time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleDateString('id-ID', options);
    document.getElementById('timeDisplay').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Modal untuk galeri
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.getAttribute('data-src');
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Formulir pemesanan
const orderForm = document.getElementById('orderForm');
const orderItems = document.getElementById('orderItems');
const orderSummary = document.getElementById('orderSummary');
const orderTotal = document.getElementById('orderTotal');

function updateOrderSummary() {
    const selectedOptions = Array.from(orderItems.selectedOptions);
    let total = 0;
    let summaryHTML = '';
    
    if (selectedOptions.length === 0) {
        summaryHTML = '<p>Pilih menu untuk melihat ringkasan</p>';
    } else {
        selectedOptions.forEach(option => {
            const price = parseInt(option.getAttribute('data-price'));
            total += price;
            summaryHTML += `
                <div class="order-item">
                    <span>${option.value}</span>
                    <span>Rp ${price.toLocaleString('id-ID')}</span>
                </div>
            `;
        });
    }
    
    orderSummary.innerHTML = summaryHTML;
    orderTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

orderItems.addEventListener('change', updateOrderSummary);

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulasi pengiriman pesanan
    const notification = document.getElementById('notification');
    notification.textContent = 'Pesanan berhasil dikirim!';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    // Reset form
    orderForm.reset();
    updateOrderSummary();
});

// Tombol pesan di menu
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = this.getAttribute('data-price');
        
        // Scroll ke formulir pemesanan
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
        
        // Pilih item di dropdown
        const options = Array.from(orderItems.options);
        const optionIndex = options.findIndex(option => option.value === itemName);
        
        if (optionIndex !== -1) {
            orderItems.options[optionIndex].selected = true;
            updateOrderSummary();
        }
    });
});

// Form kontak
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulasi pengiriman pesan
    const notification = document.getElementById('notification');
    notification.textContent = 'Pesan berhasil dikirim!';
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    // Reset form
    this.reset();
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observ elemen yang perlu animasi
document.querySelectorAll('.menu-item, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.backgroundColor = 'rgba(245, 245, 220, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.padding = '1rem';
    nav.style.gap = '1rem';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            nav.style.display = 'none';
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
        nav.style.backgroundColor = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '0';
    } else {
        nav.style.display = 'none';
    }
});
