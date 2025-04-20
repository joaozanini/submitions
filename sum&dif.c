#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	int val1, val2;
    float flo1, flo2;
    
    scanf("%d%d", &val1, &val2);
    scanf("%f%f", &flo1, &flo2);
    
    printf("%d %d\n", val1 + val2, val1 - val2);
    printf("%.1f %.1f", flo1 + flo2, flo1 - flo2);
    
    return 0;
}
