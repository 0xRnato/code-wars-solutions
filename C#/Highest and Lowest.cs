using System;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
    // Code here or
    int max = Int32.MinValue, min = Int32.MaxValue;
    string[] vector = numbers.Split(' ');
    
    foreach(var item in vector)
    {
      if(int.Parse(item) <= min)
        min = int.Parse(item);
      if(int.Parse(item) >= max)
        max = int.Parse(item);
    }
    return max + " " + min;
  }
}