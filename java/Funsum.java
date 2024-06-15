import java.util.Scanner;

public class Funsum {
    public static void main(String[] args){
    //sum();
    int ans = sum2(20,40);
    System.out.println(ans);
    }

    static void sum(){
        Scanner input  = new Scanner (System.in);
        System.out.println("enter num1");
        int num1= input.nextInt();
        System.out.println("enter num2");
        int num2 = input.nextInt();
        int sum = num1+num2;
        System.out.println("sum = " +sum);
        
    }
    static int sum2(int a,int b){
        int sum2 = a+b;
        return sum2;

    }

}