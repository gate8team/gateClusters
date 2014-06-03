function SimpleText(title, text){
    this.title = title || '';
    this.text = text || '';
    this.wordsSplitted = [];
    this.wordsCounted = [];
};

SimpleText.prototype.slitWords = function(removeEmptyWords){
    var flag = (typeof removeEmptyWords === 'boolean') ? removeEmptyWords : false;

    this.wordsSplitted = this.text
        .replace(/[.,?!;()"'-]/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .split(' ');

    if (flag){
        this.wordsSplitted = this.wordsSplitted.filter(function(str){
            if (str.trim())
                return str;
        });
    }

    return this;
};

SimpleText.prototype.getWordsCount = function(){
    if (this.wordsSplitted instanceof Array) {
        var that = this;
        this.wordsSplitted.forEach(function(el){
            if (that.wordsCounted[el] != undefined) {
                that.wordsCounted[el] += 1;
            } else {
                that.wordsCounted[el] = 1;
            }
        });
    }
    return this;
};

module.exports = SimpleText;