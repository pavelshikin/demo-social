(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={navbar:"Navbar_navbar__1nmOh",menu:"Navbar_menu__1Mjeq",item:"Navbar_item__3kfkC",active:"Navbar_active__2cyM1"}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var A=n(46),a=n(9),r={dialogs:[{id:1,name:"Vasya",ava:"1"},{id:2,name:"Petya",ava:"2"},{id:3,name:"Ignat",ava:"3"},{id:4,name:"Alex",ava:"4"},{id:5,name:"Sveta",ava:"5"},{id:6,name:"Valera",ava:"6"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo",messageMe:"Hi! I'm fine!"},{id:4,messageMe:"How are you? Text Text Text Text Text Text Text Text"},{id:5,message:"Fine!",messageMe:"It's good!"}]},o=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n={id:e.messages[e.messages.length-1].id+1,messageMe:t.newMessageBody};return Object(a.a)({},e,{messages:[].concat(Object(A.a)(e.messages),[n])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c}));var A=n(138),a=A.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"8a6ad4af-f25c-4576-91b8-981c838cf476"}}),r={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please used profile obj."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:A})},logout:function(){return a.delete("auth/login")}},c={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},133:function(e,t,n){e.exports={news:"News_news__2Gd__"}},134:function(e,t,n){e.exports={music:"Music_music__2zUz2"}},135:function(e,t,n){e.exports={settings:"Settings_settings__2xCJD"}},140:function(e,t){e.exports="data:image/gif;base64,R0lGODlhMgAyAIcAAAAAAJiYmP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFDQAAACwAAAAAMgAyAAAI/wABCBxIsGBBAQgFCAzAMIDBhxAjGkxIUSGAhhgdStwIsWLFhRkxchwJwKNHkCFFkuxo8uPFlBlXHmx58iXMmDJpmkR5U+VKnS574hypsSRQg0KLFoXYcGBLjjAHNo3o0yXJoT6RDkUokyBDqUO9puy6MWrBm2SZmgW7Nq3YtmjdPoxrc6zcuWbp3j2bt+1etiF5Zv37NulUwnwNH0ZcOCljvIofaw0subJlqnYvK/56ua7hzps5V0brlzHp0oT7ZjatenXqtXr/6u2JmHbjwXJje14s27VgpUtliqYMGbjolT7DJgbMGzPW43OZE08MG3nk3brLbv5t2/pn7KiJOhMGP53s+PG9W5d/TTk866nKSQYEACH5BAUNAAAALAgAAAAiAAwAAAhdAAEIHEhQYICDAQQKWCigoMOHBhFKVMiwIkSHEjMmBFCxY8OLGjVS9GgRY8iMI0kyJHgyZEqVK1u65AjTIwCZKGnWXBlRpsOdHweevDhQ5cOcRAl2BLkx6cOFBQMCACH5BAUNAAAALBoAAAAYABgAAAhmAAMIDACgoMGDCBEOXEgwocOCDBk+TBgx4kSDFS1ezFhxIseODj9K3CjSoICLADKaFHAS5UgALFmixNgQZkyZMw/evJmz4E6ePX8CzSkUZ9CiPW0KTVq05dGlT38mVbpzKlKmQgMCACH5BAUNAAAALCYACAAMACIAAAhjAAEIFBhgoMGBARIeRJiw4MKGDQ9ChMhwokKCFiNizGgw40UAHh2C9NiR5EaLJVFWnJiS5cKXMBcKmElzpsGaNW/itClwJ82BPnkCCAqUaE+jQQUcRWp0Kc6DO18+lSpU6sKAACH5BAUNAAAALBoAGgAYABgAAAhnAAEIHEiwIIAACBMiNMhwoEKFDRs+TBjR4ESKFQleXJjR4cWOHj+CPLhx5MYAJk+mFLnyYUcBAkJirAgTpkyUEWvqDNlQp0+bAnES/EkUKMOiRXsi9ZlzaU2aTl8iHZl0JACmVgcGBAAh+QQFDQAAACwIACYAIgAMAAAIWQABCBQoQMDAgwgTCgwQQCHBggYdSmTIUCHEixIRUtyI8KLHgg43iqz48KPJhSNTNjTJMqJKlQBafkT5kuNAmRBp1mzYEadOmBJl/hSZ8SDLoSSLJvT4s2hAACH5BAUNAAAALAAAGgAYABgAAAhnAAUIHCgQgMGDCBMCIEhQocODDBs+VBhx4ESHFQVcpJhxI8KMGj0aBBlSJEiRI0+iVGmyIkqIDA8GCLDSosGZM1uWxMnT406eQGluDEo0p8OiRSciDTp0qdGLToV6XPoSQNKqN3kGBAAh+QQFDQAAACwAAAgADAAiAAAIZgABCBwoYKBBggIKHkSYcCGAhBAVMowo8SFFiAIvRsyoUWHHhhY1TqQ4EiNHkScvlgSZcqPDlzAHBphJc6bBmjVv4qQpc6fNnjt1+gQaVKBPnkaPEi0K4GiApUihOsw59efLpwYDAgA7"},141:function(e,t,n){e.exports={preloader:"Preloader_preloader__yOn_r"}},142:function(e,t,n){e.exports=n.p+"static/media/logo192.6e7af814.png"},169:function(e,t,n){e.exports=n(295)},174:function(e,t,n){},175:function(e,t,n){},20:function(e,t,n){e.exports={usersPage:"Users_usersPage__jAE_m",userItem:"Users_userItem__BBKXY",user:"Users_user__2TriJ",ava:"Users_ava__1utAn",userInfo:"Users_userInfo__2vaqv",name:"Users_name__3q30K",fullName:"Users_fullName__11yoG",status:"Users_status__3-p7F",location:"Users_location__2b0Zi",city:"Users_city__2jlBy"}},295:function(e,t,n){"use strict";n.r(t);var A=n(0),a=n.n(A),r=n(67),o=n.n(r),s=(n(174),n(35)),c=n(36),i=n(37),u=n(38),l=n(30),m=n(14),f=(n(175),n(10)),p=n.n(f);var d=function(e){return a.a.createElement("div",{className:p.a.navbar},a.a.createElement("div",{className:p.a.menu},a.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},a.a.createElement(m.b,{to:"/profile",activeClassName:p.a.active},"Profile")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:p.a.active},"Users")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:p.a.active},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:p.a.active},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:p.a.active},"Settings"))))},g=n(133),h=n.n(g);var E=function(){return a.a.createElement("div",{className:h.a.news},"News")},v=n(134),b=n.n(v);var _=function(){return a.a.createElement("div",{className:b.a.music},"Music")},w=n(135),S=n.n(w);var C=function(){return a.a.createElement("div",{className:S.a.settings},"Settings")},O=n(92),y=n.n(O),I=n(52),j=n.n(I),P=n(90),N=n(27),U=n(130),T=n(33),x=n(68),k=n(18),B=n(6),F=n.n(B),L=n(12),M=n(9),G=n(13),D={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},H=function(e,t,n,A){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:A}}},R=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Q=function(){return function(){var e=Object(L.a)(F.a.mark((function e(t){var n,A,a,r,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.me();case 2:0===(n=e.sent).data.resultCode&&(A=n.data.data,a=A.id,r=A.login,o=A.email,t(H(a,o,r,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(L.a)(F.a.mark((function e(t){var n,A;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.c.getCaptchaUrl();case 2:n=e.sent,A=n.data.url,t(R(A));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(M.a)({},e,{},t.payload);default:return e}},J=Object(U.a)({form:"login",onSubmitSuccess:function(e,t){return t(Object(N.a)("login"))}})((function(e){var t=e.handleSubmit,n=e.error,A=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",{className:y.a.loginForm},Object(T.c)("Email","email",[x.b],T.a),Object(T.c)("Password","password",[x.b],T.a,"password"),a.a.createElement("div",null,a.a.createElement(P.a,{component:"input",name:"rememberMe",type:"checkbox"})," Remember me"),A&&a.a.createElement("div",null,a.a.createElement("img",{src:A,alt:"captcha"}),Object(T.c)("Symbols from image","captcha",[x.b],T.a)),n&&a.a.createElement("div",{className:j.a.formSummeryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Sign Up"))))})),W=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,A){return function(){var a=Object(L.a)(F.a.mark((function a(r){var o,s;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,G.a.login(e,t,n,A);case 2:0===(o=a.sent).data.resultCode?r(Q()):(10===o.data.resultCode&&r(z()),s=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(N.b)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",{className:y.a.login},a.a.createElement("h2",null,"Login"),a.a.createElement(J,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),V=n(46),Y=function(e,t,n,A){return e.map((function(e){return e[n]===t?Object(M.a)({},e,{},A):e}))},q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Z=function(e){return{type:"FOLLOW",userId:e}},X=function(e){return{type:"UNFOLLOW",userId:e}},$=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ee=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},te=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ne=function(){var e=Object(L.a)(F.a.mark((function e(t,n,A,a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,A(n);case 3:0===e.sent.resultCode&&t(a(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,A,a){return e.apply(this,arguments)}}(),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(M.a)({},e,{users:Y(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(M.a)({},e,{users:Y(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(M.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(M.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(M.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(M.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(M.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(V.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ae=n(58),re=n(20),oe=n.n(re),se=n(43),ce=n(98),ie=n(47),ue=n.n(ie),le=n(139),me=n.n(le),fe=function(e){for(var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,o=e.onPageChanged,s=e.portionSize,c=void 0===s?10:s,i=Math.ceil(n/r),u=[],l=1;l<=i;l++)u.push(l);var m=Math.ceil(i/c),f=Object(A.useState)(1),p=Object(ce.a)(f,2),d=p[0],g=p[1],h=(d-1)*c+1,E=d*c;return a.a.createElement("div",{className:ue.a.paginator},d>1&&a.a.createElement("span",null,a.a.createElement("button",{className:ue.a.begEnd,onClick:function(){g(1),o(1)}},"begin"),a.a.createElement("button",{onClick:function(){g(d-1),o(h-c)}},"\u2190")),u.filter((function(e){return e>=h&&e<=E})).map((function(e){return a.a.createElement("span",{className:me()(Object(se.a)({},ue.a.selectedPage,t===e),ue.a.pageNumber),key:e.id,onClick:function(t){o(e)}},e)})),m>d&&a.a.createElement("span",null,a.a.createElement("button",{onClick:function(){g(d+1),o(E+1)}},"\u2192"),a.a.createElement("button",{className:ue.a.begEnd,onClick:function(){g(m),o(i)}},"end")))},pe=n(96),de=n.n(pe),ge=function(e){var t=e.user,n=e.followingInProgress,A=e.unfollow,r=e.follow;return a.a.createElement("div",{className:oe.a.userItem},a.a.createElement("div",{className:oe.a.user},a.a.createElement("div",{className:oe.a.ava},a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!==t.photos.small?t.photos.small:de.a,alt:"Avatar"}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),a.a.createElement("div",{className:oe.a.userInfo},a.a.createElement("div",{className:oe.a.name},a.a.createElement("div",{className:oe.a.fullName},t.name),a.a.createElement("div",{className:oe.a.status},t.status)),a.a.createElement("div",{className:oe.a.location},a.a.createElement("div",null,"user.location.country",","),a.a.createElement("div",{className:oe.a.city},"user.location.city"))))},he=function(e){var t=e.currentPage,n=e.totalUsersCount,A=e.pageSize,r=e.onPageChanged,o=Object(ae.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged"]);return a.a.createElement("div",{className:oe.a.usersPage},a.a.createElement(fe,{currentPage:t,totalItemsCount:n,onPageChanged:r,pageSize:A}),a.a.createElement("div",null,o.users.map((function(e){return a.a.createElement(ge,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow,key:e.id})}))))},Ee=n(40),ve=n(8),be=function(e){return e.usersPage.users},_e=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUsersCount},Se=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},ye=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Ee.a,null):null,a.a.createElement(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),Ie=Object(ve.d)(Object(k.b)((function(e){return{users:be(e),pageSize:_e(e),totalUsersCount:we(e),currentPage:Se(e),isFetching:Ce(e),followingInProgress:Oe(e)}}),{setCurrentPage:$,follow:function(e){return function(){var t=Object(L.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,G.d.follow.bind(e),Z);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(L.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,G.d.unfollow.bind(e),X);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(L.a)(F.a.mark((function n(A){var a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A($(e)),A(ee(!0)),n.next=4,G.d.getUsers(e,t);case 4:a=n.sent,A(ee(!1)),A({type:"SET_USERS",users:a.items}),A({type:"SET_TOTAL_USERS_COUNT",totalCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ye),je=n(48),Pe=n.n(je),Ne=n(142),Ue=n.n(Ne);var Te=function(e){return a.a.createElement("div",{className:Pe.a.header},a.a.createElement("div",{className:Pe.a.logo},a.a.createElement("img",{src:Ue.a,alt:"logo"})),a.a.createElement("div",{className:Pe.a.loginBlock},e.isAuth?a.a.createElement("div",null,a.a.createElement("div",{className:Pe.a.login},e.login,a.a.createElement("button",{onClick:e.logout},"Log out"))):a.a.createElement(m.b,{to:"/login"},a.a.createElement("button",{className:Pe.a.loginBtn},"Login"))))},xe=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(Te,this.props)}}]),n}(a.a.Component),ke=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.logout();case 2:0===e.sent.data.resultCode&&t(H(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),Be={initialized:!1,globalError:null},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(M.a)({},e,{initialized:!0});default:return e}},Le=n(97),Me=n(129),Ge={friends:[{id:1,name:"Alex",ava:"4"},{id:2,name:"Sveta",ava:"5"},{id:3,name:"Valera",ava:"6"}]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;arguments.length>1&&arguments[1];return e},He=n(143),Re=n(131),Qe=Object(ve.c)({profilePage:Le.b,dialogsPage:Me.b,navbar:De,usersPage:Ae,auth:K,app:Fe,form:Re.a}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ke=Object(ve.e)(Qe,ze(Object(ve.a)(He.a)));window.__store__=Ke;var Je=Ke,We=function(e){return function(t){return a.a.createElement(A.Suspense,{fallback:a.a.createElement(Ee.a,null)},a.a.createElement(e,t))}},Ve=a.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Ye=a.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),qe=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandleErrors=function(e,t){alert(e)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandlerejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandlerejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ke,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"/",render:function(){return a.a.createElement(l.a,{to:"/profile"})}}),a.a.createElement(l.b,{path:"/profile/:userId?",render:We(Ye)}),a.a.createElement(l.b,{path:"/dialogs",render:We(Ve)}),a.a.createElement(l.b,{path:"/users",render:function(){return a.a.createElement(Ie,null)}}),a.a.createElement(l.b,{path:"/news",component:E}),a.a.createElement(l.b,{path:"/music",component:_}),a.a.createElement(l.b,{path:"/settings",component:C}),a.a.createElement(l.b,{path:"/login",render:function(){return a.a.createElement(W,null)}}),a.a.createElement(l.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(Ee.a,null)}}]),n}(A.Component),Ze=Object(ve.d)(l.g,Object(k.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Q());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(qe),Xe=function(e){return a.a.createElement(m.a,null,a.a.createElement(k.a,{store:Je},a.a.createElement(Ze,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var A=n(58),a=n(0),r=n.n(a),o=n(52),s=n.n(o),c=n(90),i=function(e){e.input;var t=e.meta,n=t.touched,A=t.error,a=e.children,o=n&&A;return r.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:" ")},a,o&&r.a.createElement("span",null,A))},u=function(e){var t=e.input,n=(e.meta,e.children,Object(A.a)(e,["input","meta","children"]));return r.a.createElement(i,e," ",r.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=(e.meta,e.children,Object(A.a)(e,["input","meta","children"]));return r.a.createElement(i,e," ",r.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,A){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",o=(arguments.length>5&&arguments[5],arguments.length>6&&void 0!==arguments[6]?arguments[6]:{});return r.a.createElement("div",null,r.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:A,type:a},o)))}},40:function(e,t,n){"use strict";var A=n(0),a=n.n(A),r=n(140),o=n.n(r),s=n(141),c=n.n(s);t.a=function(e){return a.a.createElement("div",{className:c.a.preloader},a.a.createElement("img",{src:o.a,alt:"preloader"}))}},47:function(e,t,n){e.exports={paginator:"Paginator_paginator__3uhmt",pageNumber:"Paginator_pageNumber__2S7WC",selectedPage:"Paginator_selectedPage__39uB7",begEnd:"Paginator_begEnd__rUGRx"}},48:function(e,t,n){e.exports={header:"Header_header__j6-Td",logo:"Header_logo__1DL_C",loginBlock:"Header_loginBlock__1Wf9O",login:"Header_login__3S1R9",loginBtn:"Header_loginBtn__3c6_G"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Xepa",error:"FormsControls_error__2s21E",formSummeryError:"FormsControls_formSummeryError__37kkS"}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return a}));var A=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={login:"Login_login__2y64v",loginForm:"Login_loginForm__27jlp"}},96:function(e,t,n){e.exports=n.p+"static/media/userphoto.1c997e59.png"},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var A=n(43),a=n(6),r=n.n(a),o=n(12),s=n(46),c=n(9),i=n(13),u=n(27),l={posts:[{id:3,likesCounts:15,message:"Hi! How ara you?"},{id:2,likesCounts:20,message:"It's my first post. It's my first post .It's my first post .It's my first post . It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post. It's my first post"},{id:1,likesCounts:1,message:"Yooo, man!"}],profile:null,status:""},m=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:A=t.sent,n({type:"SET_USER_PROFILE",profile:A});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:A=t.sent,n(f(A.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var A;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(A=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:A.data.data.photos.large});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o,s,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(p(o)),t.next=12;break;case 8:return c=s.data.messages.length>0?s.data.messages[0]:"Some error",l=c.slice(c.indexOf(">")+1,c.indexOf(")")).toLocaleLowerCase(),n(Object(u.b)("editProfile",{contacts:Object(A.a)({},l,c)})),t.abrupt("return",Promise.reject(c));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:e.posts[0].id+1,likesCounts:0,message:t.newPostText};return Object(c.a)({},e,{posts:[n].concat(Object(s.a)(e.posts))});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});case"SAVE_PROFILE_SUCCESS":return Object(c.a)({},e,{profile:t.profile});default:return e}}}},[[169,1,2]]]);
//# sourceMappingURL=main.109e7611.chunk.js.map