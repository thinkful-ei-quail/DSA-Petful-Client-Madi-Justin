(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,n){e.exports=n(38)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),l=n(20),r=n.n(l),i=n(2),p=n(3),s=n(5),u=n(4),m=n(6),h=n(10),d=(n(28),n(29),function(e){return o.a.createElement("div",null,o.a.createElement("section",{className:"landing-info"},o.a.createElement("h1",null,"Welcome to the Petful Shelter"),o.a.createElement("h3",null,"We're so happy that you're here!"),o.a.createElement("a",{href:"https://imgur.com/B3Wfn94"},o.a.createElement("img",{src:"https://i.imgur.com/B3Wfn94.jpg",alt:"A collection of cats and dogs",title:"source: imgur.com"})),o.a.createElement("br",null),o.a.createElement("p",null,"If you'd like to adopt a cat, a dog, or both, click on the 'Begin Adoption Process' button below. You'll be taken to the adoption page where you'll see other prospective adopters, and most importantly, your future lifelong fuzzy companion!"),o.a.createElement("button",{className:"begin-adopt-button",onClick:function(){e.history.push("./adoption")}},"Begin Adoption Process")))}),f=n(17),g=(n(30),"https://peaceful-ocean-05483.herokuapp.com"),b=(n(31),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).displayPeople=function(){var e=n.props.people;return e&&e.length>0?o.a.createElement("ul",{className:"people-list"},n.htmlPeople(e)):"Nobody in queue"},n.htmlPeople=function(e){return e.map((function(e,t){return o.a.createElement("li",{key:t,className:"people-list-item"},e)}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"People"},this.displayPeople())}}]),t}(o.a.Component)),E=(n(32),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).displayNextDog=function(){var e=n.props.pets.dog;return e?n.petHtml(e):"No Dog Available"},n.displayNextCat=function(){var e=n.props.pets.cat;return e?n.petHtml(e):"No Cat Available"},n.petHtml=function(e){return o.a.createElement("div",{className:"pet-container"},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,"Age: ",e.age),o.a.createElement("p",null,"Gender: ",e.gender),o.a.createElement("p",null,"Breed: ",e.breed),o.a.createElement("img",{src:e.imageURL,alt:e.description,height:"200px"}),o.a.createElement("p",null,"Description: ",e.description),o.a.createElement("p",null,"Why they are here: ",e.story))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Pets"},o.a.createElement("div",{className:"Dog"},this.displayNextDog()),o.a.createElement("div",{className:"Cat"},this.displayNextCat()))}}]),t}(o.a.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t)}},o.a.createElement("label",{htmlFor:"name"},"Enter your name"),o.a.createElement("input",{type:"text",id:"name",onChange:function(t){return e.props.handleChange(t.target)}}),o.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(o.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Adopt-Buttons"},o.a.createElement("button",{className:"adopt-cat",onClick:this.props.adoptCat},"Adopt Cat"),o.a.createElement("button",{className:"adopt-dog",onClick:this.props.adoptDog},"Adopt Dog"),o.a.createElement("button",{className:"adopt-both",onClick:this.props.adoptBoth},"Adopt Both!"))}}]),t}(o.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.petType,n=e.handleClose;return o.a.createElement("div",{className:"confirmation_box"},o.a.createElement("h3",null,"Congrats!"),o.a.createElement("p",null,"Enjoy the company of your new ",t,"!"),o.a.createElement("button",{onClick:function(){return n(t)}},"Close"))}}]),t}(o.a.Component),v={postName:function(e){fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:e}).then((function(e){return e.json()}))},getPets:function(){return fetch("".concat(g,"/pets")).then((function(e){return e.json()}))},getPeople:function(){return fetch("".concat(g,"/people")).then((function(e){return e.json()}))}},N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pets:{},people:[],name:"",adopted:""},n.handleNameChange=function(e){n.setState({name:e.value})},n.handleNameSubmit=function(e){e.preventDefault(),fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:n.state.name})}).then((function(e){return e.json()})).then((function(e){window.localStorage.setItem("petful_username",e),console.log(window.localStorage.getItem("petful_username")),n.setState({people:[].concat(Object(f.a)(n.state.people),[e])})}))},n.componentDidMount=function(){n.getPeople(),n.getPets(),n.dequeuePeople()},n.getPeople=function(){v.getPeople().then((function(e){n.setState({people:e})}))},n.getPets=function(){v.getPets().then((function(e){n.setState({pets:e})}))},n.dequeuePeople=function(){var e=["Raakel Atkinson","Shazia Cokes","Laura Kr\xfcckel","Marietta Lund","Eddy Kuntz","Nina Abelen","Samuel Barnes","Osane PPorter","Seo-Yun Anjali Roach","Em\u012bls Agnes O'Mooney"];setInterval((function(){if(window.localStorage.getItem("petful_username")!==n.state.people[0]&&n.state.people.length>0){var t=["cats","dogs"][Math.floor(2*Math.random())];fetch("".concat(g,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({pet:t})}),fetch("".concat(g,"/people"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){n.setState({people:n.state.people.slice(1,n.state.people.length)})})).then((function(){n.getPets()}))}else n.state.people.length<5&&fetch("".concat(g,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e[Math.floor(4*Math.random())]})}).then((function(e){return e.json()})).then((function(e){n.setState({people:[].concat(Object(f.a)(n.state.people),[e])})}))}),5e3)},n.closeConfirmation=function(e){if("cat and dog"===e)n.dequeueAnimal("dogs"),n.dequeueAnimal("cats");else{var t=e+"s";n.dequeueAnimal(t)}n.dequeuePerson(),n.setState({adopted:""})},n.adoptCat=function(){n.setState({adopted:"cat"})},n.adoptDog=function(){n.setState({adopted:"dog"})},n.adoptBoth=function(){n.setState({adopted:"cat and dog"})},n.dequeuePerson=function(){fetch("".concat(g,"/people"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){n.setState({people:n.state.people.slice(1,n.state.people.length)})})).then((function(){n.getPets()}))},n.dequeueAnimal=function(e){console.log(e),fetch("".concat(g,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({pet:e})})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.people,n=e.pets,a=e.adopted;return o.a.createElement("div",{className:"Main-Page"},o.a.createElement("h1",null,"Pet Adoption Listing"),o.a.createElement(E,{pets:n}),o.a.createElement("div",{className:"People"},window.localStorage.getItem("petful_username")===this.state.people[0]&&o.a.createElement(j,{adoptCat:this.adoptCat,adoptDog:this.adoptDog,adoptBoth:this.adoptBoth}),o.a.createElement(y,{handleSubmit:this.handleNameSubmit,handleChange:this.handleNameChange}),a&&o.a.createElement(O,{petType:a,handleClose:this.closeConfirmation,dequeuePerson:this.dequeuePerson,dequeueAnimal:this.dequeueAnimal}),o.a.createElement(b,{people:t})))}}]),t}(o.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:d}),o.a.createElement(h.a,{path:"/adoption",component:N})))}}]),t}(a.Component);r.a.render(o.a.createElement(c.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.42ed1a2a.chunk.js.map