// Basic placeholder to swap content when menu links are clicked
const links = document.querySelectorAll('nav a[data-section]');
const content = document.getElementById('content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    content.textContent = `Selected section: ${section}`;
  });
});
