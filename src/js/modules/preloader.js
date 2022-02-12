export function preloader() {
  document.body.onload = () => {
    setTimeout(() => {
      const preload = document.getElementById('preloader');
      if (!preload.classList.contains('preloader__done')) {
        preload.classList.add('preloader__done');
      }
    }, 900);
  };
}

export default preloader;
