var posts=["posts/950.html","posts/28503.html","posts/16200.html","posts/9104.html","posts/59874.html","posts/44177.html","posts/32208.html","posts/58544.html","posts/48296.html","posts/54607.html","posts/26091.html","posts/48645.html","posts/58370.html","posts/32322.html","posts/44328.html","posts/49146.html","posts/60761.html","posts/11921.html","posts/3.html","posts/53087.html","posts/30583.html","posts/49172.html","posts/31019.html","posts/22861.html","posts/33370.html","posts/57829.html","posts/39638.html","posts/22767.html","posts/52107.html","posts/50633.html","posts/1.html","posts/5820.html","posts/55743.html","posts/45349.html","posts/11992.html","posts/1053.html","posts/52704.html","posts/51371.html","posts/2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };