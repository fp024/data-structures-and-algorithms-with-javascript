export function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.hasNext = hasNext;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

// (참고) WebStorm 에서 같은 프로젝트에 어떤 js 파일에 같은 이름으로 함수 같은 것이 선언되어있으면
// 현재 파일에서 마치 사용가능할 것 처럼 구문강조를 해주는데, 무시하자.

/**
 * 리스트에 요소 추가
 * @param element 추가할 요소
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * 리스트의 요소 검색
 * @param element   검색할 요소
 * @returns {number} 검색 요소의 인덱스 번호
 */
function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

/**
 * 리스트의 요소 삭제
 * @param element 삭제할 요소
 * @returns {boolean} 삭제 성공시 true, 실패시 false
 */
function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

/**
 * 리스트의 요소 개수
 * @returns {number} 리스트의 요소 수
 */
function length() {
    return this.listSize;
}

/**
 * 리스트의 요소 확인
 * @returns {[]|*}  리스트의 요소
 */
function toString() {
    return this.dataStore.toString();
}


/**
 * 리스트에 요소 삽입
 * @param element 삽입할 요소
 * @param after   삽입할 위치 직전 요소
 * @returns {boolean}
 */
function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}


/**
 * 리스트의 모든 요소 삭제
 */
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

/**
 * 리스트에 특정 값이 있는지 판단.
 * @param element       존재 여부를 검사할 요소
 * @returns {boolean}   존재 여부
 */
function contains(element) {
    return (this.find(element) > -1);
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

/**
 * 요소의 다음이 있는지 여부
 * @returns {boolean} 다음이 잇을 경우 true, 없을 경우 false
 */
function hasNext() {
    return (this.pos + 1 <= this.listSize - 1);
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
        return true;
    }
    return false;
}


/**
 * 리스트의 현재 가리키는 요소 위치 인덱스를 반환
 * @returns {number|*} 현재 요소 인덱스
 */
function currPos() {
    return this.pos;
}

/**
 * 전달된 인덱스로 가리키고 있는 요소변경
 * @param position 요소 인덱스
 */
function moveTo(position) {
    this.pos = position;
}

/**
 * 리스트의 현재 가리키고 있는 요소 반환
 * @returns {*} 현재 요소
 */
function getElement() {
    return this.dataStore[this.pos];
}
