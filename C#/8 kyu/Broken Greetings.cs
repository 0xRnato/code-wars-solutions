// Description:

// Correct this code so that the greet function returns the expected value.

public class Person
{
  public string Name { get; private set; }
  
  public Person(string name)
  {
    Name = name;
  }
  
  public string Greet(string otherName)
  {
    return "Hi " + otherName + ", my name is " + Name;
  }
}