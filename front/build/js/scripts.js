// Custom Scripts
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



AOS.init();
