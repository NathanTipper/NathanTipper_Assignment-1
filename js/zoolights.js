function galleryFade(x) {
  let children = x.childNodes;
  children[1].style.opacity = 0.5;
}

function fadeBack(x) {
  let children = x.childNodes;
  children[1].style.opacity = 1;
}
