Test written in Jest
describe('word counter', () => {
  test('should return 1 if a passage has just one word', () => {
    const text = "hello";
    expect(wordCounter(text)).toEqual(1);
  });
});
***
The same test in Pseudocode:
Describe: wordCounter()

Test: "It should return 1 if a passage contains a single word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "IT should return 2 if a passage contains two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

