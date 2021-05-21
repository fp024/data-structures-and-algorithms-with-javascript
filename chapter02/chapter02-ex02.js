// 2.9 연습문제
/*
    2. 배열의 단어 집합을 저장한 다음 배열의 내용을 정방향 또는 역방향으로 출력하는 기능을 구현하시오.
 */
function WordUtils(words) {
    if (!Array.isArray(words)) {
        throw new Error('words parameter type should be Array type.');
    }

    function concat(a, b) {
        return a + ", " + b;
    }

    this.toString = function () {
        return words.reduce(concat);
    }

    this.reverseToString = function reversePrint() {
        return words.reduceRight(concat);
    }
}

let words = ["가", "나", "다", "라", "마", "바", "사"];
let wordUtils = new WordUtils(words);

console.log(wordUtils.toString());  // 가, 나, 다, 라, 마, 바, 사
console.log(wordUtils.reverseToString()); // 사, 바, 마, 라, 다, 나, 가
