export const showPopups = () => {

  const callBtns = document.querySelectorAll('.call-btn'),
        btns = document.querySelectorAll('.button'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation');

  callBtns.forEach(item => {
    item.addEventListener('click', () => {
      popupCall.style.display = 'block';

      popupCall.addEventListener('click', (event) => {
        if (event.target.closest('.popup-close') || event.target.closest('.popup')) {
          popupCall.style.display = 'none';
        }
      })
    })
  });

  btns.forEach(item => {
    item.addEventListener('click', (event) => {
      let popupWindow = '';

      if(event.target.classList.contains('construct-btn') ||
         event.target.classList.contains('discount-btn')) {
        popupWindow = popupDiscount;
        popupDiscount.style.display = 'block';
      };
      if(event.target.classList.contains('check-btn')) {
        popupWindow = popupCheck;
        popupCheck.style.display = 'block';
      };
      if(event.target.classList.contains('consultation-btn')) {
        popupWindow = popupConsultation;
        popupConsultation.style.display = 'block';
      };

      popupWindow.addEventListener('click', (event) => {
        if (event.target.closest('.popup-close') || event.target.closest('.popup')) {
          popupWindow.style.display = 'none';
        }
      })
    })
  })

};