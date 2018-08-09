# Chapter 2. 리액트 네이티브식 '헬로 월드!'

 

todo

- 이론 간단히

- 실행예재 생성 및 추가(아이콘등)

  ​



#### 모바일 앱 개발 환경의 이해

>모바일 앱 개발에 있어 주로 사용되는 두 가지 접근 방법이다. 하나는 각 플랫폼(iOS, Andorid) 대상의
>
>네이티브 앱을 개발하는 방법이며, 다른 하나는 웹 기술(Html, CSS, Javascript)을 사용해 웹뷰(WebView)
>
>로 감싸는 하이브리드 앱 개발방식이다.



##### 네이티브 앱 개발

- IOS : https://developer.apple.com/kr/

- Android: https://developer.android.com/

  ​

##### 하이브리드 앱 개발

``` java
//Android
public class MainActivity extends Activity {
    WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        startActivity(new Intent(this,IntroActivity.class));

        //WebView
        myWebView = (WebView) findViewById(R.id.webView1);
        myWebView.getSettings().setJavaScriptEnabled(true); // 자바스크립트를 사용 설정
        myWebView.loadUrl("http://google.com");             // 웹사이트 URL
        myWebView.setWebViewClient(new myWebViewClient());
    }
}
```



##### 어도비 폰갭

> 폰갭은 오픈소스인 아파치 코도바(Apache Cordova) 라이브러리를 기반으로 구축되었으며, HTML, CSS 자바스크립트로 개발한 웹 어플리케이션을 네이티브 컨테이너 안에 패키징하는 명령행 인터페이스를 제공한다.
>
> https://cordova.apache.org/docs/ko/latest/guide/overview/



##### 아이오닉

> 폰갭과 마찬기지로 코도바를 근간으로 구글의 앵귤러(AngularJS)를 사용하는 하이브리드 앱 프래임워크이다.
>
> 아이오닉은 아이오닉 프레임워크, 아이오닉 CLI라는 2개의 큰 덩어리로 구성된다.
>
> https://ionicframework.com/
>
> https://ionicframework.com/docs/cli/



##### 네이티브스크립트

> 텔리릭(Telerik)의 네이티브스크립트(NativeScript)는 리액트 네이티브와 비슷한 방식으로 iOS와 Android 네이티브 앱 개발을 지원하는 오픈소스 프레임워크이다.
>
> https://www.nativescript.org/



##### 리액트 네이티브

> React Nativeㄹ
>
> Build native mobile apps using JavaScript and React
>
> 리액트 네이티브는 페이스북이 2015년 3월에 공개한 오픈소스 프로젝트이며, 개발자로 하여금 고품질의 iOS와 Android 용 네이티브 앱을 친숙한 웹 기술을 이용해 개발할 수 있도록 하는 하는 목적을 가진다.
>
> https://facebook.github.io/react-native/



#### 툴설치

엑스코드 설치

홈브루 설치

노드와 npm 설치

왓치맨 설치

리액트 네이티브 CLI 설치



#### 'Hello World' 리액트 네이티브 앱



