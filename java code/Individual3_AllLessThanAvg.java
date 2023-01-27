import java.util.ArrayList;

public class Individual3_AllLessThanAvg {
    public static void main(String[] args) {

        ArrayList<Integer> List1 = new ArrayList<Integer>(5);

        List1.add(1);
        List1.add(2);
        List1.add(3);
        List1.add(4);
        List1.add(5);
        List1.add(3);
        List1.add(5);

        System.out.print(lessThanAverage(List1));

    }

    public static ArrayList<Integer> lessThanAverage(ArrayList<Integer> values) {

        ArrayList<Integer> returnArray = new ArrayList<Integer>();

        double avg = 0;
        double sum = 0;


        for (int i : values) {
        sum += i;
        }

        avg = sum / values.size();

        for (int i=0; i< values.size(); i++) {
            int num = values.get(i);
            if (num < avg) {
                returnArray.add(num);
            }
    }
    return returnArray;
}
}

