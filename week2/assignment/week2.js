/*local Storage 사용법 -> 문자열만 저장됨!
key,value 저장하고(setItem) 
value 읽고(getItem) 
item 삭제하고(removeItem) */

import { members } from "./data.js";

// 데이터를 localStorage에 저장
export function saveMembersData() {
    localStorage.setItem('membersData', JSON.stringify(members));
}

// 데이터 읽기
export function getMembersData() {
    const membersData = JSON.parse(localStorage.getItem('membersData'));
    console.log(membersData);
    return membersData;
}
