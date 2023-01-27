import java.util.ArrayList;

public class Individual3_AllInRange {
    public static void main(String[] args) {
        
    }
    public static ArrayList<Integer> inRange(ArrayList<Integer> values, int num1, int num2) {
        ArrayList<Integer> returnArray = new ArrayList<Integer>();

        for ( int elements : values) {
            if ( elements >= num1 && elements <= num2) {
                returnArray.add(elements);
            }
        }

        return returnArray;
    }

}
