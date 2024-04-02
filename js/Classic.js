 // Создаем массив с буквами карт
 const cardLetters = ['../svg/Red', '../svg/Red', '../svg/Red', '../svg/Red', '../svg/Red', '../svg/Red', '../svg/Sherif', '../svg/Don', '../svg/Mafia', '../svg/Mafia'];

 // Перемешиваем массив
 const shuffledCards = shuffleArray(cardLetters);
 
 // Функция переворачивания карты по клику
  function flipCard(cardElement) {
 cardElement.classList.toggle('flipped');
  }
 
 // Создаем HTML элементы для каждой карты и добавляем их на страницу
 const cardsContainer = document.getElementById('cards-container');
 shuffledCards.forEach(letter => {
   const cardElement = document.createElement('div');
   cardElement.classList.add('card', letter);
   cardElement.addEventListener('click', () => {
 flipCard(cardElement);   // Добавляем прослушиватель событий к каждой карточке для вызова функции FlipCard
   revealAndRemoveCard(cardElement, letter);
   playClickSound(); // Воспроизвести звук щелчка при щелчке карты
   });
   cardsContainer.appendChild(cardElement);
   });
 
 // Функция для открытия карты и удаления из списка
 function revealAndRemoveCard(cardElement, letter) {
   cardElement.style.backgroundImage = `url('${letter}.svg')`;
   setTimeout(() => {
     cardsContainer.removeChild(cardElement);
     // После удаления всех карт, переход на следующую страницу через 5 секунд
     if (cardsContainer.children.length === 0) {
       setTimeout(() => {
         window.location.href = 'index_1.html'; // переход на следующую страницу
       }, 1000);
     }		
   }, 3000); // Можете изменить задержку по вашему усмотрению
 }
 
 // Функция для перемешивания массива
 function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
 }
 
 // Функция для воспроизведения звука при клике
 function playClickSound() {
   const clickSound = document.getElementById('clickSound');
   clickSound.play();
 }
 