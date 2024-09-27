function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    
    var pagamento = 0
    for (let i = 0; i < bill.length; i++){
        pagamento += bill[i];
    }
    pagamento = pagamento/2
    
    if (pagamento == b) {
        // return 'Bon Appetit'
        console.log('Bon Appetit')
    } else {
        // return pagamento - b
        console.log(b - pagamento)
    }
}