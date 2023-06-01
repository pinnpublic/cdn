# Example CDN

This is a class library repository.

<br>

## CDN

Copy the following code and add it to the &lt;head&gt; tag of your html document.

```html
<link rel="stylesheet" href="https://me2.do/5BvBFJ57">
```
<!-- 
full version
&lt;link rel="stylesheet" href="https://me2.do/xmPHeA6J"&gt;
-->

<br>

## Google Icons

[link] https://fonts.google.com/icons

<br>

## Usage

### Basic

- 구글 아이콘 기본 적용(https://fonts.google.com/icons)
- 웹 폰트 기본 적용(GmarketSansMedium)
- 문서는 특정 너비(narrow(500px), default(800px), wide(1200px))의 중앙 정렬 한다.
- 반응형 지원 X

### Document Basic Structure

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <link rel="stylesheet" href="https://me2.do/5BvBFJ57">
</head>
<body>
    <h1>Main Title <small>Sub Title</small></h1>

    <div>Contents</div>

</body>
</html>
```


### Body

문서 너비를 조절한다.

- `<body class="XXX">` : 800px
- `<body class="XXX" class="narrow">` : 500px
- `<body class="XXX" class="wide">` : 1200px

``` html
<body class="narrow">
```


### Heading

제목을 표시한다.

- 1단계 제목
    - `<h1>Title</h1>`
    - `<h1>Title <sub>Sub Title</sub></h1>`
- 2단계 제목
    - `<h2>Title</h2>`
    - `<h2>Title <sub>Sub Title</sub></h2>`
- 3단계 제목
    - `<h3>Title</h3>`
    - `<h3>Title <sub>Sub Title</sub></h3>`

``` html
<h1>게시판 <small>목록보기</small></h1>
```    

1단계 제목에는 아이콘을 삽입할 수 있다.

- `<h1 class="main">Title</h1>` : 메인 페이지
- `<h1 class="sub">Title</h1>` : 서브 페이지
- `<h1 class="page">Title</h1>` : 일반 페이지

``` html
<h1 class="main">토이 프로젝트 <small>JSP Model 2</small></h1>
```

### Form Controls

컨트롤의 모양을 지정한다.

크기(너비)를 지정할 수 있다. 대상: `<input>`, `<select>`, `<button>`, `<textarea>`

-  `<input>` : width(User Agent)
-  `<input class="short">` : width(100px)
-  `<input class="long">` : width(350px)
-  `<input class="full">` : width(100%)

``` html
<input type="text" name="name" class="short" placeholder="이름 입력">
<input type="text" name="tel" class="long" placeholder="연락처 입력">
<input type="text" name="tel" class="full" placeholder="주소 입력">
```

메인 버튼에 색상을 지정할 수 있다. 

- `<input type="button">`
- `<input type="submit">`
- `<button>`

``` html
<input type="button" class="primary">
```

이미지 버튼

- `<button>버튼</button>`
- `<button class="in">회원가입</button>`
- `<button class="out">회원탈퇴</button>`
- `<button class="login">로그인</button>`
- `<button class="logout">로그아웃</button>`
- `<button class="add">쓰기</button>`
- `<button class="back">돌아가기</button>`
- `<button class="list">목록보기</button>`
- `<button class="del">삭제하기</button>`
- `<button class="edit">수정하기</button>`
- `<button class="reply">답변하기</button>`
- `<button class="comment">댓글달기</button>`



### Label Control

라벨이 있는 입력 도구를 만든다.(feat.텍스트박스)

``` html
<div class="group">
    <label>아이디</label>
    <input type="text">
</div>
```


### Button Group

버튼 그룹을 만든다.(feat.input, button)

``` html
<div class="group">
    <input type="button" value="확인">
    <input type="button" value="취소">
</div>

<div class="group">
    <button class="add">글쓰기</button>
    <button class="list">목록보기</button>
</div>
```


### Table

테이블 서식을 지정한다.

기본 설정

- 테두리(1px)
- 너비(100%)
- header : background color(#EFEFEF)

``` html
<table>
    <tr>
        <th>column</th>
        <th>column</th>
        <th>column</th>
    </tr>
    <tr>
        <td>cell</td>
        <td>cell</td>
        <td>cell</td>
    </tr>
    <tr>
        <td>cell</td>
        <td>cell</td>
        <td>cell</td>
    </tr>
</table>
```

- 세로 모드 : `<table class="vertical">`

``` html
<table class="vertical">
    <tr>
        <th>column</th>
        <td>cell</td>
    </tr>
    <tr>
        <th>column</th>
        <td>cell</td>
    </tr>
    <tr>
        <th>column</th>
        <td>cell</td>
    </tr>
</table>
```


### Panel

영역을 표시한다.

``` html
<div class="panel long" title="Subject">
    Content
</div>
```


너비를 지정한다.

- `<div class="panel">Content</div>`
- `<div class="panel short">Content</div>`
- `<div class="panel long">Content</div>`


### Badge

배지를 표시한다.

``` html
<span class="badge right red">5</span>
```

방향 지정

- `<span class="badge" class="left">5</span>`
- `<span class="badge" class="right">5</span>`

색상 지정

- `<span class="badge" class="red">5</span>`
- `<span class="badge" class="yellow">5</span>`
- `<span class="badge" class="blue">5</span>`

### Seperate

컨테이너의 두 요소를 좌우로 분리 정렬한다.

``` html
<div class="seperate">
    <div>자바</div>
    <div>오라클</div>
</div>
```


### List

목록을 만든다.

``` html
<div class="list">
    <div>item</div>
    <div>item</div>
    <div>item</div>
</div>

<div class="list full">
    <div>item</div>
    <div>item</div>
    <div>item</div>
</div>
```

### Programming Code

코드를 삽입한다.

``` html
<pre class="code">
    int a = 10;
    System.out.println(a);
</pre>
```

---

created by in. 2023.06