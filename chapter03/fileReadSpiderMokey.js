/**
 * read는 Spider Monkey 함수
 * Code Runner 출력 결과에서 개행이 불필요하게 더들어감
 * 텍스트 파일을 LF로 개행을 전환하면 없어짐 괜찮음..
 * 
 * 그런데 CMD에서 직접 실행시는 CRLF도 문제가 없다.
 */
let text = read("./test.txt");
console.log(text);