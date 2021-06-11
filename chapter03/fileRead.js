/**
 * 로컬에서 파일 불러오기 어떻게 하는지? 해서 작성
 * require("fs"); node 14에서는 package.json 의 type이 module인 상태에서는 require가 정의되지 않았다고
 * 오류가 노출된다.
 *
 * 그런데 spider monkey에서는 read() 가 있다.
 */
// let fs = require("fs");  // Node 14 미만에서는 type이 module이 아니라도 잘 될 것 같음..
import fs from 'fs';

let data = fs.readFileSync( './test.txt');
console.log(data.toString());

