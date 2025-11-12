function add_btn(){
    console.log("버튼이 클릭되었습니다.");
    // 입력된 값을 저장
    const newTask = document.querySelector('.add_task').value;
    console.log(newTask);
    // 입력된 값을 li로 추가
    const taskItem = document.createElement('li');
    taskItem.textContent = newTask;
    // 체크박스 추가 함수
    taskItem.addInput = function(){
        // 체크박스 생성
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // 체크박스를 li의 앞에 추가
        taskItem.prepend(checkbox);
        // 체크박스 상태에 따른 효과
        if(this.querySelector('input').checked){
            // 체크 상태일 경우 취소선 효과
            this.style.textDecoration = 'line-through';
            // 아닐경우 아무런 효과 없음
        } else {
            this.style.textDecoration = 'none';
        }
        // 체크박스 상태 변경시 효과 적용
        // 이벤트 리스너로 실시간으로 li에 반영
        checkbox.addEventListener('change', function(){
            if(this.checked){
                taskItem.style.textDecoration = 'line-through';
            } else {
                taskItem.style.textDecoration = 'none';
            }
        }); 
    }
    // 체크박스 추가 함수 호출
    taskItem.addInput();
    // ul에 li 추가
    document.querySelector('.task_list').appendChild(taskItem);
}