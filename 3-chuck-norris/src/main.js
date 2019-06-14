// Submit a pull request with a solution to github percic-nenad/ve-conf-2019

function ascii (a) { 
  var retVal = a.charCodeAt(0).toString(2);
  while(retVal.length < 7)
    retVal = '0' + retVal
  return retVal;
}

export default function chuckNorris(input) {
  var cloneArray = Array.from([...input].map(ascii).join("")); 
  var last = -1;
  var retVal = '';
  cloneArray.forEach(function(x) {
    if (last == -1) {
      if (x == 1) {
        retVal += '0 0';
        last = 1;
      } else if (x == 0) {
        retVal += '00 0';
        last = 0;
      }
    } else if (last == 0) {
      if (x == 1) {
        retVal += ' 0 0';
        last = 1;
      } else if (x == 0) {
        retVal += '0';
        last = 0;
      }
    } else if (last == 1) {
      if (x == 1) {
        retVal += '0';
        last = 1;
      } else if (x == 0) {
        retVal += ' 00 0';
        last = 0;
      }
    }
  });

  return retVal;
} 