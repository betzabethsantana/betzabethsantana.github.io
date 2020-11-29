(this.webpackJsonprubensantana=this.webpackJsonprubensantana||[]).push([[0],{28:function(e,t){e.exports={colocar:function(){document.getElementById("content").classList.add("blurring"),document.getElementById("loader").classList.add("loader")},quitar:function(){setTimeout((function(){document.getElementById("loader").classList.remove("loader"),document.getElementById("content").classList.remove("blurring")}),800)}}},29:function(e,t,a){e.exports=a(55)},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e){e.exports=JSON.parse('[{"id":0,"name":"Plant","description":"Pipes & Component Disposition","img":"./img/trabajos/component-disposition.png","type":"img","link":null,"repo":null},{"id":1,"name":"Solar","description":"Hirohisa Isogawa Shade Report","img":"./img/trabajos/shade-report.jpg","type":"img","link":null,"repo":null},{"id":2,"name":"Residential","description":"Autocad Project","img":"./img/trabajos/residential-project.png","type":"img","link":null,"repo":null},{"id":3,"name":"Photovoltaic","description":"Solar Project","img":"./img/trabajos/photovoltaic.jpg","type":"img","link":null,"repo":null},{"id":4,"name":"Unifamily","description":"Residential Unifamily Project","img":"./img/trabajos/unifamily-project.png","type":"img","link":null,"repo":null},{"id":5,"name":"Multifamily","description":"Residential Multifamily Project","img":"./img/trabajos/multifamily-project.png","type":"img","link":null,"repo":null},{"id":6,"name":"Control","description":"Room Control Panel","img":"./img/trabajos/control.png","type":"img","link":null,"repo":null},{"id":7,"name":"Electrical","description":"Electrical Schematic Control Panel","img":"./img/trabajos/electrical.png","type":"img","link":null,"repo":null}]')},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=(a(34),a(1)),c=a(2),s=a(3),m=a(4),u=(a(35),a(36),a(39),a(40),a(41),a(42),a(43),a(44),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"verCredencial",value:function(e,t,a,n){e.preventDefault();var r=document.getElementById("myModal"),l=document.createElement("img");document.getElementById("divModalImagen").appendChild(l),l.setAttribute("id","img01"),l.setAttribute("class","modal-content");var o=document.getElementById("caption");r.style.display="block",l.src="./img/credenciales/"+t+"."+a,o.innerHTML=t.toUpperCase()+n.toUpperCase(),document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",r.style.display="none"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("img",{id:"fotoAbout",src:"./img/betzabeth.jpg",className:"img-fluid align-self-center rounded",alt:""}),r.a.createElement("hr",null),r.a.createElement("p",{className:"textoAbout"},"Hi, I'm Betzabeth. As an Electrical Engineer with experience in the Solar Industry, I'm prepared for the challenges of designing, promoting and implementing renewable energy solutions within society\u2019s rapidly changing energy related industry."),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mb-3"},r.a.createElement("div",{className:"col-4 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Degrees")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"ENG"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"ingenieria","jpg","")},href:"#"},r.a.createElement("i",{className:"fa fa-user-graduate fa-3x",title:"Click to see the credential"})))))),r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mb-3"},r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Certifications")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"UNI"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"unifamily","jpg","")},href:"#"},r.a.createElement("i",{className:"fa fa-certificate fa-3x",title:"Unifamily | Click to see the credential"}))),r.a.createElement("div",null,r.a.createElement("span",null,"MUL"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"multifamily","jpg","")},href:"#"},r.a.createElement("i",{className:"fa fa-certificate fa-3x",title:"Multifamily | Click to see the credential"})))))),r.a.createElement("div",{className:"row justify-content-center mb-2"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("hr",null),r.a.createElement("a",{className:"btn btn-light",href:"./docs/CV_Betzabeth_Santana_2020_en.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,"Resume")))))}}]),a}(n.Component)),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",id:"home"},r.a.createElement("div",{className:"row align-items-center",id:"contenido"},r.a.createElement("div",{className:"col-12 titulo"},"Betzabeth Santana"),r.a.createElement("div",{className:"col-12 subtitulo"},"Electrical Engineer")))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"zoom",value:function(e){e.preventDefault();var t=document.getElementById("myModal"),a=document.createElement(this.props.trabajo.type);document.getElementById("divModalImagen").appendChild(a),a.setAttribute("id","img01"),a.setAttribute("class","modal-content"),a.setAttribute("controls","true"),a.setAttribute("autoplay","true");var n=document.getElementById("caption");t.style.display="block",a.src=this.props.trabajo.img,n.innerHTML=this.props.trabajo.name,document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",t.style.display="none"}}},{key:"render",value:function(){return void 0==this.props.trabajo?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("div",{className:"divCuboTitulo"},r.a.createElement("h3",null,this.props.trabajo.name)),r.a.createElement("div",{className:"divCuboImagen"},r.a.createElement(this.props.trabajo.type,{onClick:this.zoom.bind(this),src:this.props.trabajo.img,alt:this.props.trabajo.name,controls:!0,autoPlay:!1})),r.a.createElement("div",{className:"divCuboBotones"},r.a.createElement("a",{href:"http://"+this.props.trabajo.repo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"github",className:"fab fa-github fa-3x ",title:"Repo"})),r.a.createElement("a",{href:"https://"+this.props.trabajo.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"linkApp",className:"fa fa-link fa-3x",title:"Link"}))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cubo_cara "+this.props.clase},r.a.createElement(p,{trabajo:this.props.trabajo}))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.trabajos;return r.a.createElement("div",{className:"escena--cubo"},r.a.createElement("div",{className:"cubo cubo--rotar comienza-girando mostrar-frente"},this.props.clasesCara.map((function(t,a){return r.a.createElement(b,{key:a,clase:t,trabajo:e[a]})}))))}}]),a}(n.Component);f.defaultProps={clasesCara:["cubo_cara--frente","cubo_cara--derecha","cubo_cara--detras","cubo_cara--izquierda","cubo_cara--arriba","cubo_cara--abajo"]};var E=f,h=a(22),v=a.n(h),g=a(48),y=["mostrar-frente","mostrar-derecha","mostrar-detras","mostrar-izquierda","mostrar-arriba","mostrar-abajo"],j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={claseSeleccionada:0,trabajos:g,listaTrabajos:g},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){var e=this,t=this.state.trabajos,a=[];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioCubo"},r.a.createElement(E,{trabajos:this.state.listaTrabajos})),r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioTabla mb-4"},r.a.createElement(v.a,{columns:[{name:"Name",selector:"name",sortable:!1,center:!0},{name:"Description",selector:"description",sortable:!1,center:!0}],data:t,noHeader:!0,keyField:"id",pointerOnHover:!0,pagination:!0,paginationPerPage:6,paginationComponentOptions:{noRowsPerPage:!0},onRowClicked:function(n){return function(n){for(var r=6*(Math.trunc(n/6)+1-1);r<t.length;r++)a.push(t[r]);console.log(a),e.setState({listaTrabajos:a});var l=n%6,o=y[e.state.claseSeleccionada],i=document.querySelector(".cubo");i.classList.remove(o),i.classList.add(y[l]),e.setState({claseSeleccionada:l}),document.querySelector(".divPortafolioCubo").scrollIntoView({block:"center"})}(n.id)}}))))}}]),a}(n.Component),k=(n.Component,a(26)),N=a.n(k);a(51);function C(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"tituloForm"},"Contact me"),r.a.createElement("form",{id:"formularioCorreo",className:"topBefore",onSubmit:function(e){e.preventDefault(),window.Spinner.colocar(),N.a.sendForm("service_e5u4sju","template_hxmundj",e.target,"user_V9wWieO7dkGMvBFXIr0W5").then((function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has been sent",document.getElementById("formularioCorreo").reset(),console.log(e.text)}),(function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has not been sent. Try again later!",console.log(e.text)}))}},r.a.createElement("input",{type:"hidden",name:"to_name",value:"Betzabeth"}),r.a.createElement("input",{type:"text",name:"from_name",placeholder:"NAME",required:!0}),r.a.createElement("input",{type:"email",name:"reply_to",placeholder:"E-MAIL",required:!0}),r.a.createElement("textarea",{name:"message",type:"text",placeholder:"MESSAGE",required:!0}),r.a.createElement("input",{id:"submit",type:"submit",value:"SEND!"})))}var w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid mt-5",style:{color:"white"}},r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement(C,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"or use a social channel")),r.a.createElement("div",{className:"row justify-content-center divCredenciales textoAboutCredenciales mt-1"},r.a.createElement("div",{className:"col-6 col-md-4 mb-2"},r.a.createElement("a",{href:"https://twitter.com/beth_santa",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter fa-3x",title:"Twitter"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://wa.me/?phone=584241584786",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-whatsapp fa-3x",title:"Whatsapp"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/betzabeth-santana/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin fa-3x",title:"LinkedIn"})))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("span",{className:"closeModal"},"\xd7"),r.a.createElement("div",{id:"divModalImagen"}),r.a.createElement("div",{id:"caption"}))}}]),a}(n.Component),I=a(14),S=a(9),M=[{nombre:"Home",ruta:"/"},{nombre:"About",ruta:"/about"},{nombre:"Portfolio",ruta:"/portfolio"},{nombre:"Contact",ruta:"/contact"}],B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={linkActual:0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"divHeader"},r.a.createElement("header",{className:"App-header header"},r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},M.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(I.b,{to:t.ruta,onClick:function(){return t=a,e.state.linkActual!==t&&(window.Spinner.colocar(),e.setState({linkActual:t})),void(document.body.offsetWidth<768&&document.getElementById("menu-btn").click());var t}},t.nombre))}))))),r.a.createElement("div",{id:"loader",className:"loader"}),r.a.createElement("div",{id:"content",className:"blurring"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:d}),r.a.createElement(S.a,{path:"/about",component:u}),r.a.createElement(S.a,{path:"/portfolio",component:j}),r.a.createElement(S.a,{path:"/contact",component:w})),r.a.createElement(O,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(28),A=a.n(x);window.Spinner=A.a,o.a.render(r.a.createElement(I.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.efaf7969.chunk.js.map