class main {

    public static void insertionSort(int [] numbers) {

     int i;
     int j;
     int temp;
      for (i = 1; i < numbers.length; ++i) {
          j = i;
          while (j > 0 && numbers[j] < numbers[j - 1]) {

              // Swap numbers[j] and numbers[j - 1]
             temp = numbers[j];
            numbers[j] = numbers[j - 1];
           numbers[j - 1] = temp;
              --j;
           }
    }  
}
public static void main(String[] args) {
    int[] numbers = {82, 42, 51, 2, 24, 78};
    insertionSort(numbers)
}
}