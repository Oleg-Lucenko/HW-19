
let linkBtn1 = document.querySelector('.link1');
let linkBtn2 = document.querySelector('.link2');

let dataLink1 = linkBtn1.getAttribute('data-link');
let dataLink2 = linkBtn2.getAttribute('data-link');


linkBtn1.addEventListener('click', () => {
    if (dataLink1.indexOf('http://') != 0 && dataLink1.indexOf('https://' != 0)) {
        window.location.href = 'http://' + dataLink1;
    } else {
        window.location.href = dataLink1;
    }
})

linkBtn2.addEventListener('click', () => {
        if (dataLink2.indexOf('http://') != 0 && dataLink2.indexOf('https://' != 0)) {
            window.location.href = 'http://' + dataLink2;
        } else {
            window.location.href = dataLink2;
        }
    })