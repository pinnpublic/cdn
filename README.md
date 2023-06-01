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
- 문서는 특정 너비(narrow(500px), default(800px), wide(1200px))의 중앙 정렬을 한다.

### &lt;body&gt;

문서의 너비를 조절한다.

- `<body class="XXX">` : 800px
- `<body class="XXX" class="narrow">` : 500px
- `<body class="XXX" class="wide">` : 1200px

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

### Heading

- 1단계 제목
    - `<h1>Title</h1>`
    - `<h1>Title <sub>Sub Title</sub></h1>`
- 2단계 제목
    - `<h2>Title</h2>`
    - `<h2>Title <sub>Sub Title</sub></h2>`
- 3단계 제목
    - `<h3>Title</h3>`
    - `<h3>Title <sub>Sub Title</sub></h3>`

1단계 제목에는 아이콘을 삽입할 수 있다.

- `<h1 class="main">Title</h1>` : 메인 페이지
- `<h1 class="sub">Title</h1>` : 서브 페이지
- `<h1 class="page">Title</h1>` : 일반 페이지

### Form Controls

크기(너비)를 지정할 수 있다. `<input>`, `<select>`, `<button>`, `<textarea>`

-  `<input>` : width(User Agent)
-  `<input class="short">` : width(100px)
-  `<input class="long">` : width(350px)
-  `<input class="full">` : width(100%)

