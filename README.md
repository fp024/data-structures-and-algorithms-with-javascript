# 자바스크립트 자료구조와 알고리즘 스터디

### Data Structures & Algorithms with JavaScript

* 저자: Michael McMillan 님

* yes24 도서 판매 링크 (절판 상태)	
	* http://www.yes24.com/Product/Goods/14419692

## 환경설정
* 스파이더몽키(SpiderMonkey) 자바스크립트 쉘 설치
    * 도서에서 제공하는 주소는 페이지가 없어짐 
        * http://mzl.la/MKOuFY => http://ftp.mozilla.org/pub/firefox/nightly/latest-trunk/
    * 새로 검색해서 찾은 경로
        * http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/
            * windows
                * http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/jsshell-win64.zip
            * linux
                * http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central/jsshell-linux-x86_64.zip

### Visual Studio Code
* settings.json 설정
  * Code Runner 플러그인의 자바스크립트 실행 설정
    * 해당 프로젝트에 대해서만 javascirpt 실행을 node 대신 jsshell로 실행하도록 함.
    ```
    {
        // Code Runner 플러그인용 설정
        "code-runner.executorMap": {
            // 기본값은 "javascript":"node"
            "javascript": "cd $dir && C:/jsshell-win64/js.exe -w $fileName"
        }
        // ...
    }
    ```
	* PowerShell과 Commend Prompt에서의 PATH 설정
    *  `"PATH": "C:\\jsshell-win64;${env:PATH}"`
* task.json 설정
    * Code Runner와 동일한 일을 하지만, 시험삼아 넣어봄
* 디버깅은 전용함수를 변환해서 node에서 실행시키는 것이 나을 것 같음.

### WebStorm
* Empty Project로 프로젝트 생성후 JavaScript로 실행하면 node로 실행됨
    * 실행파일만 jsshell로 설정을 바꾸면 되는데, 그때 IDE상에서 디버깅은 제대로 안됨

## 진행

* IDE에서 알려주는 것도 많아서, Node에서 실행되는 코드로 변경하면서 진행하는게 좋을 것 같다.

  

## 의견

* SpiderMonkey 에서만 사용하는 함수를 사용한 부분이 있어서, 근래의 개발 툴에 적용하기가 복잡한 면이 있어서,  
  개정판이 나온다면 특정 프로그램에 종속되는 전용 함수들은 표준함수로 바꾸는것이 좋을 것 같습니다.  (node로 바꾸는 것도..)
  * print() -> console.log()
    * 브라우저에서 print() 는 화면출력이 아닌 인쇄를 의미하고 있음.

