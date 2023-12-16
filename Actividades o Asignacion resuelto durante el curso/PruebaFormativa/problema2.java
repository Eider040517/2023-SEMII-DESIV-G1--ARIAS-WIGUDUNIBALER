/**
 * problema2
 */
public class problema2 {

  public static void main(String[] arg){
    String palabra = "TENET";
    int lengthPalabra = palabra.length();
    boolean palíndromo = false;
    
    for (int i = 1; i <= lengthPalabra; i++) {
      if (palabra.charAt(i-1) == palabra.charAt(lengthPalabra-i)) {
        palíndromo = true;
      }else{
        palíndromo = false; 
      }
    }
    
    if (palíndromo) {
      System.out.println("La palabra es palíndromo"); 
    } else {
     System.out.println("La palabra no es palíndromo"); 
    }
  }
}
