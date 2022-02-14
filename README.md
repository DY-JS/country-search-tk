Create a React app to get and display a list of countries.

1. At the beginning of the page, place the search field and the search reset button

2. Below is a list of country cards, which is formed when the user starts entering text in the search field (the list is updated after the search field is changed).

3. Card elements:
   text on the card: country name and country code;
   on the card, when you hover, two active elements appear: a checkbox and a delete button;
   if you click on the checkbox, then this card will become linked and will not be deleted when the search criteria (reset) is changed. After changing the search criteria, the linked countries remain at the top of the list and are not deleted;
   when you click on the delete button, the card is removed from the list.

4. Clicking on the card will take you to the country details page. After reloading the details page - it should not be empty:
   next to the name of the country there should be an icon associated with this country or not (pass the state through Redux)

Additional task
!5. You can change the order of cards by dragging (drag-and-drop)

Requirements

1. Use functional components and React Hooks
2. To implement elements use
   MaterialUI
   Styled Components
3. To manage global state - redux
4. To get the list, you can use any library or API-services, as an alternative to https://restcountries.eu/
5. To navigate react-router-dom
6. Don't use LocalStorage

---

Создать React приложение для получения и отображения списка стран.

1. В начале страницы расположить поле поиска и кнопку сброса поиска

2. Ниже — список карточек стран, который формируется, когда пользователь начинает вводить текст в поле поиска (список обновляется после изменения поля поиска).

3. Элементы карточки:
   текст на карточке: название страны и код страны;
   на карточке, при наведении, появляются два активных элемента: чекбокс и кнопка удаления;
   если нажать на чекбокс, то эта карточка становиться привязанной и при изменении критериев поиска(сброса) удаляться не будет. После изменения критериев поиска привязанные страны остаются в начале списка и не удаляются;
   при нажатии на кнопку удаления, карточка удаляется из списка.

4. По клику по карточке осуществляется переход на страницу деталей страны. После перезагрузки страницы деталей - она не должна быть пустой:
   рядом с названием страны должна быть иконка привязана эта страна или нет (передать состояние через Redux)

Доп задание
!5. Можно изменять порядок карточек перетягиванием (drag-and-drop)

Требования

1. Использовать функциональные компоненты и React Hooks
2. Для реализации элементов использовать
   MaterialUI
   Styled Components
3. Для управления глобальным состоянием - redux
4. Для получения списка можно использовать любую библиотеку или API-services, как альтернатива https://restcountries.eu/
5. Для навигации react-router-dom
6. Не использовать LocalStorage
7. Задание выполнить в ветке develop и создать merge request в main
