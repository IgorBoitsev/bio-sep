export const calculatorConstructor = () => {

  const accordion = document.querySelector('#accordion'),
        accordionAnchors = accordion.querySelectorAll('[role="button"]'),
        panelCollapse = accordion.querySelectorAll('.panel-collapse'),
        nextMoveBtns = accordion.querySelectorAll('a.construct-btn'),
        firstDrawWell = accordion.querySelector('.first-draw-well'),
        firstDrawWellDiametr = firstDrawWell.querySelectorAll('.form-control')[0],
        firstDrawWellQuantity = firstDrawWell.querySelectorAll('.form-control')[1],
        secondDrawWell = accordion.querySelector('.second-draw-well'),
        secondDrawWellDiametr = secondDrawWell.querySelectorAll('.form-control')[0],
        secondDrawWellQuantity = secondDrawWell.querySelectorAll('.form-control')[1],
        typeOfSeptic = document.querySelector('#myonoffswitch'),
        availabilityOfBottom = accordion.querySelector('#myonoffswitch-two'),
        calcResult = document.querySelector('#calc-result');

  const drawWellSwitch = () => {
    if (typeOfSeptic.checked) {
      secondDrawWell.style.display = 'none';
    } else {
        secondDrawWell.style.display = 'block';
    }
  };

  const countCalcResult = () => {
    let result = 0;

    if (typeOfSeptic.checked) {
      // Если колодец однокамерный
      result = 10000;
      if (firstDrawWellDiametr.value === '2 метра') result *= 1.2;
      if (firstDrawWellQuantity.value === '2 штуки') result *= 1.3;
      if (firstDrawWellQuantity.value === '3 штуки') result *= 1.5;
      if (availabilityOfBottom.checked) result += 1000;
    } else {
        // Если колодец двухкамерный
        result = 15000;
        if (firstDrawWellDiametr.value === '2 метра') result *= 1.2;
        if (firstDrawWellQuantity.value === '2 штуки') result *= 1.3;
        if (firstDrawWellQuantity.value === '3 штуки') result *= 1.5;

        if (secondDrawWellDiametr.value === '2 метра') result *= 1.2;
        if (secondDrawWellQuantity.value === '2 штуки') result *= 1.3;
        if (secondDrawWellQuantity.value === '3 штуки') result *= 1.5;

        if (availabilityOfBottom.checked) result += 2000;
    }

    calcResult.value = result;
  }

  accordionAnchors.forEach(item => {
    item.addEventListener('click', () => {
      panelCollapse.forEach(elem => {
        drawWellSwitch();
        if (item.href.split('#')[1] === elem.id) {
          elem.classList.add('in');
        } else {
            elem.classList.remove('in');
        }
      })
    })
  });

  nextMoveBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      drawWellSwitch();
      panelCollapse[index].classList.remove('in');
      panelCollapse[index + 1].classList.add('in');
    })
  });

  accordion.addEventListener('change', (event) => {
    countCalcResult();
  });

}