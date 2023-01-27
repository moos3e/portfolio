import java.util.HashMap;
import java.util.Map;

public class sandbox {

  public static int[] findTwoSum(int[] numbers, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < numbers.length; i++) {
      int complement = target - numbers[i];
      if (map.containsKey(complement)) {
        return new int[] { map.get(complement), i };
      }
      map.put(numbers[i], i);
    }
    return new int[] { -1, -1 };
  }

  public static void main(String[] args) {
    int[] indices = findTwoSum(new int[] { 2, 7, 3, 15 }, 10);
    System.out.println(indices[0] + " " + indices[1]);
  }
  
}
