function camelcase(s) {
    if (s.length === 0) return s;
    let indices = [];
    let letters = s.split('');

    for (let i = 0; i < letters.length; i++) {
        if (/[A-Z]/.test(letters[i])) {
            indices.push(i);
        }
    }
    
    let newStr = '';
    let lastIndex = 0;

    for (let i = 0; i < indices.length; i++) {
        newStr += s.slice(lastIndex, indices[i]) + ' ';
        lastIndex = indices[i];
    }

    newStr += s.slice(lastIndex);
    newStr = newStr.split(' ').length;
    return newStr;
}
