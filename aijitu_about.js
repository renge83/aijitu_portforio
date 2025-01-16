const menuBtnContent = document.querySelector(".menu_btn__content");
const overlayBox = document.querySelector(".overlay");
const menuLine = document.querySelector(".menu_line");
const navBtn = document.querySelector(".nav__btn");
const menuBtn = document.querySelector(".menu_btn");

// menuBtnをクリックしたときの処置
menuBtnContent.addEventListener("click", () => {
  // overlayBoxに、クラス「show」を付け外し
  overlayBox.classList.toggle("show");
  // menuLineに、クラス「active」を付け外し
  menuLine.classList.toggle("active");
});
// JavaScript Document
navBtn.addEventListener("click", () => {
  // overlayBoxに、クラス「show」を付け外し
  overlayBox.classList.toggle("show");
  // menuLineに、クラス「active」を付け外し
  menuLine.classList.toggle("active");
});
