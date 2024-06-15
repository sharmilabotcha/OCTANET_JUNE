

public class WiproMultiply {
    
        public static void main(String[] args) {
            
                       
           int input1 = 3521;
           int input2 = 2452;
           String input3 = "1352";
           int hundred = findHundredsDigit(input1);
           int tens = findTensDigit(input2);
           int large = Largestd(input3);
          int key = (hundred*tens)*large;
          System.out.println(key);
        }
        public static int findHundredsDigit(int input) {
    
            int lastThreeDigits = input % 1000;
    
            int hundredsDigit = lastThreeDigits / 100;
    
            return hundredsDigit;
        }
        public static int findTensDigit(int input) {
           
            int lastTwoDigits = input % 100;
            int tensDigit = lastTwoDigits / 10;
              return tensDigit;
        }
        static int Largestd(String input){
            int largest = -1;
            for (char ch : input.toCharArray()) {
             if (Character.isDigit(ch)) {
                 int digit = Character.getNumericValue(ch);
                 if (digit > largest) {
                     largest = digit;
                 }
             }
         }
         return largest;
     }

    }