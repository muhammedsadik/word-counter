const invalidEntry = "Invalid Entry";
const strSpace = " ";
const result = {};
const turkish = "tr";

const text = prompt("Enter A Text :");

if (!text) {
  alert(invalidEntry);

} else {

  const splitText = text.split(strSpace).filter(t => t !== strSpace);

  for (let item of splitText) {

    item = item.toLocaleLowerCase(turkish);

    if (!item) continue;

    if (result[item]) result[item]++;
    else result[item] = 1;
  }

  if (Object.keys(result).length > 0) {
    console.log(result);
  }else { 
    alert(invalidEntry);
  }
}