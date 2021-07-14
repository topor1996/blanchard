"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var filterContainer, filterElement, selectElement, filterSelected, filterList, filterItem;
  var iFilterElement, iFilterItem;
  var lFilterElement, lSelectElement;
  filterContainer = 'gallery__filter'; // look for any elements with the class 'gallery__filter':

  filterElement = document.getElementsByClassName(filterContainer);
  lFilterElement = filterElement.length;

  for (iFilterElement = 0; iFilterElement < lFilterElement; iFilterElement++) {
    selectElement = filterElement[iFilterElement].getElementsByTagName('select')[0];
    lSelectElement = selectElement.length; // for each element, create a new DIV that will act as the selected item:

    filterSelected = document.createElement('DIV');
    filterSelected.classList.add('filter__selected');
    filterSelected.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    filterElement[iFilterElement].appendChild(filterSelected); // for each element, create a new DIV that will contain the option list:

    filterList = document.createElement('UL');
    filterList.classList.add('filter__list');
    filterList.classList.add('filter__list--hidden');

    for (iFilterItem = 0; iFilterItem < lSelectElement; iFilterItem++) {
      // for each option in the original select element,
      // create a new DIV that will act as an option item:
      filterItem = document.createElement('LI');
      filterItem.classList.add('filter__item'); // set 'filter__item--selected' class for the first element in the list:

      if (iFilterItem == 0) {
        filterItem.classList.add('filter__item--selected');
      }

      filterItem.innerHTML = selectElement.options[iFilterItem].innerHTML;
      filterItem.addEventListener('click', function (e) {
        var y, i, k, selectElement, h, lSelectElement, yl; // when an item is clicked,
        // update the original select box, and the selected item:

        selectElement = this.parentNode.parentNode.getElementsByTagName('select')[0];
        lSelectElement = selectElement.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < lSelectElement; i++) {
          if (selectElement.options[i].innerHTML == this.innerHTML) {
            selectElement.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('filter__item--selected');
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].classList.remove('filter__item--selected');
            }

            this.setAttribute('class', 'filter__item filter__item--selected');
            break;
          }
        }

        h.click();
      });
      filterList.appendChild(filterItem);
    }

    filterElement[iFilterElement].appendChild(filterList);
    filterSelected.addEventListener('click', function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('filter__list--hidden'); // this.classList.toggle('filter__icon--active');

      document.querySelector('.filter__icon').classList.toggle('filter__icon--active');
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName('filter__list');
    y = document.getElementsByClassName('filter__selected');
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        // y[i].classList.remove('filter__icon--active');
        document.querySelector('.filter__icon').classList.remove('filter__icon--active');
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('filter__list--hidden');
      }
    }
  }
  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */


  document.addEventListener('click', closeAllSelect);
});