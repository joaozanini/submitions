function designerPdfViewer(h, word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    const letras = word.split('');
    let greatestHeight = 0;

    for (let i = 0; i < letras.length; i++) {
        const index = letters.indexOf(letras[i]);

        if (index !== -1 && h[index] > greatestHeight) {
            greatestHeight = h[index];
        }
    }
    
    return greatestHeight * letras.length;
}
