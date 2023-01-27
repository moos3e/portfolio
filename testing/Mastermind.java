package testing;

import java.util.Random;

class Mastermind {
   
    private int secret = createSecret();
    private int guesses = 0;
    
    public Mastermind() {
      this.makeNewSecret();
    }
    
    public void makeNewSecret() {
    secret = this.createSecret();
    guesses = 0;
    }
    
    public int guess(int num) {
    //compares user's 4 digit pin to the secret pin and returns the amount of numbers that are similar
    //adds 1 to guesses every tome it runs
    int count = 0;
 
    String temp = Integer.toString(num);
       int[] newGuess = new int[temp.length()];
       for (int i = 0; i < temp.length(); i++) {
     newGuess[i] = temp.charAt(i) - '0';
     }
    String temp2 = Integer.toString(secret);
       int[] newGuess2 = new int[temp2.length()];
       for (int x = 0; x < temp2.length(); x++) {
     newGuess2[x] = temp2.charAt(x) - '0';
     }
    
    for (int z = 0; z < 4; z++) {
       if ( newGuess2[z] == newGuess[z] )
       count++;
     }
    
     guesses++;
 
     return count;
     }
    
    public int getGuessCount() {
       return guesses;
    }
    
    private int createSecret() {
       //creates a 4 digit pin
         int num1 = getDigit();
         int num2 = getDigit();
         int num3 = getDigit();
         int num4 = getDigit();
         
         String pin = num1 + "" + num2 + "" + num3 + "" + num4;
            
         int finalNUMBER=Integer.parseInt(pin);
         
         return finalNUMBER;
      }
 
      private int getDigit() {
       // random number generator
         int min = 0;
         int max = 9;
         
       Random random = new Random();
 
         int value = random.nextInt(max + min) + min;
         
         return value;
    }
 }
