/**
 * problema1
 */
public class problema1 {

  public static void main(String arg[]){
    int number1 = 1,number2 = 1;
    int suma = 0, numberSig = 0;

    for (int i = 0; i < 10;) {
      if (number1 % 2 != 0 ) {
        suma = suma + number1;
        i++;
      }

      numberSig = number1 + number2;
      number1 = number2;
      number2 = numberSig;
    }

    System.out.println("Suma : " + suma);

  }
  
}
