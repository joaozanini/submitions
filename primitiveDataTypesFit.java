import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = Integer.parseInt(scanner.nextLine());

        while (t-- > 0) {
            String input = scanner.nextLine();
            try {
                long x = Long.parseLong(input);
                System.out.println(input + " can be fitted in:");
                if (x >= Byte.MIN_VALUE && x <= Byte.MAX_VALUE)
                    System.out.println("* byte");
                if (x >= Short.MIN_VALUE && x <= Short.MAX_VALUE)
                    System.out.println("* short");
                if (x >= Integer.MIN_VALUE && x <= Integer.MAX_VALUE)
                    System.out.println("* int");
                System.out.println("* long");
            } catch (Exception e) {
                System.out.println(input + " can't be fitted anywhere.");
            }
        }
        scanner.close();
    }
}
