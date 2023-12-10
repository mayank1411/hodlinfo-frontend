
        let countdown = 60;
        let darkMode = false;

        function updateCountdown() {
            document.getElementById('timer').innerText = countdown;
            if (countdown === 0) {
                clearInterval(timerInterval);
            } else {
                countdown--;
            }
        }

        let timerInterval = setInterval(updateCountdown, 1000);

        function updateSlider() {
            countdown = parseInt(document.getElementById('slider').value);
            document.getElementById('timer').innerText = countdown;
        }

        let slider = document.getElementById('slider');
        slider.addEventListener('input', updateSlider);

        function toggleDarkMode() {
            darkMode = !darkMode;
            const body = document.body;
            body.style.backgroundColor = darkMode ? '#222' : '#f8f9fa'; // Dark mode background color
            body.style.color = darkMode ? '#f8f9fa' : '#0c0f48'; // Dark mode text color
        }
    
        
        function changeCrypto(crypto) {
            document.getElementById('cryptoButton').innerText = crypto;
            document.getElementById('actionButton').innerText = 'Buy ' + crypto;
        }

 
        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
