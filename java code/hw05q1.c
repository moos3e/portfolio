// Mustafa Said
// Visual Code

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#pragma warning(disable : 4996)

#define MAX_STUDENTS 20
#define MAX_NAME_LENGTH 30
#define MAX_HOME_COUNTRY_NAME_LENGTH 30

typedef enum
{
    Physics = 0,
    Mathematics,
    CS
} departmentType;

struct studentRecord
{
    char studentName[MAX_NAME_LENGTH];
    departmentType department;
    unsigned int idNumber;
    char homeCountry[MAX_HOME_COUNTRY_NAME_LENGTH];
};

struct studentRecord list[MAX_STUDENTS];
int count = 0;

void flushStdIn();
void executeAction(char);
void save(char *fileName);

int add(char *studentName_input,
        unsigned int idNumber_input,
        char *department_input,
        char *homeCountry_input);
void sort();
int delete (unsigned int idNumber_input);
void load(char *fileName);
void display();

int main()
{
    char *fileName = "Student_List.txt";
    load(fileName);
    char choice = 'i';
    do
    {
        printf("\nEnter your selection:\n");
        printf("\t a: add a new student\n");
        printf("\t d: display student list\n");
        printf("\t r: remove an student from list\n");
        printf("\t s: sort student list by ID in descending order\n");
        printf("\t q: quit\n");
        choice = getchar();
        flushStdIn();
        executeAction(choice);
    } while (choice != 'q');

    save(fileName);
    return 0;
}

void flushStdIn()
{
    char c;
    do
        c = getchar();
    while (c != '\n' && c != EOF);
}

void executeAction(char c)
{
    char studentName_input[MAX_NAME_LENGTH], homeCountry_input[MAX_NAME_LENGTH];
    unsigned int idNumber_input, add_result = 0;
    char department_input[20];
    switch (c)
    {
    case 'a':

        printf("\nEnter student name: ");
        fgets(studentName_input, sizeof(studentName_input), stdin);
        studentName_input[strlen(studentName_input) - 1] = '\0';

        printf("Enter whether student is in 'Physics' or 'Mathematics' or 'CS': ");
        fgets(department_input, sizeof(department_input), stdin);
        department_input[strlen(department_input) - 1] = '\0';

        printf("Enter Home Country: ");
        fgets(homeCountry_input, sizeof(homeCountry_input), stdin);
        homeCountry_input[strlen(homeCountry_input) - 1] = '\0';

        printf("Please enter student ID number: ");
        scanf("%d", &idNumber_input);
        flushStdIn();

        add_result = add(studentName_input, idNumber_input, department_input, homeCountry_input);
        if (add_result == 0)
            printf("\nStudent is already on the list! \n\n");
        else if (add_result == 1)
            printf("\nStudent successfully added to the list! \n\n");
        else
            printf("\nUnable to add. Student list is full! \n\n");

        break;
    case 'r':
        printf("Please enter ID number of student to be deleted: ");
        scanf("%d", &idNumber_input);
        flushStdIn();
        int delete_result = delete (idNumber_input);
        if (delete_result == 0)
            printf("\nStudent not found in the list! \n\n");
        else
            printf("\nStudent deleted successfully! \n\n");
        break;
    case 'd':
        display();
        break;
    case 's':
        sort();
        break;

    case 'q':
        break;
    default:
        printf("%c is invalid input!\n", c);
    }
}

int add(char *studentName_input, unsigned int idNumber_input, char *department_input, char *homeCountry_input) // add student to the list
{
    int i;
    for (i = 0; i < count; i++)
    {
        if (studentName_input == list[i].studentName)
            return 0;
    }
    strcpy(list[count].studentName, studentName_input);
    if (department_input == "Physics")
        list[count].department = Physics;
    if (department_input == "Mathematics")
        list[count].department = Mathematics;
    if (department_input == "CS")
        list[count].department = CS;
    strcpy(list[count].homeCountry, homeCountry_input);
    list[count].idNumber = idNumber_input;
    count++;
    return 1;
}

void sort() // sorts bases off of the idNumber
{
    struct studentRecord studentTemp;
    int i, j;

    for (j = 0; j < count - 1; j++)
    {
        for (i = j + 1; i < count; i++)
        {
            if (strcmp(list[j].idNumber, list[i].idNumber) > 0)
            {
                studentTemp = list[j];
                list[j] = list[i];
                list[i] = studentTemp;
            }
        }
        printf("\nStudent list sorted! Use display option 'd' to view sorted list.\n");
    }
}

void display() // display the list of students
{
    char *departmentString = "Physics";

    for (int i = 0; i < count; i++)
    {
        printf("\nStudent name: %s", list[i].studentName);

        if (list[i].department == Physics)
            departmentString = "Physics";
        else if (list[i].department == Mathematics)
            departmentString = "Mathematics";
        else
            departmentString = "CS";
        printf("\nDepartment: %s", departmentString);
        printf("\nID Number: %d", list[i].idNumber);
        printf("\nHome Country: %s", list[i].homeCountry);
        printf("\n");
    }
}

void save(char *fileName) // saves the file
{
    FILE *file;
    int i, departmentValue = 0;
    file = fopen(fileName, "wb");

    fwrite(&count, sizeof(count), 1, file);

    for (i = 0; i < count; i++)
    {
        fwrite(list[i].studentName, sizeof(list[i].studentName), 1, file);
        fwrite(&list[i].idNumber, sizeof(list[i].idNumber), 1, file);

        if (list[i].department == Physics)
            departmentValue = 0;
        else if (list[i].department == Mathematics)
            departmentValue = 1;
        else
            departmentValue = 2;
        fwrite(&departmentValue, sizeof(departmentValue), 1, file);

        fwrite(&list[i].homeCountry, sizeof(list[i].homeCountry), 1, file);
    }

    fclose(file);
}

int delete (unsigned int idNumber_input) // delete student from the list
{
}

void load(char *fileName) // loads the excisting file
{

    FILE *file;

    int i, schoolYearValue = 0;

    file = fopen(fileName, "rb");

    if (file != NULL)
    {
        fread(&count, sizeof(count), 1, file);

        for (i = 0; i < count; i++)
        {

            fread(list[i].studentName, sizeof(list[i].studentName), 1, file);

            fread(&schoolYearValue, sizeof(schoolYearValue), 1, file);

            if (schoolYearValue == 0)
                list[i].department = Physics;
            else if (schoolYearValue == 1)
                list[i].department = Mathematics;
            else if (schoolYearValue == 2)
                list[i].department = CS;

            fread(list[i].homeCountry, sizeof(list[i].homeCountry), 1, file);
            fread(&list[i].idNumber, sizeof(list[i].idNumber), 1, file);
        }

        fclose(file);
    }
    else
        printf("Student_List.txt not found\n");
}
