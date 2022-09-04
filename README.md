# Text Analyzer

## Authored by: 
Quin Asselin, 2022
Hans Ellis, 2022
***

## Table of Contents
1. [Repository Description](#description)
2. [Github Pages Information](#pages)
3. [Technologies Used](#tech)
4. [Setup Instructions](#setup)
5. [Example Tests](#tests)
6. [Known Bugs](#bugs)
7. [License Information](#license)
8. [Photo Licensure](#photo)

*** 

### Repository Description: {#description}
This application works to analyze text across several criteria such as word count, checking for instances of specific words and removing specific profanities. This project was made to test manual TDD.
***

***

### Technologies Used: {#tech}
- Javascript
- Markdown Text
- Git
- Github
***

### Setup Instructions: {#setup}
This webpage can be access by following the Github Pages linked [above](#pages)

Alternatively, the project can be opened via cloning/downloading repository:
1. Download this repository from its Github Repository.
2. Locate the download destination folder on your local machine.
3. Unzip the downloaded folder if necessary.
4. Enter the decompressed folder and open "index.html" in your prefered web browser.
***

### Tests: {#tests}
##### Describe: wordCounter()
**Test 1:** 
*"It should return 1 if a passage contains a single word."*

***Code:***
```javascript
const text = "hello";
wordCounter(text);
```
***Expected Output:***
1

**Test 2:** 
*"It should return 2 if a passage contains two words."*

***Code:***
```javascript
const text = "hello there";
wordCounter(text);
```
***Expected Output:*** 
2

**Test 3:** 
*"It should return 0 for an empty string."*

***Code:*** 
```javascript
wordCounter("");
```
***Expected Output:***
0

**Test 4:**
*"It should return 0 for a string made solely of spaces, any number of them."*

***Code:***
```javascript
wordCounter("         ");
```
***Expected Output:***
0

**Test 5:**
*"It should not count numbers as words."*

***Code:***
```javascript
wordCounter("hi there 77 19");
```
***Expected Output:***
2

##### Describe: numberOfOccurrencesInText()

**Test 1:**
*"It should return 0 occurrences of a word for an empty string."*
***Code:***
```javascript
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
0

**Test 2:**
*"It should return 1 occurrence of a word when the word and the text are the same."*
***Code:***
```javascript
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
1

**Test 3:** 
*"It should return 0 occurrences of a word when the word and the text are different."*
**Code:**
```javascript
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
0

**Test 4:** 
*"It should return the number of occurrences of a word."*
**Code:**
```javascript
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
4

**Test 5:** 
*"It should return a word match regardless of case."*
**Code:**
```javascript
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
3

**Test 6:**
*"It should return a word match regardless of punctuation."*
**Code:**
```javascript
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
```
***Expected Output:***
3

##### Describe omitBadWords()

**Test 1**
*"It should remove a singleword and return an empty string"*
**Code:**
```javascript
const word = "hello";
omitBadWords(word);
```
***Expected Output:***
""

**Test 2**
*"It should isolate a specified word and eliminate it."*
```javascript
const badLanguage = "good bad";
omitBadWords(badLanguage);
```
***Expected Output:***
"good"

**Test 3**
*"It should remove the specific set of bad words targetted."*
```javascript
const badLanguage = "zoinks that muppeteer ate biffaroni"
omitBadWords(badLanguage);
```
***Expected Output:***
"beep that beep ate beep"

**Test 4**
*"It should remove specific words regardless of punctuation."*
```javascript
const badLanguage = "zoinks! that muppeteer ate *biffaroni*";
omitBadWords(badLanguage);
```
***Expected Output:***
"beep that beep ate beep"

##### Describe boldPassage()
*Functionality constructed in previous commits not included*

**Test 1**
*It will bold a specified portion of a word input*
```javascript
const word = "something";
boldPassage(word);
```
***Expected Output:***
some**thing**
***

### Known Bugs: {#bugs}
In the event that (disallowed values) are entered into [MORE INFO] If you experience this issue, please message the producer of your current repository and include any relevant form/page information. Thank you for your patience as I work on any issues!

The page may experience formatting issues when opened on mobile devices or tablets/laptops in smaller windows. Page should still be legible but general project layout will shift in potentially unforeseen manner. Thus, it is recommended to open the HTML index page in browser or file explorer in as full a screen as hardware allows.

Additionally, included image does not scale-down to fit to smaller screen sizes and may take up a majority of the screen when scrolling through the site from a mobile (or other small-screened) device.

***

### License Information {#license}
*Quin Asselin, 2022. Available for distribution, modification, inspection, and application under [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)*

