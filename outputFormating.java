import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();
                
            String spacing = " ".repeat(15 - s1.length());
            String val =  String.valueOf(x);
            if (val.length() == 2) {
                String value = "0" + val;
                System.out.println(s1 + spacing + value);
            } else if (val.length() == 1) {
                String value = "00" + val;
                System.out.println(s1 + spacing + value);
            } else {
                System.out.println(s1 + spacing + val);
            }
            
        }
        System.out.println("================================");
    }
}
