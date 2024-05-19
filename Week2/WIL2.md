2024-1-Web-Study WIL2
============================

* ## JavaScript의 DOM 접근 및 적용
    * ### DOM(Document Object Model)
        * 웹페이지(HTML, XML 문서)의 콘텐츠 및 구조, 스타일 요소 등을 구조화시켜, 프로그래밍 언어(JavaScript 등)가 해당 문서에 접근해 읽고 조작할 수 있도록 API를 제공하는 인터페이스
    * ### JavaScript의 DOM 접근
        * JavaScript로 DOM에 접근하려면, 다음 메서드를 이용해 접근할 수 있다.
  
        |메서드|상세|
        |:---:|:---:|
        |document.getElementById("id")|해당 id명을 가진 요소 하나를 리턴한다. |
        |document.querySelector("선택자")|해당 선택자를 만족하는 요소 하나를 리턴한다.|
        |document.getElementsByClassName("class명")[순서]|해당 class명을 가진 요소들을 배열에 담아, 인덱스에 맞는 요소를 리턴한다.|
        |document.getElementByTagName("tag명")[순서]|해당 tag명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 리턴한다.|
        document.querySelectorAll("선택자명")[순서]|해당 선택자를 만족하는 모든 요소들을 배열에 담아 인덱스에 맞는 요소를 리턴한다.|

* ## JavaScript Engine
    * ### JavaScript Engine
        * JavaScript 코드를 실행하는 인터프리터, 또는 프로그램
        * 주로 웹 브라우저에서 사용된다.
    * ### JavaScript Engine의 동작 원리
        * Call Stack과 Memory Heap을 이용해 데이터나 코드 실행을 관리한다.
        * Call Stack
            * 코드를 읽어가면서 수행할 작업들을 Stack에 하나씩 쌓고, Memory Heap에서 작업을 수행하는 데에 필요한 것들을 찾아 작업을 수행한다.
        * Memory Heap
            * 메모리 할당이 이뤄지는 공간
            * 참조타입(객체, 배열 등) 데이터가 저장되는 공간이다.

* ## inline CSS
    * ### inline CSS
        * HTML 요소의 style 속성을 이용해 스타일을 지정하는 방법
        ```
        <p style="color: red; background-color: black">inline CSS</p>
        ```
        * 다른 스타일 지정 방식보다 우선순위가 높아, 덮어쓰기가 용이하다.
    * ### inline CSS의 단점
        * 스타일을 수정하려면, 해당 스타일에 해당한는 모든 HTML 요소를 수정해야 하므로, 유지보수가 어렵다.

* ## GDSC Hongik! 웹페이지에 간단한 기능 만들기
    * 웹페이지에 버튼을 추가해, 버튼을 누를 때마다 웹페이지의 title의 색상이 변화하도록 기능을 추가했다.
    * 'index.html', 'script.js' 파일 참고
