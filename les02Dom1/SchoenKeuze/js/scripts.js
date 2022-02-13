const frm = document.querySelector('#frmOrder');
const inpEmail = document.querySelector('#inpEmail #msgEmail')
const selMeasure = document.querySelector('#selMeasure msgMeasure')
const msgEmail = frm.querySelector('#inpEmail #msgEmail')
const selMeasure = frm.querySelector('#selMeasure #msgMeasure')

frm.setAttribute('novalidate', 'novalidate');

frm.addEventListener('submit', function(e) {
    e.preventDefault();
    let numErrors = 0;

    msgEmail.innerHTML = '';
    msgMeasure.innerHTML = '';

    if (!/^[a-zA-Z0-9@_]+$/.test(inpEmail.value == '')) {
        msgEmail.innerHTML = 'email mag niet leeg zijn';
        numErrors++;
    }
    if (numErrors == 0) {
        frm.submit();
    }

    if (selMeasure.value == 'selecteer...') {
        msgMeasure.innerHTML = 'selecteer een maat';
        numErrors++;
    }
    if (numErrors == 0) {
        frm.submit();
    }

    if (numErrors == 0) {
        lblMessage.innerHTML = `Het formulier is correct ingevuld`;
     }
});

const modelLinks = document.querySelectorAll('#model a');
const figShoe = document.querySelector('#figShoe');
const imgShoe = figShoe.querySelector('img')
const captShoe = figShoe.querySelector('figcaption')

thumbLinks.forEach(lnk => {
    lnk.addEventListener('click', function(e) {
        e.preventDefault();
        imgShoe.src = lnk.href; 
        captShoe.innerHTML = lnk.querySelector('img').alt;
        document.querySelector('#model .selected').classList.remove('selected');
        lnk.classList.add('selected');
    });
});