/*local Storage -> 문자열만 저장됨! -> JSON
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

//이제 데이터를 테이블에 넣기
function populateTable() {
    // 데이터 불러오기
    const membersData = getMembersData();

    // <tbody> 요소 가져오기
    const tbody = document.querySelector('tbody');

    // <tbody>를 비우기
    tbody.innerHTML = '';

    // 데이터를 반복하면서 각 멤버의 정보를 테이블에 추가
    membersData.forEach(member => {
        // 새로운 행(tr) 요소 생성
        const row = document.createElement('tr');

        // 체크박스 추가
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("check")
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // 각 정보를 셀(td)로 추가
        //이름
        const nameCell = document.createElement('td');
        nameCell.textContent = member.name;
        row.appendChild(nameCell);
        
        //영어이름
        const englishNameCell = document.createElement('td');
        englishNameCell.textContent = member.englishName;
        row.appendChild(englishNameCell);

        //깃허브
        const githubCell = document.createElement('td');
        githubCell.textContent = member.github;
        row.appendChild(githubCell);

        //성별
        const genderCell = document.createElement('td');
        genderCell.textContent = member.gender === 'male' ? '남자' : '여자';
        row.appendChild(genderCell);

        //YB?OB?
        const roleCell = document.createElement('td');
        roleCell.textContent = member.role;
        row.appendChild(roleCell);

        //1주차 금잔디조
        const firstWeekGroupCell = document.createElement('td');
        firstWeekGroupCell.textContent = member.firstWeekGroup;
        row.appendChild(firstWeekGroupCell);

        //2주차 금잔디조
        const secondWeekGroupCell = document.createElement('td');
        secondWeekGroupCell.textContent = member.secondWeekGroup;
        row.appendChild(secondWeekGroupCell);

        // 생성한 행을 <tbody>에 추가
        tbody.appendChild(row);
    });
}

// 페이지 로드 시 테이블을 채우는 함수 호출
document.addEventListener('DOMContentLoaded', populateTable);


//체크박스 전체선택
const allCheck = document.getElementById("check");
allCheck.onclick = () => {
    const list = document.querySelectorAll(".check");
    list.forEach((checkbox) => {
        checkbox.checked = allCheck.checked;
    });
};
