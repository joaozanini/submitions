import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String stra=sc.next();
        String strb=sc.next();
        
        System.out.println(stra.length() + strb.length());
        System.out.println((stra.compareTo(strb) > 0) ? "Yes" : "No");
        
        stra = stra.substring(0, 1).toUpperCase() + stra.substring(1);
        strb = strb.substring(0, 1).toUpperCase() + strb.substring(1);
        
        System.out.printf("%s %s\n", stra, strb);
    }
}



