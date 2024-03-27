(function(){"use strict";var e={6029:function(e,t,o){var n=o(9242),a=o(3396);function s(e,t,o,s,l,i){const d=(0,a.up)("Navbar"),r=(0,a.up)("Notes"),c=(0,a.up)("Modal"),h=(0,a.up)("AddButton");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(d,{onChangeInput:t[0]||(t[0]=e=>l.search=e)}),(0,a.Wm)(r,{search:l.search,notes:i.filterNotes,onDelNote:i.delNote,onChangeNote:i.changeNote},null,8,["search","notes","onDelNote","onChangeNote"]),(0,a.wy)((0,a.Wm)(c,{edit:l.edit,editNote:l.editNote,onCloseModal:i.closeModal,onAddNote:i.addNote,onEditedNote:i.editedNote},null,8,["edit","editNote","onCloseModal","onAddNote","onEditedNote"]),[[n.F8,l.modalOpen]]),(0,a.Wm)(h,{onOpenModal:i.openModal},null,8,["onOpenModal"])],64)}o(560);var l=o(7139),i=o.p+"img/search.7bf44ec5.svg",d=o.p+"img/back.a1821e6b.svg",r=o.p+"img/clear.e9281049.svg";const c={class:"header"},h={class:"header__nav"},u={class:"header__title"},_=(0,a._)("img",{src:i,alt:""},null,-1),g=[_],p={class:"header__form"},m=(0,a._)("img",{src:d,alt:""},null,-1),f=[m],N={class:"container"},v=["placeholder"],w=(0,a._)("img",{src:r,alt:""},null,-1),b=[w];function y(e,t,o,s,i,d){return(0,a.wg)(),(0,a.iD)("header",c,[(0,a.Wm)(n.uT,{name:"header__nav"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("nav",h,[(0,a._)("button",{class:"header__lang",onClick:t[0]||(t[0]=(...e)=>d.switchLang&&d.switchLang(...e))},(0,l.zw)(e.$i18n.locale),1),(0,a._)("h1",u,(0,l.zw)(e.$t("notes")),1),(0,a._)("button",{class:"header__search",onClick:t[1]||(t[1]=e=>i.header=!1)},g)],512),[[n.F8,i.header]])])),_:1}),(0,a.Wm)(n.uT,{name:"header__form"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("nav",p,[(0,a._)("button",{class:"header__back",onClick:t[2]||(t[2]=e=>(i.header=!0,i.search=""))},f),(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{type:"text",class:"header__input",placeholder:e.$t("search"),"onUpdate:modelValue":t[3]||(t[3]=e=>i.search=e)},null,8,v),[[n.nr,i.search]])]),(0,a._)("button",{class:"header__clear",onClick:t[4]||(t[4]=e=>i.search="")},b)],512),[[n.F8,!i.header]])])),_:1})])}var k={data(){return{header:!0,search:""}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{search(e){this.$emit("changeInput",e)}}},C=o(89);const $=(0,C.Z)(k,[["render",y]]);var O=$,M=o.p+"img/list.4bf38f66.svg",D=o.p+"img/grid.e2c63407.svg";const z={class:"notes"},S={class:"container"},T={class:"notes__top"},j={key:0,class:"notes__title"},x={key:1,class:"notes__title"},E={src:M,alt:""},Z={src:D,alt:""};function B(e,t,o,s,i,d){const r=(0,a.up)("NotesItem");return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",S,[(0,a._)("div",T,[o.search.length>0?((0,a.wg)(),(0,a.iD)("h2",j,(0,l.zw)(e.$t("searchTitle")),1)):((0,a.wg)(),(0,a.iD)("h2",x,(0,l.zw)(o.notes.length>0?e.$t("allNotes"):e.$t("noNotes")),1)),(0,a._)("button",{class:"notes__btn",onClick:t[0]||(t[0]=e=>i.grid=!i.grid)},[(0,a.wy)((0,a._)("img",E,null,512),[[n.F8,i.grid]]),(0,a.wy)((0,a._)("img",Z,null,512),[[n.F8,!i.grid]]),(0,a._)("span",null,(0,l.zw)(i.grid?e.$t("list"):e.$t("grid")),1)])]),(0,a._)("div",{class:(0,l.C_)(["notes__list",{active:!i.grid}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.notes,(t=>((0,a.wg)(),(0,a.j4)(r,{grid:i.grid,key:t.id,note:t,onDelNote:o=>e.$emit("delNote",t.id),onChangeNote:o=>e.$emit("changeNote",t.id)},null,8,["grid","note","onDelNote","onChangeNote"])))),128))],2)])])}var I=o.p+"img/edit.10842793.svg",L=o.p+"img/del.f2533121.svg";const A={class:"notes__item"},F={class:"notes__item-title"},W={class:"notes__item-date"},q={class:"notes__item-desc"},J={class:"notes__item-btns"},H=(0,a._)("img",{src:I,alt:""},null,-1),Q=(0,a._)("img",{src:L,alt:""},null,-1);function R(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",{class:(0,l.C_)(["notes__item-top",{between:!o.grid}])},[(0,a._)("h2",F,(0,l.zw)(o.note.title),1),(0,a._)("p",W,(0,l.zw)(o.note.date),1)],2),(0,a._)("p",q,(0,l.zw)(o.note.desc),1),(0,a._)("div",J,[(0,a._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",o.note.id))},[H,(0,a._)("span",null,(0,l.zw)(e.$t("edit")),1)]),(0,a._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",o.note.id))},[Q,(0,a._)("span",null,(0,l.zw)(e.$t("del")),1)])])])}var U={props:{grid:Boolean,note:Object}};const V=(0,C.Z)(U,[["render",R]]);var P=V,Y={props:{notes:{typeof:Array,required:!0},search:String},components:{NotesItem:P},data(){return{grid:!0}}};const G=(0,C.Z)(Y,[["render",B]]);var K=G;const X={class:"modal__title"},ee={class:"modal__inputs"},te=(0,a._)("span",null,"Title",-1),oe=(0,a._)("span",null,"Content",-1),ne={class:"modal__btns"};function ae(e,t,o,s,i,d){return(0,a.wg)(),(0,a.j4)(n.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>d.closeModal&&d.closeModal(...e))},[(0,a._)("div",{class:"modal__block",onClick:t[5]||(t[5]=(0,n.iM)((()=>{}),["stop"]))},[(0,a._)("h2",X,(0,l.zw)(o.edit?e.$t("changeNote"):e.$t("addNote")),1),(0,a._)("div",ee,[(0,a._)("label",null,[te,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e)},null,512),[[n.nr,i.title]])]),(0,a._)("label",null,[oe,(0,a.wy)((0,a._)("textarea",{placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>i.desc=e)},null,512),[[n.nr,i.desc]])])]),(0,a._)("div",ne,[(0,a._)("button",{class:"modal__btn cancel",onClick:t[2]||(t[2]=(...e)=>d.closeModal&&d.closeModal(...e))},(0,l.zw)(e.$t("cancel")),1),o.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"modal__btn add",onClick:t[4]||(t[4]=(...e)=>d.changeNote&&d.changeNote(...e))},(0,l.zw)(e.$t("change")),1)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"modal__btn add",onClick:t[3]||(t[3]=(...e)=>d.addNote&&d.addNote(...e))},(0,l.zw)(e.$t("add")),1))])])])])),_:1})}var se=o(3029),le={props:{edit:Boolean,editNote:Object},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const e={id:(0,se.Z)(),title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc=""}},changeNote(){if(""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal()}}},data(){return{title:"",desc:""}}};const ie=(0,C.Z)(le,[["render",ae]]);var de=ie;const re=(0,a._)("img",{src:I,alt:""},null,-1),ce=[re];function he(e,t,o,n,s,l){return(0,a.wg)(),(0,a.iD)("button",{class:"addBtn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},ce)}var ue={};const _e=(0,C.Z)(ue,[["render",he]]);var ge=_e,pe={components:{Navbar:O,Notes:K,Modal:de,AddButton:ge},data(){return{modalOpen:!1,notes:[],editNote:{},edit:!1,search:""}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().trim().includes(this.search.toLowerCase().trim()))):this.notes}},methods:{openModal(){this.modalOpen=!0,this.edit=!1},closeModal(e){this.modalOpen=e},addNote(e){this.notes.push(e),this.modalOpen=!1},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},getNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeNote(e){this.modalOpen=this.edit=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))}},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(e)},deep:!0}},created(){this.getNotes()}};const me=(0,C.Z)(pe,[["render",s]]);var fe=me,Ne=JSON.parse('{"notes":"Eslatmalar","allNotes":"Barcha eslatmalar","noNotes":"Eslatmalar yoq","list":"Roʻyxat","grid":"Setka","edit":"O\'ZGARTIRISH","del":"o\'chirish","addNote":"Eslatma qo’shish","add":"Qo’shish","cancel":"Bekor qilish","changeNote":"Elsatmani tahrirlash","change":"o\'zgartirish","searchTitle":"Qidirish","search":"Qidirish..."}'),ve=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Заметок нет","list":"Список","grid":"Сетка","edit":"РЕДАКТИРОВАТЬ","del":"Удалить","addNote":"Добавить заметку","add":"Добавить","cancel":"Отмена","changeNote":"Изменить заметку","change":"изменить","searchTitle":"Поиск","search":"Поиск..."}');const we={uz:Ne,ru:ve};var be=o(7853);const ye=localStorage.lang,ke=(0,be.o)({legacy:!0,locale:ye||"ru",messages:we}),Ce=(0,n.ri)(fe);Ce.use(ke),Ce.mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var i=!0,d=0;d<n.length;d++)(!1&s||l>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(i=!1,s<l&&(l=s));if(i){e.splice(c--,1);var r=a();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/todolist/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,l=n[0],i=n[1],d=n[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(d)var c=d(o)}for(t&&t(n);r<l.length;r++)s=l[r],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self["webpackChunktodolost"]=self["webpackChunktodolost"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6029)}));n=o.O(n)})();
//# sourceMappingURL=app.965c49e7.js.map