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

// 필터링 기능
document.querySelector('.search').addEventListener('click', (event) => {
    event.preventDefault();
    const filter = {
        name: document.getElementById('name').value,
        englishName: document.getElementById('eng-name').value,
        github: document.getElementById('github').value,
        gender: document.getElementById('gender').value,
        role: document.getElementById('role').value,
        firstWeekGroup: document.getElementById('week1').value,
        secondWeekGroup: document.getElementById('week2').value
    };
    populateTable(filter);
});

// 필터링 
function populateTable(filter = {}) {
    const membersData = getMembersData().filter(member => {
        if (filter.name && !member.name.startsWith(filter.name)) return false;
        if (filter.englishName && !member.englishName.startsWith(filter.englishName)) return false;
        if (filter.github && !member.github.startsWith(filter.github)) return false;
        if (filter.gender && filter.gender !== 'select-gender') {
            const genderFilter = 
                (filter.gender === '남자' || filter.gender === 'man') ? 'male' : 
                (filter.gender === '여자' || filter.gender === 'woman') ? 'female' : null;
            if (genderFilter && member.gender !== genderFilter) return false;
        }
        if (filter.role && filter.role !== 'select-role' && member.role !== filter.role) return false;
        if (filter.firstWeekGroup && parseInt(member.firstWeekGroup) !== parseInt(filter.firstWeekGroup)) return false;
        if (filter.secondWeekGroup && parseInt(member.secondWeekGroup) !== parseInt(filter.secondWeekGroup)) return false;

        return true;
    });

    // <tbody> 요소 가져오기
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // <tbody>를 비우기

    // 데이터를 반복하면서 각 멤버의 정보를 테이블에 추가
    membersData.forEach(member => {
        // 새로운 행(tr) 요소 생성
        const row = document.createElement('tr');

        // 체크박스 추가
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("check");
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // 각 정보를 셀(td)로 추가
        // 이름
        const nameCell = document.createElement('td');
        nameCell.textContent = member.name;
        row.appendChild(nameCell);

        // 영어 이름
        const englishNameCell = document.createElement('td');
        englishNameCell.textContent = member.englishName;
        row.appendChild(englishNameCell);

        // 깃허브
        const githubCell = document.createElement('td');
        githubCell.textContent = member.github;
        githubCell.style.textDecoration = 'underline'; // 스타일주기!
        githubCell.style.cursor = 'pointer';
        githubCell.addEventListener('click', () => {
            window.open(`https://github.com/${member.github}`, '_blank'); // 새 창에 열리기 _blank
        });
        row.appendChild(githubCell);

        // 성별
        const genderCell = document.createElement('td');
        genderCell.textContent = member.gender === 'male' ? '남자' : '여자';
        row.appendChild(genderCell);

        // YB 또는 OB 역할
        const roleCell = document.createElement('td');
        roleCell.textContent = member.role;
        row.appendChild(roleCell);

        // 1주차 금잔디조
        const firstWeekGroupCell = document.createElement('td');
        firstWeekGroupCell.textContent = member.firstWeekGroup;
        row.appendChild(firstWeekGroupCell);

        // 2주차 금잔디조
        const secondWeekGroupCell = document.createElement('td');
        secondWeekGroupCell.textContent = member.secondWeekGroup;
        row.appendChild(secondWeekGroupCell);

        // 생성한 행을 <tbody>에 추가
        tbody.appendChild(row);
    });

    // 개별 체크박스에 이벤트 추가
    document.querySelectorAll(".check").forEach((checkbox) => {
        checkbox.addEventListener("change", updateAllCheck);
    });
}

// 초기화 기능
document.querySelector('.reset').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('name').value = '';
    document.getElementById('eng-name').value = '';
    document.getElementById('github').value = '';
    document.getElementById('gender').value = 'select-gender';
    document.getElementById('role').value = 'select-role';
    document.getElementById('week1').value = '';
    document.getElementById('week2').value = '';

    populateTable(); // 모든 데이터 표시
});

// 페이지 로드 시 테이블을 채우는 함수 호출
document.addEventListener('DOMContentLoaded', populateTable);

// 전체 선택 체크박스
const allCheck = document.getElementById("check");
allCheck.onclick = () => {
    const checkboxes = document.querySelectorAll(".check");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = allCheck.checked; // allCheck 선택 시 모든 체크박스 선택 또는 해제
    });
};

// 개별 체크박스 상태에 따라 전체 선택 체크박스 상태 업데이트
function updateAllCheck() {
    const checkboxes = document.querySelectorAll(".check"); // 개별 체크박스들
    const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked); // 모든 체크박스 선택 여부 확인
    allCheck.checked = allChecked; // 모두 선택 시에만 allCheck 체크
}

// 선택 삭제 기능
const selectDelete = document.getElementById("selection-delete");
selectDelete.onclick = () => {
    const checkboxes = document.querySelectorAll(".check");
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.closest("tr").remove(); // 체크된 행 삭제
        }
    });

    updateAllCheck(); // 삭제 후 전체 선택 상태 업데이트
};
