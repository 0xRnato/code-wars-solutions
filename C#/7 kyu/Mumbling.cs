// Description:

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// Accumul.Accum("abcd");    // "A-Bb-Ccc-Dddd"
// Accumul.Accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// Accumul.Accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

using System;

public class Accumul 
{
	public static String Accum(string s) 
  {
     // your code
     string[] vetor = new string[s.Length];
     string output = "";
     
     for(int i=0; i<vetor.Length; i++)
     {
       for(int j=0; j<i+1; j++)
       {
         if(j==0)
           output += s[i].ToString().ToUpper();
          else
            output += s[i].ToString().ToLower();
       }
       output += "-";
     }
     
     return output.Remove(output.Length -1);
  }
}