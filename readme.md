# 3장 스타일과 레이아웃

- CSS와 비슷하다.
- 레이아웃을 구성하는 방법으로 CSS의 float에 의존하지 않고 **플렉스박스**라는 레이아웃 시스템을 이식했다.



**react-native 설치 및 실행**

1. `react-native init project-name `
2. `react-native run-ios`



## 스타일 구성과 적용

### 인라인 스타일

HTML과 마찬가지로 리액트 네이티브에서도 style 속성값을 인라인으로 지정할 수 있다.

```jsx
<View style={{ backgroundColor: 'bule', 
               flex: 1, 
               justifyContent: 'center', 
               alignItems: 'center' }}>
	<Text style={{ color: '#fff', fontSize: 22 }}>Hello World</Text>
</View>
```

- style은 **자바스크립트 객체**로 전달
- View == div
- Text == label



### 스타일 객체

위와 같은 인라인방식으로 객체를 생성해도 되지만, 외부에 객체를 선언하고 참조하는 방법도 가능하다.

```jsx
const DemoComponent = () => {
    <View style={viewStyles}>
    	<TouchableHighlight style={[btn, btnPrimary]}>
        	<Text>Submit</Text>
        </TouchableHighlight>
    </View>
}

const viewStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}

const btn = {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
};

const brnPrimary = {
    backgroundColor: '#60b044',
    borderColor: '#5ca941'
}
```

- 스타일을 객체를 배열로 정의함으로써 여러 스타일을 조합

  `[btn, btnPrimary]` == `Object.assign(btn, btnPrimay)`



## 스타일시트

StyleSheet 객체를 이용하여 스타일을 정의하면,  에러가 있을경우 에러내용을 출력해준다.

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5
  }
});

/*const styleWithError = StyleSheet.create({
  container: {
    flex: 1,
    madeUpStyleRule: 'thiswillfail'
  }
});*/
```



## 상속 없는 스타일링

CSS 의 경우 부모 노드의 스타일을 상속 받는다.(color, font-size)

 -> 스타일 재정의 지옥

리액트 네이티브는 스타일을 상속하지 않는다. 스타일을 재사용할 수 있도록 컴포넌트로 만든다.

```jsx
const Button = ({ style, children, ...otherProps }) => (
  <TouchableHighlight
    style={[buttonStyles.core, buttonStyles.hairlineBorder, style]}
    {...otherProps}
    underlayColor="#efefef"
    activeOpacity={0.8}
  >
    {children}
  </TouchableHighlight>
);
```





## 박스 모델과 플렉스박스

CSS의 **플렉스박스 모델**을 리액트 네이티브도 지원한다.



### 박스 모델

리액트 네이티브는 padding, width, height, border, margin등 웹에서의 박스 모델에 영향을 미치는 모든 속성에 관해 스타일링할 수 있게 해준다. 

다음은 리액트 네이티브 컴포넌트의 기본 구현에 상응하는 CSS다.

```css
div, span{
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
    align-content: flex-start;
    border: 0 solid black;
    margin: 0;
    padding: 0;
    min-width: 0
}
```



### 박스 모델 데모 1

```jsx
const BoxModelDemo = () => (
  <View style={styles.main}>
    <Text style={styles.content}>Column 1</Text>
    <Text style={styles.content}>Column 2</Text>
    <Text style={styles.content}>Column 3</Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  }
});
```

- flexDirection이 `row` 이지만 옆으로 정렬된다. 원래 flex가 이런건가요?
- 마진을 넣어보자.



### 플렉스박스

플렉스 박스의 아이템 정렬 방법을 도식화

![img1](/Users/taehwanpark/Documents/workspace/study/react-native/chapter3/img1.png)

- flexDirection: main axis
  - column: y축
  - row: x축
- alignItems: cross axis
- justifyContent: 메인 축을 따라 아이템을 배치



### 크기조절

#### flexBasis

엘리먼트의 크기를 메인축(*flexDirection*)과 부합해 설정한다.

```javascript
if( flexDirection === 'row' ) width = flexBasis
else if( flexDirection === 'column' ) height = flexBasis
```



#### flexGrow

```javascript
const height = 667;
const item1 = {
    height: 50,
    realHeight: undefined
}

const item2 = {
    height: 50,
    flexGrow: 1,
    realHeight: undefined
}

const item3 = {
    height: 50,
    flexGrow: 2,
    realHeight: undefined
}

const itemsHeight = item1.height + item2.height + item3.height;
const sumGrow = item2.flexGrow + item3.flexGrow;

item1.realHeight = item1.height;
item2.realHeight = item2.height + (height - itemsHeight) * (item2.flexGrow / sumGrow)
item3.realHeight = item2.height + (height - itemsHeight) * (item3.flexGrow / sumGrow)

console.log(item1.realHeight + item2.realHeight + item3.realHeight)
```





## 텍스트 스타일링

중첩된 Text 엘리먼트의 경우엔 스타일이 상속 된다.

```jsx
const BasicType = () => (
  <Text style={styles.headline}>
    Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
    <Text style={styles.subheader}>This is <Text style={styles.bold}>so cool!</Text> </Text>
  </Text>
);
```

- 버튼 예제에서 사용하듯이 Text 컴포넌트도 캡슐화를 통해 재사용 할 수 있다.



## 이미지 스타일링

Image 컴포넌트는 HTML의 img 엘리먼트와 CSS의 background 속성, 이 둘의 자질을 모두 갖는다.



- HTML의 img 엘리먼트처럼 사용하기
  - 프로젝트 안의 이미지 참조

    ```jsx
    <Image source={require('./images/pizza.jpg')} />
    ```

    

  - 원격 서버에 있는 이미지 참조

    ```jsx
    <Image source=source={{ uri: 'https://pixabay.com/static/uploads/photo/2014/11/08/17/05/pizza-522485_960_720.jpg' }}
           style={{ width: 150, height: 300 }}
    />
    ```

  실행하면 전 에러가 나요..ㅠ

- CSS의 background 속성처럼 사용하기

  Image 컴포넌트 아래에 다른 컴포넌트를 위치시키면 background 처럼 사용가능

  ```jsx
  const BackgroundImage = ({ menuItems }) => (
    <Image source={pizzaImage} style={styles.bg}>
      <View style={styles.content}>
        {menuItems.map((menuItem, i) => <MenuItem {...menuItem} key={i} />)}
      </View>
    </Image>
  );
  ```

  안됩니다.



## 스타일 조사와 디버깅

1. Cmd + D
2. Toggle Inspector



## 유사 미디어 쿼리 기능 추가

- Demensions 객체를 통해 width, height, scale 을 가져올 수 있음
- View 컴포넌트의 Onlayout 이벤트를 통해 디바이스의 모드 변환을 감지할 수 있음.