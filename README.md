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
    * Firefox 88.0.1 정식버전 기준이라면..
      * http://archive.mozilla.org/pub/firefox/releases/88.0.1/jsshell/
      * 그런데 파일 최종 수정시간이 nightly, 88.0.1모두 2010-01-01 12:00 으로 모두 같아서 업데이트가 없었는지? 란 생각도 들었는데...   
      js --version으로 보면 JavaScript-C88.0.1 버전 값은 다름.


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
* node, 스파이더몽키 쉘에서 모두 잘동작하는 코드로 변경작성하면 좋은데, 힘들 부분도 있을 것 같음.
* VS Code에서는 스파이더몽키 JS쉘를 사용하고, WebStrom에서는 node를 사용하자!
* node 로 실행했을 때 경로 로그...
    * ExperimentalWarning: The ESM module loader is experimental.
        * Windows 8.1에서 node 신버전을 설치할 수는 없어서, node 12.x 를 사용중인데, 그래서 발생한 경고 같다. 신버전이면 안 뜰듯.
    
## 의견

* SpiderMonkey 에서만 사용하는 함수를 사용한 부분이 있어서, 근래의 개발 툴에 적용하기가 복잡한 면이 있어서,  
  개정판이 나온다면 특정 프로그램에 종속되는 전용 함수들은 표준함수로 바꾸는것이 좋을 것 같습니다.  (node로 바꾸는 것도..)
  * SpiderMonkey 를 사용하더라도, SpiderMonkey 환경의 전용함수는 구분해서 표시해주면 좋을 것 같습니다. 
  
  
## SpiderMonkey -> 일반 함수   

* print() -> console.log()
    * 브라우저에서 print() 는 화면출력이 아닌 인쇄를 의미하고 있음.
* load() -> import
    * ES6의 import 문을 사용하면 외부 JS 로딩이 잘됨.
* putstr() -> ?
    * Evaluate and print expression without newline.
    * 개행이 없는 print()
* readline() -> ?
    * Read a single line from stdin.
    * 한줄을 입력받음
    * Code Runner 의 Output에서는 입력을 할 수 없음. task에서는 입력은 할 수 있음.



## Ubuntu
* linux 버전을 Ubuntu에 다운로드 받아 압출을 풀었을 때... 아래 4개 파일이 있음.
    * js
    * libnspr4.so
    * libplc4.so
    * libplds4.so
* js가 실행파일인데, 실행하면, 아래와 같은 오류가 발생한다.
    ```
    ./js: error while loading shared libraries: libnspr4.so: cannot open shared object file: No such file or directory
    ```
    * 실행파일과 같은 경로에 공유오브젝트가 이미 있는데도 오류가 남.
    * 해결
        1.  `/etc/ld.so.conf.d` 경로에 `spidermonkey.conf` 파일을 새로 만들고 내용은 공유 오브젝트 파일들이 있는 경로를 지정해줌.
            ```
            /설치경로
            ```
        2. `sudo ldconfig -v` 를 실행하면 결과가 아래와 같이 보임
            ```
            ...
            /설치경로:
                libnspr4.so -> libnspr4.so
                libplds4.so -> libplds4.so
                libplc4.so -> libplc4.so
            ...
            ```
        3. 이후 부턴 정상 수행됨.
    * 특이한 점
        * Windows용 빌드는 `js>` 프롬프트에 한글만 입력해도 크래시가 발생하는데...  
         linux용은 한글 입출력이 잘된다. (Ubuntu 로케일 : UTF-8)
            ```
            js> var 한글변수='한글내용';
            js> console.log(한글변수);
            한글내용
            js>
            ```

    

## 참고 링크
* import declarations may only appear at top level of a module
    * https://bugzilla.mozilla.org/show_bug.cgi?id=1582995
* SyntaxError: Cannot use import statement outside a module
    * https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module