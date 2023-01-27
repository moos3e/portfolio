import java.util.ArrayList;
import java.util.Collections;

public class Individual3_AllUnique {
    public static void main(String[] args) {

        ArrayList<Integer> List1 = new ArrayList<Integer>();
        ArrayList<Integer> List2 = new ArrayList<Integer>();

        List1.add(1);
        List1.add(2);
        List1.add(3);
        List1.add(4);
        List1.add(5);
        List2.add(0);
        List2.add(2);
        List2.add(9);
        List2.add(3);

        

        System.out.print(allUnique(List1));

    }    

    public static ArrayList<Integer> allUnique(ArrayList<Integer> values) {
        ArrayList<Integer> returnArray = new ArrayList<Integer>();
        
        for (int num : values) {
            if ( (Collections.frequency(values, num)) == 1) {
                returnArray.add(num);
            }
        }
        return returnArray;
}
}
