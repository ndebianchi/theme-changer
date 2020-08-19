
const setTheme = (nome) => {
    localStorage.setItem('tema', nome);
    document.documentElement.className = nome;
}

// IIFE pra setar o tema
(() => {
   if (localStorage.getItem('tema') === 'tema3') {
       setTheme('tema3');
   } else if (localStorage.getItem('tema') === 'tema2') {
       setTheme('tema2');
   } else {
       setTheme('tema1');
   }
})();