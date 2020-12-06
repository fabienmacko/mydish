export default () => {
  // Fade out the loader when the app has been loaded
  var loader: HTMLElement = document.getElementById("loader")!;
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.remove();
    }, 400);
  }
}