function calculateTotalAmount (vip) {
    var amount = 0;
    if (vip) {
      var amount = 1;
    }
    { // more crazy blocks!
      var amount = 100;
      {
        var amount = 1000;
        }
    }  
    return amount;
  }
  
  console.log(calculateTotalAmount(true));

  // ES6

  var amount = 0 // probably should also be let, but you can mix var and let
  if (vip) {
    let amount = 1 // first amount is still 0
  } 
  { // more crazy blocks!
    let amount = 100; // first amount is still 0
    {
      let amount = 1000; // first amount is still 0
      }
  }  
  return amount;
}

console.log(calculateTotalAmount(true));


