# Chapter 2. 리액트 네이티브식 '헬로 월드!'

 

todo

- 이론 간단히
- 실행예재 생성 및 추가(아이콘등)



#### 모바일 앱 개발 환경의 이해

>모바일 앱 개발에 있어 주로 사용되는 두 가지 접근 방법이다. 하나는 각 플랫폼(iOS, Andorid) 대상의
>
>네이티브 앱을 개발하는 방법이며, 다른 하나는 웹 기술(Html, CSS, Javascript)을 사용해 웹뷰(WebView)
>
>로 감싸는 하이브리드 앱 개발방식이다.

##### 네이티브 앱 개발

- IOS

- Android

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

##### 아이오닉

##### 네이티브스크립트

##### 리액트 네이티브



#### 리액트 네이티브 툴의 이해

##### 엑스코드

##### 구글크롬

홈브루

노드JS와 npm

왓치맨

리액트 네이티브 CLI



#### 툴설치

엑스코드 설치

홈브루 설치

노드와 npm 설치

왓치맨 설치

리액트 네이티브 CLI 설치



#### 'Hello World' 리액트 네이티브 앱



