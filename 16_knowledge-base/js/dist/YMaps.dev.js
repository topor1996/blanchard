"use strict";

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("#map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 18
  }); // Создание геообъекта с типом точка (метка).

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки

    }
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/metka.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  }); // Размещение геообъекта на карте.

  myMap.geoObjects.add(myPlacemark);
}