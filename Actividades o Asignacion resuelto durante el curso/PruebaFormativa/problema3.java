/**
 * problema3
 */
public class problema3 {

  public static void main(String[] arg){
    int numero = 5, factorial = 1;
    int suma = 0;

    for (int i = 1; i <= numero; i++) {
      factorial = factorial*(i); 
    }

    
    String stringFactorial = Integer.toString(factorial);
    int lengthFactorial = stringFactorial.length();

    for (int i = 0; i < lengthFactorial; i++) {
     suma = suma + Character.getNumericValue(stringFactorial.charAt(i)); 
      System.out.println(stringFactorial.charAt(i));
    }

    System.out.println(suma);
  }
  
}
