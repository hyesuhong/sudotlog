---
title: 블로그 제작 회고
description: ''
date: 2024-07-09
isDraft: false
tags:
  - Blog
  - 'Next.js'
  - 회고
  - '블로그 제작'
  - '기술 블로그'
---

## 제작 이유

저는 직접 만드는 것에 마음을 크게 쓰는 편입니다. Velog를 이용하기는 했지만,
'써야 한다'라는 심리적 압박만 있을 뿐 마음이 가지는 않아 글을 많이 작성하지는
않았습니다.

노션에만 간직하던 문제 해결 방식이나 학습한 내용 등을 다듬어 블로그화 하고
싶었습니다. 이를 **꾸준히** 하려면 블로그를 직접 만들 필요가 있었습니다.

## 개발에 앞서 정해야 할 것들

### 기술 스택

다른 블로그를 찾아보며 어떤 기술들을 주로 사용하는지 확인했습니다.

- Github pages + Jekyll
- Gatsby (+ GraphQL)
- Next.js + md(mdx) (+ Contentlayer)
- Astro + md(mdx)

검색하고 확인한 결과를 바탕으로 다음과 같은 조건을 따져 스택을 정했습니다.

- Markdown 문법을 사용할 것
- 현재 현업에서 많이 사용하는 기술일 것
- 커스터마이징이 자유로울 것

조건들을 따져봤을 때 Next.js로 만드는 것이 가장 적합해 보였고, Next.js로 개발을
진행했을 때의 이점이 가장 많다고 생각되었습니다.

1. `Next.js 14` + `App router`를 연습할 수 있는 좋은 기회
2. md 혹은 mdx 파일을 읽어서 html 요소로 컨버팅하는 작업 경험
3. SEO 적용

Next.js를 연습하는 목적이 더해졌으니, 템플릿을 사용하기보다 처음부터 직접
만들어보기로 했습니다.

### 기능

구현하고자 했던 기능들을 정해보았습니다.

- [x] 목차
- [ ] 목차 인디케이터
- [x] 코드블럭 + 복사
- [x] 댓글

> 체크된 기능은 글을 작성하고 있는 시점(2024.07.09)에서 개발 완료된 기능입니다.

### 디자인

처음에는 전체 화면을 사용하고, 효과도 많은 디자인으로 작업을 했습니다. 그런데
[평안님](https://bepyan.me), [Guillermo Rauch](https://rauchg.com),
[leerob](https://leerob.io)의 블로그를 보고 **약간은 정적이고, 미니멀한
디자인**이 블로그에 더 적합한 디자인인 것 같아 변경하게 되었습니다.

디자인을 변경 이슈가 있었다 보니, 디자인에서 가장 오랜 시간을 쏟았던 것
같습니다.

## 마주한 문제들

개발을 하면서 만났던 문제들과 해결(할/한) 방법들입니다.

### Toc tree 만들기

md(x) 파일에서 frontmatter 요소를 읽기 위해 `gray-matter`를 사용하고 있습니다.
frontmatter를 제외한 나머지 내용 전체를 **문자열**로 반환하는데, 목차를 위해
문자열에서 heading 요소를 추출해 tree 형식으로 만들어야 했습니다.

먼저 헤딩의 타입을 다음과 같이 정의했습니다.

```ts
type Heading = {
	depth: number;
	text: string;
	slug: string;
	sub?: Heading[];
};
```

전체 문자에서 `#`이 1개 이상 포함하고 있는 텍스트를 필터링한 뒤, `#`의 갯수를
depth라는 정보로 치환해 배열을 먼저 만들었습니다. 그리고 반복문과 `Map`을 사용해
트리 형식으로 변환하고 toc 컴포넌트에서 활용할 수 있도록 반환했습니다.

### Giscus script 삽입 이슈

Giscus를 사용하기 위해 스크립트를 삽입해야 했습니다.

처음에는 Next.js의 `Script` 컴포넌트를 사용했으나, 해당 컴포넌트가 가장 처음
렌더링될 때만 적용이 되고 페이지가 변경되면 iframe이 로드되지 않는 문제가
있었습니다.

> Next.js will ensure the script will **only load once**, even if a user
> navigates between multiple pages.

공식 문서에서 해당 문구를 제대로 확인하지 못해 Script 컴포넌트의 특성을 인식하지
못한 문제였습니다. `/post/[slug]` 페이지가 렌더링될 때마다 Giscus iframe을
삽입해야 했기 때문에 Script 컴포넌트 대신 script를 직접 삽입하도록 변경했습니다.

## 글을 맺으면서

아직 추가할 기능이 남아있고, 이런저런 일로 인해 제작하는 데 생각보다 시간이 오래
걸린 것이 조금 아쉽습니다. 그렇지만 꼭 만들고 싶던 블로그를 제작했다는 것이 꽤
보람찬 경험이었습니다.<br/>잘 마무리하고 꾸준히 게시물을 작성하도록
노력해야겠습니다 :)