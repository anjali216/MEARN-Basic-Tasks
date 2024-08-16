

//Print word count from given text

text="one two one two one";

//1 convert into array["one" "two" "one" "two" "one"]
words=text.split("");
console.log("words");

//2 create an empty object and check if the element is preent in the object ? "+1" : "=1"
wordcount={}; 
words.map(word=>word in wordcount? wordcount[word]+=1:wordcount[word]=1);
console.log(wordcount);