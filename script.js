'use strict';

window.addEventListener('load', init);

const model = [];

function init() {

    let chartContainer = document.querySelector('.chartContainer');

    for (let i = 0; i < 40; i++) {
        let chartBar = document.createElement('div');
        chartBar.classList.add('bar');
        chartContainer.appendChild(chartBar);
    }

    loop();
}

function loop() {
    displayData();
    modifyModel();
    setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

function displayData() {
    let chartContainer = document.querySelector('.chartContainer');
    let firstBar = document.querySelector('.bar');
    firstBar.remove(0);

    // reate new element and append
    let chartBar = document.createElement('div');
    chartBar.classList.add('bar');
    chartBar.style.height = (model[model.length - 1] * 100) / 32 + '%';
    chartContainer.appendChild(chartBar);

}

function modifyModel() {
    if (model.length < 40) {
        model.push(getNumberOfCustomers());
    } else {
        model.shift(0);
        model.push(getNumberOfCustomers());
    }
}