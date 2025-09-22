const scriptURL = 'https://script.google.com/macros/s/AKfycbzBhP09GqGJ22lkaCaGtz9hiHhEBZC4Rqekri0XqnQRrUGQfxlE2chNtCShUb9PBhA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      form.reset(); // Добавлено: очистит поле ввода после отправки
    })
    .catch(error => console.error('Error!', error.message))
});
