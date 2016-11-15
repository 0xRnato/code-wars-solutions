public class Kata {
  public static string declareWinner(Fighter fighter1, Fighter fighter2, string firstAttacker) {
    // Your code goes here. Have fun!
    bool fighter;
    
    if(fighter1.Name == firstAttacker)
        fighter = true;
      else
        fighter = false;
        
    while(fighter1.Health > 0 || fighter2.Health > 0)
    {
      if(fighter)
        fighter2.Health -= fighter1.DamagePerAttack;
      else
        fighter1.Health -= fighter2.DamagePerAttack;
        
        if(fighter1.Health <= 0)
          return fighter2.Name;
        else if(fighter2.Health <= 0)
          return fighter1.Name;
        
        fighter = !fighter;
    }
    
    return "";
  }
}