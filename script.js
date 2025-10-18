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
        minute: '2-digit'
    };
    const timeString = now.toLocaleDateString('id-ID', options);
    const timeElements = document.querySelectorAll('.time-display');
    timeElements.forEach(element => {
        element.textContent = timeString;
    });
}

// Update waktu setiap menit
setInterval(updateTime, 60000);
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

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

function openMobileMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Animasi scroll untuk menu navigasi
document.querySelectorAll('nav a, .mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            closeMobileMenu();
        }
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

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    // Trigger scroll event to set initial header state
    window.dispatchEvent(new Event('scroll'));
    
    // Set initial state for mobile menu
    if (window.innerWidth <= 768) {
        document.querySelector('nav ul').style.display = 'none';
    }
});

// Tambahkan event listener untuk tombol "Lihat Menu" di hero section
document.querySelector('.hero-buttons .cta-button.primary').addEventListener('click', function() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        window.scrollTo({
            top: menuSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
});

// Tambahkan event listener untuk tombol "Kunjungi Kami" di hero section
document.querySelector('.hero-buttons .cta-button:not(.primary)').addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
});
