// Dashboard JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }
    
    // Navigation link active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.parentElement.classList.add('active');
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            // Here you would implement actual search functionality
            console.log('Searching for:', searchTerm);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase();
                // Handle search submission
                console.log('Search submitted:', searchTerm);
                // You could trigger a search modal or navigate to search results
            }
        });
    }
    
    // Notifications dropdown (placeholder)
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', function() {
            // Here you would implement notification dropdown
            console.log('Notifications clicked');
            // You could show a dropdown with notifications
        });
    }
    
    // User profile dropdown (placeholder)
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            // Here you would implement user profile dropdown
            console.log('User profile clicked');
            // You could show a dropdown with user options
        });
    }
    
    // Animate numbers in stat cards
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(element => {
            const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Format the number based on original content
                const originalText = element.textContent;
                if (originalText.includes('$')) {
                    element.textContent = '$' + Math.floor(current).toLocaleString();
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        });
    }
    
    // Start number animation after a short delay
    setTimeout(animateNumbers, 500);
    
    // Widget refresh functionality
    const widgetActions = document.querySelectorAll('.widget-actions button');
    widgetActions.forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            this.style.opacity = '0.5';
            this.style.pointerEvents = 'none';
            
            // Simulate data refresh
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
                console.log('Widget refreshed');
            }, 1000);
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.stat-card, .widget, .chart-container');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Real-time updates simulation
    function simulateRealTimeUpdates() {
        const activityList = document.querySelector('.activity-list');
        if (activityList) {
            // This would be replaced with real WebSocket or API polling
            setInterval(() => {
                // Simulate new activity
                console.log('Checking for new activity...');
                // You could add new activity items here
            }, 30000); // Check every 30 seconds
        }
    }
    
    simulateRealTimeUpdates();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // CMD/Ctrl + K for search focus
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to close mobile menu
        if (e.key === 'Escape') {
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });
    
    // Window resize handler
    function handleResize() {
        if (window.innerWidth > 768) {
            // Remove open class on desktop
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initialize tooltips (if you want to add tooltip library later)
    function initializeTooltips() {
        // Placeholder for tooltip initialization
        // You could integrate libraries like Tippy.js or create custom tooltips
    }
    
    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Dark mode toggle (optional feature for future)
    function initializeDarkMode() {
        // Check if user has dark mode preference
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        // You could implement dark mode functionality here
    }
    
    // Add loading states for async operations
    function showLoading(element) {
        element.style.opacity = '0.5';
        element.style.pointerEvents = 'none';
    }
    
    function hideLoading(element) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
    
    // Utility functions for future API integration
    const Utils = {
        formatCurrency: (amount) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(amount);
        },
        
        formatNumber: (number) => {
            return new Intl.NumberFormat('en-US').format(number);
        },
        
        formatDate: (date) => {
            return new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date(date));
        },
        
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };
    
    // Make Utils available globally for future use
    window.DashboardUtils = Utils;
    
    console.log('Dashboard initialized successfully');
});