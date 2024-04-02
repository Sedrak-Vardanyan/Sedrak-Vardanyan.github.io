    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var draggedElement = document.getElementById(data);
        var targetElement = ev.target;

        // Проверяем, что переносимый элемент - внутри внешнего div
        if (targetElement.classList.contains("outerDiv")) {
            // Проверяем, если внешний div пуст
            if (targetElement.children.length === 0) {
                // Создаем клон перетаскиваемого элемента
                var clonedElement = draggedElement.cloneNode(true);
                // Добавляем клонированный элемент в целевой внешний div
                targetElement.appendChild(clonedElement);
                // Убираем атрибут id, чтобы предотвратить конфликты
                clonedElement.removeAttribute("id");
            } else {
                // Если внешний div не пуст, добавляем новый клон рядом с существующим
                var clonedElement = draggedElement.cloneNode(true);
                targetElement.parentElement.appendChild(clonedElement);
            }
        }
    }
     // Функция для изменения фонового изображения при двойном щелчке
    function changeImage(event) {
        var target = event.target;
        // Проверяем, является ли целевой элемент innerDiv
        if (target.classList.contains("innerDiv") || target.classList.contains("innerDiv2") || target.classList.contains("innerDiv3") || target.classList.contains("innerDiv4") || target.classList.contains("innerDiv5") || target.classList.contains("innerDiv6") || target.classList.contains("innerDiv7") || target.classList.contains("innerDiv8")) {
            // Проверяем, что родитель целевого элемента - outerDiv
            if (target.parentElement.classList.contains("outerDiv")) {
                // Здесь можно добавить код для выбора нового изображения, например, из массива или с помощью диалогового окна
                var newImage = 'url("../Jpeg/PlayesCard.jpg")';
                // Изменяем фоновое изображение целевого элемента
                target.style.backgroundImage = newImage;
            }
        }
    }

    // Добавляем обработчик для изменения фонового изображения при двойном щелчке
    document.addEventListener('dblclick', changeImage);

