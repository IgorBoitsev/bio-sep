export const showSales = () => {

  const sentence = document.querySelector('.sentence'),
        row = sentence.querySelector('.row'),
        saleDivs = row.querySelectorAll('.col-xs-12'),
        addSentenceBtn = sentence.querySelector('.add-sentence-btn');

  addSentenceBtn.addEventListener('click', () => {
    addSentenceBtn.remove();
    saleDivs.forEach(item => {
      item.classList.remove('hidden');
    })
  })
}