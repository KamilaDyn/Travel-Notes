(this.webpackJsonpnote_app=this.webpackJsonpnote_app||[]).push([[0],[,,function(e,t,a){e.exports={card:"Card_card__RzYVT",header:"Card_header__2JcmQ",header_s:"Card_header_s__3ieMl",title:"Card_title__m1iTJ",title100:"Card_title100__4sP_S",photoBox:"Card_photoBox__qD8v8",image:"Card_image__3DRmz",imageNone:"Card_imageNone__E80j3",content:"Card_content__1YG_X",content_noLink:"Card_content_noLink__3b-Y_",link:"Card_link__re6zX",noItem:"Card_noItem__1Ya1d"}},,,,,function(e,t,a){e.exports={formWrapper:"Form_formWrapper__3ZX7X",formContainer:"Form_formContainer__1lAyb",formTitle:"Form_formTitle__UKyd8",line:"Form_line__1NC_O",formOptions:"Form_formOptions__1WppD",formInputs:"Form_formInputs__3YxbV",inputs:"Form_inputs__2hLFa",textcontainer:"Form_textcontainer__1oIQZ"}},,function(e,t,a){e.exports={wrapper:"SidebarNavigation_wrapper__3ehUt",item:"SidebarNavigation_item__3ksvf",navItemLink:"SidebarNavigation_navItemLink__2gKOL"}},,,,,,,,,function(e,t,a){e.exports={formItem:"Input_formItem__L4Mxp",label:"Input_label__3ATxj",input:"Input_input__1E7uC",textarea:"Input_textarea__H6r35"}},,,function(e,t,a){e.exports={header:"Header_header__J3dyJ",underline:"Header_underline__3hCjV"}},function(e,t,a){e.exports={h1:"Title_h1__jzvnz",subtitle:"Title_subtitle__nZylC"}},,,function(e,t,a){e.exports={button:"Button_button__2_6R2",secondary:"Button_secondary__CYyjA",disabledButton:"Button_disabledButton__1zvDM"}},function(e,t,a){e.exports={cardsWrapper:"CardsWrapper_cardsWrapper__20KUe",note:"CardsWrapper_note__1LBrr"}},function(e,t,a){e.exports={wrapper:"Modal_wrapper__2881n",closeModule:"Modal_closeModule__1L98t"}},function(e,t,a){e.exports={radio:"RadioButton_radio__1DXyv",radioButton:"RadioButton_radioButton__3YF7I",changeButton:"RadioButton_changeButton__AIPQm"}},function(e,t,a){e.exports={wrapper:"Root_wrapper__36jXH",sidebar:"Root_sidebar__usZo8",rightWrapper:"Root_rightWrapper__1OGgV"}},,,,,function(e,t,a){e.exports={menuButton:"Menu_menuButton__1jIw0"}},function(e,t,a){e.exports=a.p+"static/media/Logo.3e77918d.png"},,,function(e,t,a){e.exports={formErrors:"ErrorMessage_formErrors__1CgPv"}},function(e,t,a){e.exports={backdrop:"Backdrop_backdrop__uSv2V"}},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),l=a.n(i),o=a(33),c=a(11),s=a(19),m=a(12),d=a(13),u=a(15),p=a(14),h=a(16),_=a(8),f=a(21),g=a.n(f),E=a(5),v=a(34),b=a.n(v),k=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({className:b.a.menuButton},a),t))},w=a(22),y=a.n(w),C=function(e){var t=e.children,a=e.subtitle,n=Object(E.a)(e,["children","subtitle"]),i=a?y.a.subtitle:y.a.h1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",Object.assign({className:i},n),t))},j=function(e){var t=e.showSidebarFn;e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{onClick:t},"Menu"),r.a.createElement("div",{className:g.a.header},r.a.createElement(C,null,"Travel Notes"),r.a.createElement("div",{className:g.a.underline})))},N=(a(45),a(35)),O=a.n(N),x=a(9),I=a.n(x),F=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:I.a.wrapper},r.a.createElement("li",{className:I.a.item},r.a.createElement(h.b,{className:I.a.navItemLink,to:"/"},"Konta-Instagram")),r.a.createElement("li",{className:I.a.item},r.a.createElement(h.b,{className:I.a.navItemLink,to:"/list"},"Lista podr\xf3\u017cy")),r.a.createElement("li",{className:I.a.item},r.a.createElement(h.b,{className:I.a.navItemLink,to:"/links"},"Przydatne linki"))))},S=function(e){var t=e.closeSidebarFn,a="sidebar";return e.show&&(a="sidebar open"),r.a.createElement("div",{className:a,onClick:t},r.a.createElement("div",{className:"contain"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:O.a,alt:"travel"})),r.a.createElement(F,null),r.a.createElement("h2",{className:"footer"},"With \u2764 to Travel")),r.a.createElement("div",{className:"bgc"}))},B=r.a.createContext(),M=a(2),z=a.n(M),L=a(25),V=a.n(L),W=function(e){var t=e.children,a=e.secondary,n=Object(E.a)(e,["children","secondary"]),i=a?V.a.secondary:V.a.button;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({className:i},n),t))},P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1},e.activeItem=function(){console.log(e.state.isActive),e.setState((function(e){return{isActive:!e.isActive}}))},e.deleteItem=function(){var t=document.getElementById(e.props.title);console.log(t),t.remove()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.image,n=t.title,i=t.description,l=t.link,o=a?"img":"div";return r.a.createElement("div",{className:z.a.card,id:n},r.a.createElement("div",{className:a?z.a.header:z.a.header_s},r.a.createElement("p",{className:a?z.a.title:z.a.title100},n),r.a.createElement("div",{className:a?z.a.photoBox:z.a.noItem},a&&r.a.createElement(o,{src:a,alt:n,className:a?z.a.image:z.a.imageNone}))),r.a.createElement("div",{className:z.a.description},r.a.createElement("p",{className:l?z.a.content:z.a.content_noLink},i),r.a.createElement("p",{className:l?z.a.link:z.a.noItem},"Przejd\u017a pod link:",r.a.createElement("a",{href:l},n)),r.a.createElement(W,{secondary:!0,onClick:function(t){window.confirm("Czy na pewno chcesz usun\u0105\u0107 element?")&&e.deleteItem(t)}},"Usu\u0144")))}}]),a}(n.Component);P.defaultProps={description:"One of the React creators"};var A=P,T=a(26),R=a.n(T),D=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.length?r.a.createElement("div",{className:R.a.cardsWrapper},t.map((function(e){return r.a.createElement(A,Object.assign({key:e.title},e))}))):r.a.createElement("h2",{className:R.a.note},"Nie masz jszcze notatek, dadaj nowe ",r.a.createElement("span",null," \u2764")))},X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{subtitle:!0},"Lista kont podr\xf3\u017cnik\xf3w na instagramie"),r.a.createElement(B.Consumer,null,(function(e){return r.a.createElement(D,{items:e.instagram})})))},Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{subtitle:!0},"Lista Twoich ulubionych stron"),r.a.createElement(B.Consumer,null,(function(e){return r.a.createElement(D,{items:e.link})})))},J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{subtitle:!0},"Lista podr\xf3\u017cy"),r.a.createElement(B.Consumer,null,(function(e){return r.a.createElement(D,{items:e.list})})))},Z=a(27),K=a.n(Z),q=a(7),H=a.n(q),U=a(18),G=a.n(U),Q=function(e){var t=e.tag,a=e.name,n=e.maxLength,i=e.label,l=e.error,o=Object(E.a)(e,["tag","name","maxLength","label","error"]);return r.a.createElement("div",{className:G.a.formItem},r.a.createElement("label",{className:G.a.label,htmlFor:i},i),r.a.createElement(t,Object.assign({className:"textarea"===t?G.a.textarea:G.a.input,type:"text",name:a,id:a,maxLength:n},o,{"data-error":l})))};Q.defaultProps={tag:"input",maxLength:200};var $=Q,ee=a(28),te=a.n(ee),ae=function(e){var t=e.id,a=e.checked,n=e.changeFn,i=e.children;return r.a.createElement("label",{className:te.a.radio},r.a.createElement("input",{type:"radio",id:t,checked:a,onChange:n}),r.a.createElement("div",{className:te.a.radioButton}),i)},ne=a(38),re=a.n(ne),ie=function(e){var t=e.formErrors;return r.a.createElement("div",{className:re.a.formErrors},t.length>0?r.a.createElement("p",null,t):null)},le="instagram",oe="link",ce="list",se={instagram:"nowe konto z instagrama",link:"nowy link ",list:"nowy cel podr\xf3\u017cy"},me=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={type:le,title:"",link:"",image:"",description:"",formErrors:{title:"",link:"",image:"",description:""},titleValid:!1,descriptionValid:!1,linkValid:!1,formValid:!1,imageValid:!1},e.handleRadioButtonChange=function(t){e.setState({type:t})},e.handleInputChange=function(t){t.preventDefault();var a=t.target.name,n=t.target.value;e.setState(Object(c.a)({},a,n),(function(){e.validateField(a,n)}))},e}return Object(d.a)(a,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.titleValid,r=this.state.descriptionValid,i=this.state.linkValid,l=this.state.imageValid;switch(e){case"title":n=t.length>=3,a.title=n?"":"za kr\xf3tki tytu\u0142";break;case"link":i=t.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi),a.link=i?"":"wklej / wpisz link z https://";break;case"image":l=0===t.length||t.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g),a.image=l?"":"link do zdj\u0119cia z (jpg/png/gif) lub puste pole";break;case"description":r=t.length>=6,a.description=r?"":" wprowad\u017a d\u0142u\u017cszy opis"}this.setState({formErrors:a,titleValid:n,descriptionValid:r,linkValid:i,imageValid:l},this.validateForm)}},{key:"validateForm",value:function(){var e=this.state,t=e.type,a=e.titleValid,n=e.descriptionValid,r=e.linkValid,i=e.imageValid;return t===le?this.setState({formValid:a&&n&&i&&i}):t===oe?this.setState({formValid:a&&n&&r}):this.setState({formValid:a&&n}),!0}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"render",value:function(){var e=this,t=this.state,a=t.type,n=t.formErrors,i=t.image,l=t.link,o=t.title,c=t.description;return r.a.createElement(B.Consumer,null,(function(t){return r.a.createElement("div",{className:H.a.formWrapper},r.a.createElement("p",{className:H.a.formTitle}," Dodaj ",se[a]," "),r.a.createElement("div",{className:H.a.line}),r.a.createElement("form",{id:"form",className:H.a.formContainer,onSubmit:function(a){return t.addItem(a,e.state)},autoComplete:"off"},r.a.createElement("div",{className:H.a.formOptions},r.a.createElement(ae,{id:a.instagram,checked:a===le,changeFn:function(){return e.handleRadioButtonChange(le)}},"instagram"),r.a.createElement(ae,{id:a.link,checked:a===oe,changeFn:function(){return e.handleRadioButtonChange(oe)}},"link"),r.a.createElement(ae,{id:a.list,checked:a===ce,changeFn:function(){return e.handleRadioButtonChange(ce)}},"podr\xf3\u017ce")),r.a.createElement("div",{className:"panel panel-default"}," "),r.a.createElement("div",{className:H.a.formInputs},r.a.createElement("div",{className:H.a.inputs},r.a.createElement(ie,{formErrors:n.title}),r.a.createElement($,{required:!0,value:o,onChange:e.handleInputChange,name:"title",label:a===le?"Nazwa ":"Tyty\u0142"}),r.a.createElement(ie,{formErrors:n.link}),a===ce?null:r.a.createElement($,{required:!0,value:l,onChange:e.handleInputChange,name:"link",label:"Link"}),r.a.createElement(ie,{formErrors:n.image}),a===le?r.a.createElement($,{value:i,onChange:e.handleInputChange,name:"image",label:"Zdj\u0119cie"}):null),r.a.createElement("div",{className:H.a.textcontainer},r.a.createElement(ie,{formErrors:n.description}),r.a.createElement($,{required:!0,tag:"textarea",value:c,onChange:e.handleInputChange,name:"description",label:"Kr\xf3tki opis",placeholder:a===ce?"Jaki jest Tw\xf3j nowy plan podr\xf3\u017cy?":"Wprowad\u017a kr\xf3tki opis",maxLength:"1000"}))),r.a.createElement(W,{type:"submit",secondary:!0},"Dodaj")))}))}}]),a}(n.Component),de=function(e){var t=e.closeModalFn;return r.a.createElement("div",{className:K.a.wrapper},r.a.createElement("button",{className:K.a.closeModule,onClick:t}),r.a.createElement(me,null))},ue=a(39),pe=a.n(ue),he=function(e){var t=e.click,a=Object(E.a)(e,["click"]);return r.a.createElement("div",Object.assign({className:pe.a.backdrop,onClick:t},a))},_e=[{image:"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/p960x960/69359620_10162183937445565_6945283617408942080_o.jpg?_nc_cat=1&_nc_sid=85a577&_nc_ohc=3X4hsZFta_oAX9mb0j9&_nc_ht=scontent.fopo2-1.fna&_nc_tp=6&oh=2e0fb5c95cddd30fae86d200f59bb07e&oe=5EE07B78",title:"Martyna Wojciechowska",description:"Martyna is a Polish TV presenter, mountaineer, traveller, journalist, sportswoman and writer. In 2010, she completed the Seven Summits. She presents the television series Kobieta na kra\u0144cu \u015bwiata (Woman at the Edge of the World), and is the editor in chief of National Geographic Poland.",link:"https://www.instagram.com/martyna.world/?hl=pl"},{image:"https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-9/16807796_135473913637950_393499575519321820_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=lMjytlYLWaYAX_Lc1Zn&_nc_ht=scontent.fopo2-1.fna&oh=c2231b3d20a5cda7013fb6951a30d309&oe=5EDEA1C6",title:"Bez planu / Bartek Czukiewski",description:"Polish traveller and youtuber. Currently in: Philippines. Travel to Haiti, Filipines, Chile, Dominikana, Laos, Wietnam .... and more",instagramLink:"https://www.instagram.com/bezplanu_czukesky/?hl=pl"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wojciech_Cejrowski_selfie-2020.jpg/800px-Wojciech_Cejrowski_selfie-2020.jpg",title:"Wojciech Cejrowski",description:" is a Polish traveler, television and radio journalist, writer, Catholic publicist, satirist, and photographer.",link:"https://www.instagram.com/wojciechcejrowski/?hl=pl"}],fe=[{title:"Marocco",description:"Explore Casablanca, See the medina in Fez, Wander through A\xeft Benhaddou, See the city of Marrakech, See the Blue Village of Chefchaouen, Walk the desert at Merzouga "},{title:"Philippines ",description:" Palawan: Perched in the region of Mimaropa, the islands of Palawan are one of the best places in the Philippines to explore.With the lost Crystal clear turquoise water I've seen, and a history spanning over 50,000 years, it\u2019s an idyllic place to explore on your trip. Whilst in Palawan, make sure to visit El Nido which is perched on the most easterly part of the main island."}],ge=a(29),Ee=a.n(ge),ve=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={instagram:Object(s.a)(_e),list:Object(s.a)(fe),link:[],isModalOpen:!1,isSidebarOpen:!1,display:"none"},e.menuClicked=function(){e.setState((function(e){return{isSidebarOpen:!e.isSidebarOpen,display:"block "}})),console.log("works")},e.closeSidebar=function(){e.setState({isSidebarOpen:!1})},e.openModal=function(){e.setState({isModalOpen:!0})},e.closeModal=function(){e.setState({isModalOpen:!1})},e.addItem=function(t,a){t.preventDefault(),e.setState((function(e){return Object(c.a)({},a.type,[].concat(Object(s.a)(e[a.type]),[a]))})),console.log(a),t.target.reset(),e.closeModal()},e}return Object(d.a)(a,[{key:"render",value:function(){var e;(this.state.isSidebarOpen||this.state.isModalOpen)&&(e=r.a.createElement(he,{click:this.closeSidebar,display:this.state.display}));var t=this.state,a=t.isModalOpen,n=t.isSidebarOpen,i=Object(o.a)({},this.state,{addItem:this.addItem});return r.a.createElement(B.Provider,{value:i},r.a.createElement(h.a,null,r.a.createElement("div",{className:Ee.a.wrapper},r.a.createElement(S,{closeSidebarFn:this.closeSidebar,show:n}),e,r.a.createElement("div",{className:Ee.a.rightWrapper},r.a.createElement(j,{openModalFn:this.openModal,showSidebarFn:this.menuClicked}),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:X}),r.a.createElement(_.a,{path:"/list",component:J}),r.a.createElement(_.a,{path:"/links",component:Y})),r.a.createElement(W,{onClick:this.openModal},"+"),a&&r.a.createElement(de,{closeModalFn:this.closeModal})))))}}]),a}(n.Component);a(51);l.a.render(r.a.createElement(ve,null),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.3b87a27a.chunk.js.map