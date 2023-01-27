import java.util.ArrayList;

public class Individual3_inBoth {
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

        System.out.print(inBoth(List1, List2));
    }
    
    public static ArrayList<Integer> inBoth(ArrayList<Integer> list1, ArrayList<Integer> list2){
        ArrayList<Integer> returnArray1 = new ArrayList<Integer>(); {

        for(int value : list1) {
            if(list2.contains(value)) {
                returnArray1.add(value);
            }
        }
        return deleteMultiples(returnArray1);
    }
}

    public static ArrayList<Integer> deleteMultiples(ArrayList<Integer> valuesinBoth)
    {
  
        ArrayList<Integer> newList = new ArrayList<Integer>();
  
        for (int element : valuesinBoth) {
            if (!newList.contains(element)) {
                newList.add(element);
            }
        }
    return newList;
}
}
