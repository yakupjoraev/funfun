// Custom scripts


function simpleSelect() {
  const container = document.querySelector('.custom-select');

  if (!container) {
    return null
  }

  // Отображение/скрытие опций при клике на селект
  document.querySelector('.select-selected').addEventListener('click', function () {
    container.classList.toggle('show');
  });

  // // Выбор опции и обновление текста в селекте
  // var selectOptions = document.querySelectorAll('.select-option');
  // for (var i = 0; i < selectOptions.length; i++) {
  //   selectOptions[i].addEventListener('click', function () {
  //     var selectedValue = this.textContent;
  //     document.querySelector('.select-selected').textContent = selectedValue;
  //     document.querySelector('.select-options').classList.remove('show');
  //   });
  // }

  // // Установка первого элемента по умолчанию
  // var firstOption = document.querySelector('.select-option');
  // document.querySelector('.select-selected').textContent = firstOption.textContent;
}

simpleSelect();


function copyReferal() {
  const container = document.querySelector('.referal__link');

  if (!container) {
    return null
  }

  const toolt = document.querySelector('.referal__link-content');
  const text = document.querySelector('.referal__link-text')
  const span = toolt.querySelector('.tlt');


  function showToolTip(e) {
    span.classList.add('show');
    if (e.type == "click") {
      span.innerText = "copied"
      let range = document.createRange();
      range.selectNode(this.querySelector('.referal__link-text'));
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }

  function hideToolTip() {
    span.classList.remove('show');
    span.innerText = "Copt to Clipboard"
  }

  toolt.addEventListener('click', showToolTip)
  toolt.addEventListener('mouseenter', showToolTip)
  toolt.addEventListener('mouseleave', hideToolTip)
}

copyReferal();

AOS.init();