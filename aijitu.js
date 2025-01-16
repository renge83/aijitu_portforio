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

document.addEventListener("DOMContentLoaded", function() {
    // 固定ヘッダー要素を取得
    const fixed = document.getElementById("menu_btn__content");
    // ウィンドウのスクロールイベントを監視
    window.addEventListener("scroll", function() {
      // スクロール位置が200pxを超えたら
      if (window.scrollY < 850) {
        // 固定ヘッダーにis-showクラスを追加して表示
        fixed.classList.add("is-show");
      } else {
        // スクロール位置が200px以下ならis-showクラスを削除して非表示
        fixed.classList.remove("is-show");
      }
    });
  });