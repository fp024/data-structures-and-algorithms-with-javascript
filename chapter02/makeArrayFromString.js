// 2.2.3 문자열로 배열 만들기

let sentence = "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열";
let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    console.log("단어" + i + ": " + words[i]);
}