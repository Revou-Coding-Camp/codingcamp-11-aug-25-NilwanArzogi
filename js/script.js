document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  document.getElementById("resultBox").innerHTML = `
    <h3>Hasil Input:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});

  feather.replace();

  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  let menuOpen = false;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuOpen = !menuOpen;
    toggle.innerHTML = menuOpen ? '<i data-feather="x"></i>' : '<i data-feather="menu"></i>';
    feather.replace();
  });

  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
  }

  feather.replace();

  const quotes = [
    '"Your journey begins with a cup of coffee."',
    '"Life happens, coffee helps."',
    '"Brewed for those who wander."',
    '"Coffee is the best travel companion."',
    '"Sip, relax, and explore."'
  ];

  let index = 0;
  const quoteElement = document.getElementById("coffee-quote");

  setInterval(() => {
    quoteElement.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % quotes.length;
      quoteElement.textContent = quotes[index];

      quoteElement.style.opacity = 1;
    }, 1000);
  }, 3000);
