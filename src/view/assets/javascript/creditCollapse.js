const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const creditHelp = document.querySelector('#creditHelp');

if (w >= 992) {
  creditHelp.classList.add('show');
}
