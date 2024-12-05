
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const toggleButton = document.querySelector('.dark-mode-toggle');
            if (document.body.classList.contains('dark-mode')) {
                toggleButton.textContent = '🌙';
            } else {
                toggleButton.textContent = '☀️';
            }
        }
       
