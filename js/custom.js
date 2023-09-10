(function() {
  let btnOpen = document.querySelector('#btn-open');
  let modal = document.querySelector('.modal');
  let contentModal = document.querySelector('.content-modal');
  let btnClose = document.querySelector('#btn-close');
  let body = document.querySelector('body');

  btnOpen.addEventListener("click", function() {
    this.classList.remove("btn-show");
    modal.classList.add("show");
    contentModal.classList.add("show");
    btnClose.classList.add("show");
  });

  btnClose.addEventListener("click", function() {    
    modal.classList.remove("show");
    contentModal.classList.remove("show");
    btnOpen.classList.add("btn-show");
    body.classList.add("show");
  });
})();