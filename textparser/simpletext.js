function SimpleText(title, text){
    this.title = title || '';
    this.text = text || '';
    this.wordsSplitted = [];
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
};

module.exports = SimpleText;