class MyString {
    reverse(str){
        let splitString = str.split("");
        let reverseString = splitString.reverse();
        let joinString = reverseString.join("");
        return joinString;
    }

    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str){
        let splitWords = str.split(" ");
        let newString = splitWords.map(splitWord => splitWord.charAt(0).toUpperCase() + splitWord.slice(1));
        let joinWords = newString.join(" ");
        return joinWords;
    }
}

const str = new MyString()
console.log(str.reverse("foo"));
console.log(str.ucFirst("dima"));
console.log(str.ucWords("hello world"));
console.log(str.ucWords("abc aBc"));
