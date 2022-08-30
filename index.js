function scuberGreetingForFeet(num){
  if (num <= 400) {
    return 'This one is on me!'
  } else if (num > 400 && num <= 2000) {
    return 'That will be twenty bucks.'
  } else if (num > 2000 && num < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (num >= 2500 )
    return 'No can do.'

}

function ternaryCheckCity(city){

  const location = city
  let cityMsg
  cityMsg = location === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMsg;
    }


function switchOnCharmFromTip(tip){

  let msg;

    switch (tip) {
      case 'generous':
        msg = 'Thank you so much.';
        break;
      case 'not as generous':
        msg = 'Thank you.';
        break;
      default: 
        msg = 'Bye.'
        break;
    }
    return msg
  }