let New_Script = {
  FirstAction: function() {
    let number = parseFloat(prompt('Digite o valor de N'));
    number = this.Fatorial(number);
    alert(number);
  },

  Fatorial: function(number) {
    if(number <= 1) {
      return 1;
    } else {
      return this.Fatorial(number - 1) * number;
    }
  },

  SecondAction: function() {
    let number = parseFloat(prompt('Digite o valor de N'));
    number = this.Somatorio(number);
    alert(number);
  },

  Somatorio: function(number) {
    if(number <= 1)
      return 1;
    else
      return this.Somatorio(number - 1) + number;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const firstButton = document.getElementById('firstButton');
  const secondButton = document.getElementById('secondButton');

  firstButton.addEventListener('click', New_Script.FirstAction);
  secondButton.addEventListener('click', New_Script.SecondAction);
});
