(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{297:function(e,t,a){e.exports={profile_info:"Profileinfo_profile_info__ofTLS",img:"Profileinfo_img__88uNW",myProfile:"Profileinfo_myProfile__3opTM",mainPhoto:"Profileinfo_mainPhoto__aCOFb",fileUpload:"Profileinfo_fileUpload__3Fecm",profileStatus:"Profileinfo_profileStatus__1mV2t",info:"Profileinfo_info__NrK7v",name:"Profileinfo_name__2LS4Q",item:"Profileinfo_item__1BaeD",contacts:"Profileinfo_contacts__3sqh-",contactsItems:"Profileinfo_contactsItems__3r-Gt",contactsItem:"Profileinfo_contactsItem__2Lmd5"}},298:function(e,t,a){e.exports={dataForm:"ProfileDataForm_dataForm__xcaHp",name:"ProfileDataForm_name__1yiHS",item:"ProfileDataForm_item__3bykf",contacts:"ProfileDataForm_contacts__3m1on",contactsItems:"ProfileDataForm_contactsItems__2_FSS",contactsItem:"ProfileDataForm_contactsItem__3NRJy"}},299:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__2Arsg",newPost:"MyPosts_newPost__2PmOb",posts:"MyPosts_posts__2xMHF"}},300:function(e,t,a){e.exports={item:"Post_item__3M4-h",postInfo:"Post_postInfo__3RxeY",message:"Post_message__3itWf",likes:"Post_likes__2A14U",like:"Post_like__1LNdi",likesCounts:"Post_likesCounts__2D6UU"}},301:function(e,t,a){e.exports={profile:"Profile_profile__1LYcf"}},302:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),s=a(37),r=a(38),l=a(0),i=a.n(l),c=a(98),m=a(297),u=a.n(m),f=a(40),p=a(96),d=a.n(p),_=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(e.status),r=Object(c.a)(s,2),m=r[0],f=r[1];Object(l.useEffect)((function(){f(e.status)}),[e.status]);return i.a.createElement("div",{className:u.a.profileStatus},!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{onDoubleClick:function(){e.isOwner&&o(!0)}},e.status||"Status")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){f(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(m)},autoFocus:!0,value:m})))},E=a(298),v=a.n(E),b=a(33),P=a(130),h=a(52),g=a.n(h),O=Object(P.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{className:v.a.dataForm,onSubmit:t},i.a.createElement("button",null,"save"),n&&i.a.createElement("div",{className:g.a.formSummeryError},n),i.a.createElement("div",{className:v.a.name},i.a.createElement("b",null,"Full name: "),Object(b.c)("Full name","fullName",[],b.a)),i.a.createElement("div",{className:v.a.item},i.a.createElement("b",null,"Looking for a job: "),Object(b.c)("","lookingForAJob",[],b.a,"checkbox")),i.a.createElement("div",{className:v.a.item},i.a.createElement("b",null,"My professional skills: "),Object(b.c)("My professional skills","lookingForAJobDescription",[],b.b)),i.a.createElement("div",{className:v.a.item},i.a.createElement("b",null,"About me: "),Object(b.c)("About me","aboutMe",[],b.b)),i.a.createElement("div",{className:v.a.item},i.a.createElement("div",{className:v.a.contacts},i.a.createElement("b",null,"Contacts: "),i.a.createElement("div",{className:v.a.contactsItems},Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:v.a.contactsItem},i.a.createElement("b",null,e,": "),Object(b.c)(e,"contacts."+e,[],b.a))})))),n&&i.a.createElement("div",{className:g.a.formSummeryError},n)))}));var N=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:u.a.info},a&&i.a.createElement("button",{onClick:n},"edit"),i.a.createElement("div",{className:u.a.name},i.a.createElement("h2",null,t.fullName)),i.a.createElement("div",{className:u.a.item},i.a.createElement("strong",null,"Looking for a job: "),t.lookingForAJob?i.a.createElement("string",null,"in the search"):i.a.createElement("string",null,"no")),t.lookingForAJob&&i.a.createElement("div",{className:u.a.item},i.a.createElement("strong",null,"My professional skills: "),t.lookingForAJobDescription),i.a.createElement("div",{className:u.a.item},i.a.createElement("strong",null,"About me: "),t.aboutMe),i.a.createElement("div",{className:u.a.item},i.a.createElement("div",{className:u.a.contacts},i.a.createElement("strong",null,"Contacts: "),i.a.createElement("div",{className:u.a.contactsItems},i.a.createElement("div",{className:u.a.contactsItem},Object.keys(t.contacts).map((function(e){return i.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))))))},k=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:u.a.contactsItem},i.a.createElement("b",null,t),": ",a)},y=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1];return e.profile?i.a.createElement("div",{className:u.a.profile_info},i.a.createElement("div",{className:u.a.myProfile},i.a.createElement("div",{className:u.a.mainPhoto},i.a.createElement("img",{src:e.profile.photos.large||d.a,alt:"userAvatar"}),e.isOwner&&i.a.createElement("div",{className:u.a.fileUpload},i.a.createElement("label",null,i.a.createElement("input",{type:"file",name:"file",id:"upFile",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),"Choose File"))),i.a.createElement(_,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),n?i.a.createElement(O,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))}}):i.a.createElement(N,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){o(!0)}}))):i.a.createElement(f.a,null)},S=a(97),j=a(299),F=a.n(j),I=a(300),w=a.n(I);var A=function(e){return i.a.createElement("div",{className:w.a.item},i.a.createElement("div",{className:w.a.postInfo},i.a.createElement("img",{src:e.profile.photos.large||d.a,alt:"userAvatar"}),i.a.createElement("div",{className:w.a.likes},i.a.createElement("div",{className:w.a.like},"\u2764"),i.a.createElement("div",{className:w.a.likesCounts},e.likesCounts))),i.a.createElement("div",{className:w.a.message},e.message))},C=a(90),M=a(27),x=a(68),D=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onAddPost=function(t){e.props.addPost(t.newPostText)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.profile?i.a.createElement("div",{className:F.a.myPosts},i.a.createElement("h3",null,"My posts"),i.a.createElement("div",{className:F.a.newPost},i.a.createElement(U,{onSubmit:this.onAddPost})),i.a.createElement("div",{className:F.a.posts},this.props.posts.map((function(t){return i.a.createElement(A,{message:t.message,likesCounts:t.likesCounts,key:t.id,profile:e.props.profile})})))):i.a.createElement(f.a,null)}}]),a}(l.PureComponent),T=Object(x.a)(10);function U(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(C.a,{component:b.b,name:"newPostText",validate:[x.b,T],placeholder:"Enter your post"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send"))))}U=Object(P.a)({form:"addPostForm",onSubmitSuccess:function(e,t){return t(Object(M.a)("addPostForm"))}})(U);var J=D,L=a(18),V=Object(L.b)((function(e,t){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts,profile:t.profile}}),(function(e){return{addPost:function(t){e(Object(S.a)(t))}}}))(J),H=a(301),z=a.n(H);var B=function(e){return i.a.createElement("div",{className:z.a.profile},i.a.createElement(y,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(V,{profile:e.profile}))},R=a(30),W=a(8),Y=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,saveProfile:this.props.saveProfile}))}}]),a}(i.a.Component);t.default=Object(W.d)(Object(L.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),R.g)(Y)}}]);
//# sourceMappingURL=3.0f9f148a.chunk.js.map