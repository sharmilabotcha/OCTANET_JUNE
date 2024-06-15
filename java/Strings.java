public class Strings {
    public static void main(String[] args) {
        int [] arr = {2,23,3,5,6};
        
        String name = "kunal";
      //  System.out.println(name);
      String a = "kunal";
      String b = "kunal";
      System.out.println(a == b);
     String name1 = new String("kunal");
     String name2 = new String("kunal");
     //System.out.println(name1 == name2);
     System.out.println(name1.equals(name2));
    }
}
