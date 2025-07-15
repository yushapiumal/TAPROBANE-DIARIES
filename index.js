  // Hamburger Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Smooth Scrolling
  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth'
          });
          mobileMenu.classList.add('hidden'); // Close mobile menu on click
      });
  });

  // Tour Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update button styles
          filterButtons.forEach(btn => {
              btn.classList.remove('bg-green-600', 'text-white');
              btn.classList.add('bg-gray-200', 'text-gray-800');
          });
          button.classList.remove('bg-gray-200', 'text-gray-800');
          button.classList.add('bg-green-600', 'text-white');

          // Filter tours
          const filter = button.dataset.filter;
          tourCards.forEach(card => {
              if (filter === 'all' || card.dataset.category === filter) {
                  card.classList.remove('hidden');
              } else {
                  card.classList.add('hidden');
              }
          });
      });
  });

  // Inquiry Form Simulation
  const submitInquiry = document.getElementById('submit-inquiry');
  const formMessage = document.getElementById('form-message');
  submitInquiry.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (name && email && message) {
          formMessage.classList.remove('hidden');
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          setTimeout(() => formMessage.classList.add('hidden'), 3000);
      } else {
          alert('Please fill in all fields.');
      }
  });