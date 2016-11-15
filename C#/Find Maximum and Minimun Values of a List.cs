using System;
public class Kata
{
  public int Min(int[] list)
  {
    int min = Int32.MaxValue;
    foreach(int item in list)
    {
        if(item <= min)
          min = item;
    }
    return min;
  }
  
  public int Max(int[] list)
  {
    int max = Int32.MinValue;
    foreach(int item in list)
    {
        if(item >= max)
          max = item;
    }
    return max;
  }
}