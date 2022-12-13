/**
 * @date December 13, 2022
 * @version Version 1.0
 * @author Kashif Umar <Kashif.TLB@gmail.com>
 * @description Call this method to convert number to words
 */
function number_to_words(num: number): string {

  let strNumber: number | string = num;
  let words: string[] = [];
  let list1: string[] = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  let list2: string[] = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred'];
  let list3: string[] = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion',
    'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattuordecillion',
    'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion'
  ];
  let num_length: number = String(strNumber).length;
  let levels: number = Math.floor((num_length + 2) / 3);
  let max_length: number = levels * 3;

  strNumber = ('00' + strNumber).substring(-max_length);

  let num_levels: number[] = [];// = str_split(strNumber, 3);

  let t: string[] = strNumber.split("");
  for (let i = 0; i < t.length; i++) {
    if ((i % 3) == 2) {
      num_levels.push(parseInt(t[i - 2].concat(t[i - 1], t[i])));
    }
  }

  for (let i = 0; i < num_levels.length; i++) {
    levels--;
    let hundreds: number | string = Math.floor((num_levels[i] / 100));

    hundreds = (hundreds ? ' ' + list1[hundreds] + ' Hundred' + ' ' : '');
    let tens: number | string = Math.floor(num_levels[i] % 100);
    let singles: number | string = '';
    if (tens < 20) {
      tens = (tens ? ' ' + list1[tens] + ' ' : '');
    } else {
      tens = Math.floor(tens / 10);
      tens = ' ' + list2[tens] + ' ';
      singles = Math.floor(num_levels[i] % 10);
      singles = ' ' + list1[singles] + ' ';
    }
    words.push(hundreds + tens + singles + ((levels && Math.floor(num_levels[i])) ? ' ' + list3[+levels] + ' ' : ''));
  } //end for loop
  let commas: number = words.length;
  if (commas > 1) {
    commas = commas - 1;
  }
  return words.join(' ') + ' Only';
}