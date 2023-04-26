// Instance Objects
clickFarming = new Click();
grandMaFarming = new GrandMa();
farmFarming = new Farm();


// document.querySelector('#army-click .stats').append("JS must add here : numberClick, inProdCookiesClick, inProdAllCookiesClick, productedCookiesByClick");
// document.querySelector('#army-grandma .stats').append("JS must add here : numberGMa, inProdCookiesGMa, inProdAllCookiesGMa, productedCookiesByGMa");
// document.querySelector('#army-farm .stats').append("JS must add here : numberFarm, inProdCookiesFarm, inProdAllCookiesFarm, productedCookiesByFarm");
// setInterval(function() { for(let i=0; i<10000; i++){}},100);

setInterval(function() {
    document.querySelector('#army-click .stats').innerHTML= "";
    document.querySelector('#army-click .stats').append(`Number : ${clickFarming.number}`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`Each click produces ${clickFarming.inProdCookies} per second`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`${clickFarming.number} clicks produce ${clickFarming.inAllProdCookies} per second`);
    document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-click .stats').append(`${clickFarming.productedCookies} clicked so far`);

    document.querySelector('#army-grandma .stats').innerHTML= "";
    document.querySelector('#army-grandma .stats').append(`Number : ${grandMaFarming.number}`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`Each grand-mother produces ${grandMaFarming.inProdCookies} per second`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`${grandMaFarming.number} grand-mother produce ${grandMaFarming.inAllProdCookies} per second`);
    document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-grandma .stats').append(`${grandMaFarming.productedCookies} cooked so far`);

    document.querySelector('#army-farm .stats').innerHTML= "";
    document.querySelector('#army-farm .stats').append(`Number : ${farmFarming.number}`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`Each farm produces ${farmFarming.inProdCookies} per second`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`${farmFarming.number} farms produce ${farmFarming.inAllProdCookies} per second`);
    document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
    document.querySelector('#army-farm .stats').append(`${farmFarming.productedCookies} farmed so far`);

    clickFarming.buy();
    grandMaFarming.buy();
    farmFarming.buy();
},1000);
// document.querySelector('#army-click .stats').innerHTML= "";
// document.querySelector('#army-click .stats').append(`Number : ${clickFarming.number}`);
// document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
// document.querySelector('#army-click .stats').append(`Each click produces ${clickFarming.inProdCookies} per second`);
// document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
// document.querySelector('#army-click .stats').append(`${clickFarming.number} clicks produce ${clickFarming.inAllProdCookies} per second`);
// document.querySelector('#army-click .stats').insertAdjacentHTML('beforeend','<br>');
// document.querySelector('#army-click .stats').append(`${clickFarming.productedCookies} clicked so far`);

// document.querySelector('#army-grandma .stats').append(`NUMBER : ${grandMaFarming.number}`);
// document.querySelector('#army-grandma .stats').insertAdjacentHTML('beforeend','<br>');
// document.querySelector('#army-grandma .stats').append(`PRICE : ${grandMaFarming.price}`);

// document.querySelector('#army-farm .stats').append(`NUMBER : ${farmFarming.number}`);
// document.querySelector('#army-farm .stats').insertAdjacentHTML('beforeend','<br>');
// document.querySelector('#army-farm .stats').append(`PRICE : ${farmFarming.price}`);


