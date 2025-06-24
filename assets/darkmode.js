document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.createElement('button');
  toggle.innerText = "🌙 Toggle Dark Mode";
  toggle.style.position = 'fixed';
  toggle.style.top = '10px';
  toggle.style.right = '10px';
  toggle.style.zIndex = '9999';
  toggle.style.padding = '10px';
  toggle.style.borderRadius = '5px';
  toggle.style.border = 'none';
  toggle.style.backgroundColor = '#333';
  toggle.style.color = '#fff';
  toggle.style.cursor = 'pointer';

  toggle.onclick = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  };

  document.body.appendChild(toggle);

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});
