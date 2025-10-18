      // script.js untuk animasi dan interaktivitas Nuzzle Roast

// Fungsi untuk menampilkan waktu real-time
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

// Update waktu setiap detik
setInterval(updateTime, 1000);
updateTime(); // Panggil sekali saat halaman dimuat

// Efek scroll header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animasi scroll untuk menu navigasi
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

// Animasi untuk elemen menu saat scroll
function animateOnScroll() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100) {
            item.style.animationPlayState = 'running';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission handling
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
    // Untuk saat ini, kita hanya akan menampilkan alert
    alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda di ${email} segera.`);
    
    // Reset form
    this.reset();
});

// Efek hover untuk tombol pesan
document.querySelectorAll('.order-btn, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    });
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
    nav.style.width = '100%';
    nav.style.backgroundColor = 'rgba(245, 245, 220, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.padding = '1rem 0';
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
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
        nav.style.boxShadow = 'none';
    } else {
        nav.style.display = 'none';
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    // Trigger scroll event to set initial header state
    window.dispatchEvent(new Event('scroll'));
    
    // Set initial display for mobile menu
    if (window.innerWidth <= 768) {
        nav.style.display = 'none';
    }
});