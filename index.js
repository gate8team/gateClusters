var SimpleText = require('./textparser').SimpleText,
    textTester = new SimpleText('Title', 'This is test description.');

textTester.slitWords(true);
console.log(textTester);