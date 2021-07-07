/*
C70: RegExp: Validate Pin

Create a RegExp to test if a string is valid pin or not. Empty strings should return false when tested.
A valid pin has:

- Exactly 4 or 6 characters.
- Only numerical characters(0-9).
- No whitespace.
  Examples:
  myRegExp.test('1234') -> true
  myRegExp.test('45124') -> false
  myRegExp.test('89abc1') -> false
  myRegExp.test('900876') -> true
  myRegExp.test(' 4983') -> false
  **_source: (Edabit(H))_**
  */

const validPin = (pin) => {
  if (pin == "") {
    return false;
  }

  const checkOnlyNum = /\D/;
  const checkSpace = /\s/;
  const checkLength = /\b\d{4}\b|\b\d{6}\b/;

  if (
    !checkOnlyNum.test(pin) &&
    !checkSpace.test(pin) &&
    checkLength.test(pin)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(validPin("1234"));
console.log(validPin("45124"));
console.log(validPin("89abc1"));
console.log(validPin("900876"));
console.log(validPin(" 4983"));
