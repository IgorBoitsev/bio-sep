export const accordeon = () => {
  const accordionTwo = document.querySelector('#accordion-two'),
        accordionTwoAnchors = accordionTwo.querySelectorAll('a'),
        panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

  accordionTwoAnchors.forEach((item) => {
    item.addEventListener('click', () => {
      panelCollapse.forEach(elem => {
        if (elem.id === item.href.split('#')[1]) {
          elem.classList.add('in');
        } else {
            elem.classList.remove('in');
        }
      })
    })
  })
}