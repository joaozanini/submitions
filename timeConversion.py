def timeConversion(s):
    value = s[0:2]
    period = s[-2:]
    
    if period == "AM":
        if value == "12":
            value = "00"
    else:  # PM
        if value != "12":
            value = str(int(value) + 12)
    
    return value + s[2:8]
