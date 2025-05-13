document.getElementById('toggleMenu')?.addEventListener('click', () => {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
});

document.getElementById('filterInput')?.addEventListener('keyup', function () {
  const filter = this.value.toLowerCase();
  const posts = document.querySelectorAll('#postList article');
  posts.forEach(post => {
    const title = post.querySelector('h4').textContent.toLowerCase();
    post.style.display = title.includes(filter) ? 'block' : 'none';
  });
});

// Contact's submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});