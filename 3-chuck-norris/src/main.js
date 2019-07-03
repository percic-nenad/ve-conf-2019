// Submit a pull request with a solution to github percic-nenad/ve-conf-2019

function toBinnary(x) { 
  var retVal = x.charCodeAt(0).toString(2);
  while(retVal.length < 7)
    retVal = '0' + retVal
  return retVal;
}

function replaceZerosAndOnes(x) {
  return x
          .replace(/(0+)/, " 00 " + "0".repeat(x.length))
          .replace(/(1+)/, " 0 " + "0".repeat(x.length));
}

export default function chuckNorris(input) {
  var cloneArray = [...input].map(toBinnary).join("").split(/(1+)/); 
  return cloneArray.map(replaceZerosAndOnes).join("").substr(1);
} 