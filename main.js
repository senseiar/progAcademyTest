function dollarExchanger() {
    let btcPrice = document.getElementById('bitcoinPrice').value;
    let dollarAmnt = document.getElementById('dollars').value;

    return  dollarAmnt / btcPrice; 
};

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    document.getElementById('btcAmount').textContent = dollarExchanger().toFixed(7);
});