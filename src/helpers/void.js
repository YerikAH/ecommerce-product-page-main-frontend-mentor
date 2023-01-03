export function switchScroll(valueBool) {
  const $html = document.querySelector("html");
  if (valueBool) {
    $html.style.overflow = "hidden";
  } else {
    $html.style.overflowY = "auto";
  }
}
