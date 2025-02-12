import java.util.*;
import java.io.*;

class Main {

  public static String StringChallenge(String str) {
    String[] splitStr = str.split("");
    return String.join(",", splitStr);
  }

  public static void main (String[] args) {  
    Scanner s = new Scanner(System.in);
    System.out.print(StringChallenge(s.nextLine())); 
  }
}
