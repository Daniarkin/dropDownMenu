const menuHierarchy = {
  HTML: {
    'HTML': '#html',
    'Теги': '#tags',
    'Атрибуты': '#attrs',
    'Классы': '#css_classes',
    'Идентификаторы': '#ids',
  },
  CSS: {
    'CSS': '#css',
    'Селекторы': '#selectors',
    'Отступы': '#abc',
    'Шрифты': '#typographics',
    'Цвета': '#color',
  },
  JS: {
    'JS': '#js',
    'Типы данных': '#JStypes',
    'Функции': '#functions',
    'Объекты': '#obj',
    'Массивы': '#massives',
  },
  NodeJS: {
    'NodeJS': '#nodejs',
    'Модули': '#modules',
    'Сервер': '#servers',
    'API': '#api',
    'Потоки': '#potok',
  },
  JSON: {
    'JSON': '#json',
    'Типы': '#types',
    'Синтаксис': '#sintacsis',
    'Конвертация': '#convertors',
  },
}

renderMenu()


function renderMenu() {
  let html = ''

  for (const key in menuHierarchy) {
    html += `<li class="header__nav-item">`

    for (const item in menuHierarchy[key]) {
      if (item === key) {
        html += `<a href="${menuHierarchy[key][key]}" class="header__nav-label">${key}</a>
          <ul class="header__nav-sublist">`
      } else {
        html += `<li class="header__nav-subitem">
          <a href="${menuHierarchy[key][item]}" class="header__nav-sublabel">${item}</a>
        </li>`
      }
    }

    html += `</ul></li>`
  }

  document.querySelector('.header__nav-list').innerHTML = html
}
