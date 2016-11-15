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