var btc=document.getElementById("bitcoin")
var eth=document.getElementById("ethereum")
var dgc=document.getElementById("dogecoin")

var setting={
    "async":true,
    "scrossDomain":true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin&names=Bitcoin&symbols=btc',
    "methods":"GET",
    "hearders":{}

}
$.ajax(setting).done(function (response) {
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    dgc.innerHTML=response.dogecoin.usd;
});
