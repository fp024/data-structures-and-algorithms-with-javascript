# Chapter 3. 리스트

## 3.1 리스트 ADT

## 3.2 List 클래스 구현

### 3.2.1 Append: 리스트에 요소 추가

### 3.2.2 Remove: 리스트의 요소 삭제

### 3.2.3 Find: 리스트의 요소 검색

### 3.2.4 Length: 리스트의 요소 개수

### 3.2.5 toString: 리스트의 요소 확인

### 3.2.6 Insert 리스트에 요소 삽입

### 3.2.7 리스트의 모든 요소 삭제

### 3.2.8 Contains: 리스트에 특정 값이 있는 지 확인

### 3.2.9 리스트 탐색

## 3.3 리스트와 반복

## 리스트 기반 애플리케이션

### 3.4.1 텍스트 파일 읽기

### 3.4.2 리스트로 상점 관리하기

## 3.5 연습문제
* 비교 조건 함수를 전달하려고, 파라미터가 다른 함수를 계속 추가만 해나갔는데,
이부분 다른 방법을 사용해봐야겠다.
  * 최대 인자수 함수로 정의해두고, function 타입이 감지되면 쓰고 아니면 안쓰고 그런식으로 해야할 것 같다.
    * 메서드 오버로딩과 관련된 것 같은데..

## 의견
* p69 toString() 함수 내부에서 dataStore의 내용을 그대로 반환하는 것 보단, this.dataStore.toString() 을 반환하는 것이 나아보입니다.
* p71 contains() 함수 내부에서 find() 호출하여 검사하는 것도 괜찮아보입니다. 코드가 거의 같습니다.
* p73 반복을 탈출할 수 없는 문제
    ```javascript
    for (names.front(); names.currPos() < names.length();names.next()) {
        // 무한 반복 영역
    }
    ```            
  위의 코드에서 next는 pos값을 names.length-1 만큼만 최대로 올릴 수 있어,  
  `names.currPos() < names.length()` 조건식이 항상 참임.  
  탈출하기 위해서는 이후가 없을때, 반복을 탈출시키는 조건이 필요함.  
  hasNext() 같은 메서드를 반복문 내부에 넣어서 회피했음.
  ```javascript
    for (names.front(); names.currPos() < names.length();names.next()) {
        // ...
        if (!names.hasNext()) {
            break;
        }
    }
  ```
  책에서 다음에 설명한 끝에서 부터 조회하는 부분도 0을 지나 -1까지 pos가 감소될 수 없기 때문에   
  무한 루프가 발생한다. 0일 때 반복을 탈출하는 조건이 동작해야 정상 동작한다.


## 정오표
* p67. List 클래스에 length 속성을 두번 정의함. 하나는 제거필요
* p77. checkOut() 메서드에서 인자명과, remove()부분의 filmList를 모두 movieList로 바꿔야할 필요가 있습니다.
