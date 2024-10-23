// CSE240 Fall 2022 HW4

// Mustafa Said
// Visual Studio

#include <stdio.h>
#include <string.h>

#pragma warning(disable : 4996) // compiler directive for Visual Studio only

// Read before you start:
// You are given a partially complete program. Complete the functions in order for this program to work successfully.
// All instructions are given above the required functions, please read them and follow them carefully.
// You shoud not modify the function return types or parameters.
// You can assume that all inputs are valid. Ex: If prompted for an integer, the user will input an integer.
// You can use only the strlen() of strings.h library to check string length. Do not use any other string functions
// because you are supposed to use pointers for this homework.
// DO NOT use arrays to store or to index the characters in the string

// Global Macro Values. They are used to define the size of 2D array of characters
#define NUM_STRINGS 4
#define STRING_LENGTH 50

// Forward Declarations
void initializeStrings(char[NUM_STRINGS][STRING_LENGTH]);
void printStrings(char[NUM_STRINGS][STRING_LENGTH]);
void encryptStrings(char[NUM_STRINGS][STRING_LENGTH], int);
void decryptStrings(char[NUM_STRINGS][STRING_LENGTH], int);
void reverseStrings(char strings[NUM_STRINGS][STRING_LENGTH]);
char *reverseOneString(char s[STRING_LENGTH]);
int isPalindrome(char s[STRING_LENGTH]);

// Problem 1: initializeStrings (5 points)
// Use pointer 'ptr' to traverse the 2D array of characters variable 'strings' (input from user in main()) and set all characters in each
// array to a null terminator so that there is a 4 row and 50 column 2D array full of null terminators.
// The null terminator '\0' is used to denote the end of a string.
void initializeStrings(char strings[NUM_STRINGS][STRING_LENGTH])
{
	int r, c;
	char *ptr = &strings[0][0];
	for (r = 0; r < NUM_STRINGS; r++)
	{
		for (c = 0; c < STRING_LENGTH; c++)
			*(ptr + r * STRING_LENGTH + c) = '\0';
	}
}

// Problem 2: printStrings (5 points)
// Use pointer 'ptr' to traverse the 2D character array 'strings' and print each string.
// See the example outputs provided in the word document. Each string should be printed on a new line.
void printStrings(char strings[NUM_STRINGS][STRING_LENGTH])
{
	int r, c;

	char *ptr = &strings[0][0];

	for (r = 0; r < NUM_STRINGS; r++)
	{
		for (c = 0; c < STRING_LENGTH; c++)
			printf("%c", *(ptr + r * STRING_LENGTH + c));

		printf("\n");
	}
}

// Problem 3: reverseOneString (15 points)
// Reverse the string s by using pointer.
// Use pointer 'ptr' and 'temp' char to swap 1st char with last, then 2nd char with (last-1) and so on..
// Finally return pointer 'ptr' which points to start of the reversed string.
// Hint: You might want to check if your logic works with even as well as odd length string.
//       You can write test code to print out the reversed string to check if your function works. (Don't include it in final submission)
char *reverseOneString(char s[STRING_LENGTH])
{
	char temp;		   // not necessary to use this variable
	char *ptr = &s[0]; // pointer to start of string
	int len = strlen(s);
	while (*ptr != '\0')
	{
		ptr++;
	}
	ptr--;
	return ptr;
}

// Problem 4: reverseStrings (5 points)
// Reverse all the strings in 'strings[][]'
// For each string in 'strings', use the reverseOneString() to reverse it.
void reverseStrings(char strings[NUM_STRINGS][STRING_LENGTH])
{
	char *ptr = &strings[0][0];

	for (int i = 0; i < NUM_STRINGS; i++)
	{
		int counter = 0;
		char *nptr = reverseOneString(strings[i]);
		while (nptr > ptr)
		{
			printf("ptr: %c  nptr: %c\n", *ptr, *nptr);

			char temp = *ptr;
			*ptr = *nptr;
			*nptr = temp;

			nptr--;
			counter++;
			ptr++;
			while (*ptr == '\0')
			{
				++ptr;
			}
		}
		ptr += STRING_LENGTH - counter;
		printf("\n Reversed order string \n");
		printf("%s", ptr);
	}
}

// Problem 5: encryptStrings (5 points)
// Use pointer 'ptr' to traverse the 2D character array 'strings' and encrypt each string in 2 step as follows-
// 1) Reverse the strings. Hint: Use 'reverseStrings()' for this step.
// 2) Shift the characters forward by the integer value of 'key'.
// If the string is "hello" and key = 2, reversing will get you "olleh" and adding key to it will result in "qnnfj".
// Once the value of 'key' gets larger, you will extend past alphabetical characters and reach non-alphabetical characters. Thats ok.
// NOTE: DO NOT encrypt the null terminator character. Use the null terminator to find the end string.
//		If you could not implement reverseStrings(), skip using it in this function. You will receive partial credit.
void encryptStrings(char strings[NUM_STRINGS][STRING_LENGTH], int key)
{
	reverseStrings(strings); // Reverse
	int i;
	char *p = &strings[0][0]; // p points to beginning
	for (i = 0; i < NUM_STRINGS * STRING_LENGTH; i++)
	{
		if (*(p + i) == '\0' || *(p + i) == '\n')
		{
			continue;
		}
		else
		{ // Store encrypted value
			*(p + i) = (*(p + i) + key);
		}
	}
}
// Problem 6: decryptStrings (5 points)
// HINT: This should be very similiar to the encryption function defined above in encryptStrings().
// Use pointer 'ptr' to traverse the 2D character array 'strings' and decrypt each string in 2 step as follows-
// 1) Shift the characters backward by the integer value of 'key'.
// 2) Reverse the strings. Hint: Use 'reverseStrings()' for this step.
// NOTE: DO NOT decrypt the null characters.
//		If you could not implement reverseStrings(), skip using it in this function. You will receive partial credit.
void decryptStrings(char strings[NUM_STRINGS][STRING_LENGTH], int key)
{
	reverseStrings(strings); // Reverse

	char *ptr0 = &strings[0][0];
	int i;
	for (i = 0; i < NUM_STRINGS * STRING_LENGTH; i++)
	{
		if (*(ptr0 + i) == '\0' || *(ptr0 + i) == '\n')
			continue;
		else
			*(ptr0 + i) = (*(ptr0 + i) - key); // Store decrypted value
	}
}

// Problem 7: isPalindrome (10 points)
// Return 1 if string s is palindrome. Or, return 0 if string is not palindrome.
// A palindrome is a sequence of characters which when reversed, is the same sequence of characters.
// Palindrome string examples: rotor, noon, madam...
// Parse through the string to check if 1st char==last char, 2nd char == (last-1) char, and so on..
// Note: you may use reverseOneString() here but it is not necessary to use it.
int isPalindrome(char s[STRING_LENGTH])
{
	char *ptr = s;
	int palindrome = 1; // edit if needed
	while (*ptr)
		ptr++;
	ptr--;
	while (s < ptr)
	{
		if (*s != *ptr)
			palindrome = 0;
		s++;
		ptr--;
	}
	return palindrome;
}

// You should study and understand how main() works.
// *** DO NOT modify it in any way ***
int main()
{
	char strings[NUM_STRINGS][STRING_LENGTH]; // will store four strings each with a max length of 34
	int i, key;
	char input[STRING_LENGTH];

	printf("CSE240 HW4: Pointers\n\n");
	initializeStrings(strings);

	for (i = 0; i < NUM_STRINGS; i++)
	{
		printf("Enter a string: ");			// prompt for string
		fgets(input, sizeof(input), stdin); // store input string
		input[strlen(input) - 1] = '\0';	// convert trailing '\n' char to '\0' (null terminator)
		strcpy(strings[i], input);			// copy input to 2D strings array
	}

	printf("\nEnter a key value for encryption: "); // prompt for integer key
	scanf("%d", &key);

	encryptStrings(strings, key);
	printf("\nEncrypted Strings:\n");
	printStrings(strings);
	decryptStrings(strings, key);
	printf("\nDecrypted Strings:\n");
	printStrings(strings);

	getchar(); // flush out newline '\n' char

	printf("Checking for palindrome. Enter a string: "); // prompt for string
	fgets(input, sizeof(input), stdin);					 // store input string
	input[strlen(input) - 1] = '\0';					 // convert trailing '\n' char to '\0' (null terminator)

	if (isPalindrome(input))
		printf("\nThe string is a palindrome!");
	else
		printf("\nThe string is NOT a palindrome!");

	getchar(); // keep VS console open
	return 0;
}