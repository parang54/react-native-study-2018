# Chapter 1. 리액트 기초 다지기

> 책의 내용이 워낙 요약된 내용이라 그걸 다시 요약하는게 참 어렵습니다. 발표를 준비하면서 책에서 준비한 예제로는 reactjs를 이해하는데 많이 부족합니다.

> 따라서, 제일 밑에 참고자료로 관련 강좌를 따라해보는 것이 제일 좋을 것 같습니다.

> reactjs가 처음이라면 [velopert님 reactjs 강좌](https://velopert.com/reactjs-tutorials)를 따라해보길 권해드립니다.

리액트 네이티브는 리액트 기반의 라이브러리입니다. 리액트 네이티브를 이해하고 개발하기 위해서는 리액트(ReactJS)를 알아야 합니다. 

1장에서 살펴볼 개념들은 다음과 같습니다.
* JSX
* 리액트 컴포넌트
* 컴포넌트 조합
* 컴포넌트 속성
* 이벤트 처리
* 컴포넌트 상태
* 컴포넌트 생명주기
* 컴포넌트 유형

> 1장은 리액트 라이브럴리의 원래 목적인 웹을 위한 리액트에 초점을 맞추며, 리액트를 잘 알고 있다면 안심하고 1장을 건너뛰고 2장부터 시작해도 됩니다.

> 편의상 요약내용 작성할때 높임말은 생략합니다. 

### ReactJS란?

#### 프레임워크 또는 라이브러리

리액트는 프레임워크가 아닌 라이브러리라는 말을 쓴다. 이렇게 좀더 가벼운 표현을 쓰는 이유는 리액트가 애플리케이션 개발에 필요한 모든 사항을 지원하는 솔루션이 아니기 때문이다. 리액트에는 내부상태를 관리하는 메커니즘이 있지만, 데이터 흐름과 관리, 서버와의 통신, 라우팅 등에 대한 해법은 제시하지 않는다.

따라서 리액트는 흔히 다른 라이브러리와 결합하여 사용한다. 아래에는 분야별로 리액트와 결합하여 사용하는 라이브러리를 적어놨지만, 언제든지 다른 라이브러리로 대체하여 사용해도 무방하다.
* 데이터 흐름과 관리 : redux, middleware(redux-thunk, redux-saga)
* 서버와의 통신 : axios, promise 등
* 라우팅 : react-route

#### 리액트 탄생의 배경

리액트는 점점 거대해지고 복잡해지는 자바스크립트 애플리케이션을 물들이는 가장 짜증나고, 만연한 이슈에 대한 엄청난 반항 또는 반응의 결과다. 리액트라는 이름은 반응, 즉 리액션(reaction)을 따서 지어졌다.

리액트의 기본적인 빌딩 블록은 컴포넌트다. 

리액트는 느린 속도로 악멱높은 DOM(Document Object Model)을 가상DOM(Vitual DOM)이라는 해법을 제시한다. 모든 변경사항을 가상DOM이라는 메모리상의 DOM에서만 수행하고, 최소한의 변경사항만을 추린 후 실제 DOM에 반영한다.

이는 연이은 변경사항들을 한번에 처리할 수 있는 매우 효율적인 방법이며, 사용자가 느낄 수 있는 수준의 큰 성능 효과를 가져온다.


### 리액트 시작하기

> 이 책은 리액트 네이티브를 공부하기 위한 책으로 실제 실습하기에는 부족한 부분이 있다.

#### Web Page에 React 추가하기

ReactJS는 자바스크립트 라이브러리이므로 간단히 웹페이지에 추가할 수 있다.
방법은 아래 링크를 통해 확인이 가능하다.

* Add react in one minute
    
	https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute


#### create-react-app 사용하기

create-react-app 명령어 인터페이스를 설치하면 편리하게 reactjs 웹앱을 시작할 수 있다.

```
	npm install -g create-react-app
```

* react 앱 만들기
create-react-app 명령어 뒤에 App의 이름을 입력하면 현재디렉토리 기준으로 하위 디렉토리가 App Name으로 생성되고, 거기서 react 앱 개발을 시작하면 된다.
> App Name은 대문자를 입력할 수 없으니 CamelCase로 입력하지말고 kebab-case로 입력한다.

```
	create-react-app <App Name>
```


이번장에서 실습할 react app은 NewsFeed이다. 앱생성은 아래와 같이 명령어를 입력해준다.
```
	create-react-app news-feed
```


### JSX

JSX는 HTML과 비슷한 문법으로 만들어졌지만, JavaScript XML(JSX)이다.
아래 JSX는 완전히 HTML과 같은 문법이다. 

JSX는 Babel과 같은 툴로 브라우저에서 동작하는 자바스크립트 코드로 변환하여 사용한다.

* Babel REPL : https://babeljs.io/repl/
* JSX

    ```
    <h1>
      Hello World!
    </h1>
    ```

* Babel에서 변환한 자바스크립트 코드

    ```
    "use strict";
    
    React.createElement(
      "h1",
      null,
      "Hello World!"
    );
    ```

HTML에서는 스스로 닫히는 태그의 경우 마지막에 슬래시가 있어도 되고, 없어도 된다.
JSX에서는 XML과 마찬가지로 반드시 슬래시가 있어야 한다.

```
	HTML : <img src="my/image.jpg">
	JSX : <img src="my/image.jpg"/>
```

JSX는 class라는 키워드를 className으로 사용해야 한다.
```
	HTML : <div class="news-item">
	JSX : <div className="news-item">
```

JSX에서는 자바스크립트를 마크업 사이에 끼워 사용할 수 있다.
```
	HTML : <div styles="background: green; color: red;">
	JSX : <div styles={{background: 'green', color: 'red'}}>	
```
    
* 스타일 속성의 값으로 중괄호가 2개씩 사용됐음에 주목하자. 바깥쪽 중괄호는 안에 포함된 코드가 자바스크립트임을 나타낸다. 안쪽 중괄호는 CSS 스타일 속성 이름과 값을 담고 있는 자바스크립트 객체 리터럴(Object literal)이다.
	

속성값 외에도 JSX 태그 사이의 내용에도 자바스크립트를 쓸 수 있다.
```
	HTML : <span>Hello World!</span>
	JSX: <span>{'Hello' + 'World!'}</span>
```

JSX에서는 정의한 컴포넌트를 그 자체로 JSX 마크업으로 사용할 수 있다.
```
<NewsItem>
	Hello React!
</NewsItem>
``` 

### 리액트 컴포넌트

리액트 애플리케이션은 서로 조합이 가능한, 모듈화된 컴포넌트를 사용해 만든다. 컴포넌트는 비주얼 인터페이스에 해당하는 부분을 나타내며, 그렇게 렌더링 된다. 

컴포넌트를 만들 때 다음과 같이 ES2015의 클래스 문법을 사용한다.
```
import React, { Component } from 'react';

class Title extends Component {

	render() {
		return (
			<h1>
				Hello World!
			</h1>
		);
	}
}

// 다른 jsx파일에서 이 컴포넌트를 사용하도록 허용하기 위헤 export를 해야한다.
export default Title;
```

### 컴포넌트 조합
리액트는 상속보다는 조합을 선호한다. 요컨대 이는 복잡한 컴포넌트나 파생 컴포넌트를 만들 때 객체지향에서의 상속과 같은 방식이 아닌, 간단한 여러 빌딩 블록을 조합하는 방식으로 복합적인 컴포넌트를 만들라는 의미다.

```
import React, { Component } from 'react';

class NewsItem extends Component {
	render() {
		return (
			<div className="news-item">
				<Image />
				<Title />
				<Byline />
				<Description />
			</div>
		);
	}
}
```


### 컴포넌트 속성

항상 같은 내용을 렌더링하는 정적인 컴포넌트만 사용한다면 평범한 HTML로도 할 수 있기 때문에, reactjs를 사용할 이유가 없다.

그러나 리액트는 속성(props)을 사용해 컴포넌트를 동적으로 만드는 메커니즘을 제공한다.

#### 속성 받기
props는 상위 컴포넌트에서 전달되고, 불변(immutable)속성을 가지고 있어서 변경할 수 없다. `this.props.XXX`의 형태로 사용이 가능하고, 여기서 XXX가 속성이름이 된다.

Title컴포넌트를 살펴보면 render()함수에 `{this.props.titleText}`로 상위 컴포넌트에서 타이들에 `titleText`를 전달받은 값을 표시하고 있다.

```
import React, { Comport } from 'react';

export default class Title extends Component {
	render() {
		return (
			<h1>
				{this.props.titleText}
			</h1>
		);
	}
}
```

#### 속성 전달

속성을 받을 수 있는 컴포넌트를 정의했다면, 다음 단계는 그 컴포넌트에 속성을 전달하는 일이다.

```
	<Title
		titleText="Hello World!"
		highlighted={true}
		fontSize={18}
	/>
```
위 코드를 보면 Title 컴포넌트에 `titleText`, `highlighted`, `fontSize` 속성을 전달한다.

문자열은 속성에 직접 전달할 수 있지만 다른 타입의 값은 자바스크립트 객체로 전달한다.


#### 속성 타입
컴포넌트에 속성 타입(PropTypes)을 정의하는 일은 이 컴포넌트가 어떤 속성을 받으며 그 속성값의 타입은 무엇이어야 하는지를 다른 개발자에게 공식적으로 알리는 방법이다.

Title컴포넌트에서 titleText에 대한 속성의 타입을 지정하려면 이렇게 사용한다.
```
Title.propTypes = {
	titleText: PropTypes.string
};
```
`titleText`가 `string`타입의 속성이라는 것을 **명시적으로 표시**한다.

**이렇게 명시적으로 propTypes를 지정한 후 타입이 맞지 않을 경우, 컴파일단계에서 에러를 확인할 수 있다.**


책에서 소개한 방법대로 진행하면 아래와 같은 에러메세지를 볼 수 있다.

> React.PropTypes is deprecated since React 15.5.0, use the npm module prop-types instead  react/no-deprecated

> 기존에는 React.PropTypes라는 방식을 사용했지만 React v15.5 부터 prop-types라는 npm을 통해 해결한다.

* 설치방법
```
	npm install --save prop-types	
```

* 선언부 변경
```
import PropTypes from 'prop-types';
```

보다 자세한 내용은 아래 포스트를 참고한다.
* prop-typs
    * Medium 포스트 : https://medium.com/@sangboaklee/react-proptypes-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-7a0615da236

#### 기본 속성값

컴포넌트를 작성할때 상위 컴포넌트에서 값을 넘겨주지 않을 때를 대비하여 기본값을 아래 코드와 같이 지정할 수 있다.
```
Title.defaultProps = {
	textTitle = 'Hello World!',
	highlighted: false,
	fontSize: 18
}
```

#### Props.children
모든 컴포넌트에는 children이라는 특별한 선택적 속성이 있다.

```
/* Title 컴포넌트 */
<Title>
	Hello World
</Title>


/* Title 컴포넌트에서 children 속성 사용 */
	render() {
		return (
			<h1>
				{this.props.children}
			</h1>
		);
	}
	
	
/* 리액트 엘리먼트도 여는태그와 닫는 태그사이에 넣어 전달할 수 있다. */	
<Title>
	Hello World!
	<img src="icon.png" />
</Title>	

/* children 속성을 검증할 때는 node라는 PropTypes를 사용할 수 있다. */
Title.propTypes = {
	children: PropTypes.node.isRequired
}
```

### 이벤트 처리

사용자 이벤트에 응답하는 함수를 이벤트 핸들러(event handler) 또는 이벤트 리스너(event listener)라고 한다.

#### 자바스크립트 이벤트 처리
간단한 자바스크립트 애플리케이션에서는 원하는 DOM 엘리먼트를 찾아 이벤트 리스너를 추가해서 이벤트가 발생했을 때 실행되도록 할 수 있다.

```
<script>
document.querySelector('form').addEventListener('click', validateForm);

function validateForm() {
	alert('The form is valid!');
}
</script>
```

초창기 자바스크립트 시절에는 특정 엘리먼트에 대한 사용자 이벤트에 응답하기 위해 HTML의 이벤트 속성을 사용하기도 했다.
```
<form onsubmit="validateForm()">
	...
</form>
```

#### 리액트에서 이벤트 처리

리액트에서의 이벤트 처리는 과거 인라인 방식의 자바스크립트와 더 닮았다.
```
<form onSubmit={validateForm}>
	...
</form>
```

NewsItem 예제에서 이벤트 처리는 아래 코드와 같다.
```
export default class NewsItem extends Component {

  ...

  /* onClick 이벤트 처리 */
  onClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <div
        className="news-item"
        onClick={this.onClick}
      >
  		...
      </div>
    );
  }

}

```

### 컴포넌트 상태

상태는 컴포넌트 내부에 있으며, 보통은 화면에서의 시각적 효과와도 크게 결부돼 있다.
내부 상태에 접근할 때는 `this.state`를 사용한다.

스테이트 값을 변경하려면 `this.setState()`함수를 이용해 변경한다.
```
this.setState({
      expanded: !this.state.expanded
});
```

이런 식으로 setState를 사용해야 리액트가 내부 상태의 변경을 감지하고 새 내부 상태를 사용하는 렌더링을 새롭게 시작한다. 따라서 다음과 같이 컴포넌트의 state를 직접 조작하는 일은 절대로 하면 안된다.

```
// 이렇게 하지 말 것
this.state.expanded = false;
```

내부상태를 이용하면 NewsItem이 펼쳐진 상태로 있을 때만 특정 내용을 보여주는게 가능하다.

```
import React, { Component, PropTypes } from 'react';
import Title from './Title';


const Byline = () => <h3>Byline component..</h3>
const Description = () => <h3>Description component..</h3>
const Image = () => <h3>Description component..</h3>

export default class NewsItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderBody() {
    /* 현재 컴포넌트의 expanded 상태를 확인하여 Body를 렌더링하려고한다.*/
    if (this.state.expanded) {
      return (
        <div>
          <Byline />
          <Description />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div
        className="news-item"
        onClick={this.onClick}
      >
        <Image />
        <Title
          highlighted
        >
          {this.props.titleText}
        </Title>
        {this.renderBody()}
      </div>
    );
  }

}

NewsItem.propTypes = {
  titleText: PropTypes.string.isRequired
};

```

### 컴포넌트 생명주기

모든 리액트 컴포넌트는 DOM으로 렌더링되는데 이때 렌더링 전과 후의 일련의 단계를 거친다.

아래 그림과 같이 컴포넌트 생명주기(component lifecycle)를 후킹해 특정 단계에서 어떤 작업을 수행하거나 조건을 확인하는 등의 작업을 할 수 있다.



![컴포넌트 생명주기](https://velopert.com/wp-content/uploads/2016/03/Screenshot-from-2016-12-10-00-21-26-1.png)

> 출처 : [velopert님 reactjs 강좌](https://velopert.com/reactjs-tutorials)에서 가져왔습니다.

> 컴포넌트 생명주기 강좌 url : https://velopert.com/1130

그림에 나와있는 생명주기가 각 생명주기별 사용할 수 있는 함수 이름이다.

```
// 생명주기 중 constructor 사용 예
constructor() {
	super(props);
}
```

### 컴포넌트 유형

리액트에서는 컴포넌트를 정의하는 세 가지 방법이 있다.
* React.createClass
* 함수형 컴포넌트
* class로 선언된 컴포넌트

#### React.createClass
책에 기술된 내용 참고.

#### 함수형 컴포넌트

내부 상태를 유지하지 않는 단순한 컴포넌트의 경우 간단히 함수형으로 정의할 수 있다.

```
const Title = (props) => (
	<h1>
		{props.children}
	</h1>
);
```

#### class로 선언된 컴포넌트

내부 상태를 유지하고, 각종 이벤트를 처리할 필요가 있을 때 class로 선언하여 컴포넌트를 정의한다.React.Component를 상속받아 class로 선언하고, 지금까지 예제로 사용했던 형식이다.


### 참고자료

* reactjs 강좌 추천
    * velopert reactjs강좌 : https://velopert.com/reactjs-tutorials
	* reactjs 공식사이트 : https://reactjs.org/
	* reactjs 공식튜토리얼(한글번역) : https://brunch.co.kr/@hee072794/72
	
* react 성능 최적화하기 : https://medium.com/@ljs0705/react-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0-bdd041bf9f1f