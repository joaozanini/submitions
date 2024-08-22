def swap_case(s):
    letras = list(s)
    for c in range(len(letras)):
        if letras[c].islower():
            letras[c] = letras[c].upper()
        else:
            letras[c] = letras[c].lower()
    return ''.join(letras)
