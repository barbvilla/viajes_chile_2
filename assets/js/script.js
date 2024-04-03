const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    navEl.classList.remove('bg-transparent');
    navEl.classList.add('bg-black');
  } else {
    navEl.classList.remove('bg-black');
    navEl.classList.add('bg-transparent')
  }
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Tu mensaje ha sido enviado con exito!', 'success')
  })
}