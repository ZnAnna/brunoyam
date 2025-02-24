function reverseStr(str) {
    let newString = str.split('').reverse().join('');
    return newString;
  }
  
  // Примеры использования
  console.log (reverseStr("привет")) // => "тевирп"
  console.log (reverseStr("мир")) // => "рим"
  console.log (reverseStr("моё имя ваня")) // => "янав ями ёом"