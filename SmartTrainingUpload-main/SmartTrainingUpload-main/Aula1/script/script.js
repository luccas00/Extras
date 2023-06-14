document.addEventListener('DOMContentLoaded', function() {

    const dialogBox = document.getElementById('dialogBox');
    const okButton = document.getElementById('okButton');
  
    function showDialogBox() {
      dialogBox.style.display = 'block';
    }
  
    function hideDialogBox() {
      dialogBox.style.display = 'none';
    }
  
    okButton.addEventListener('click', hideDialogBox);
  
    let New_Script = {
      FirstAction: function() {
        let number = parseFloat(prompt('Digite o valor de N'));
        alert(number);
      },
  
      SecondAction: function() {
        let number = parseFloat(prompt('Digite o valor de N'));
        alert(number + 10);
      }
    };
  
    function handleClick() {
      New_Script.FirstAction();
      showDialogBox();
    }
  
    let box = document.getElementById('box');
    box.addEventListener('click', handleClick);

  });
  