
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/login/login","pages/user-space/user-space","pages/add-input/add-input","pages/search/search","pages/detail/detail","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","pages/user-set/user-set","pages/user-list/user-list"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#B5B5B5","selectedColor":"#FEE42B","backgroundColor":"#FFFFFF","list":[{"text":"社区","pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"text":"动态","pagePath":"pages/news/news","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"text":"消息","pagePath":"pages/paper/paper","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"text":"我的","pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"./static/tabbar/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"墨汁","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/user-space/user-space","meta":{},"window":{}},{"path":"/pages/add-input/add-input","meta":{},"window":{}},{"path":"/pages/search/search","meta":{},"window":{}},{"path":"/pages/detail/detail","meta":{},"window":{}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{}},{"path":"/pages/user-set/user-set","meta":{},"window":{}},{"path":"/pages/user-list/user-list","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
