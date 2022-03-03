"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[158],{92158:function(e,t,a){a.d(t,{Z:function(){return M}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{afterClose:e.onClosed,bodyStyle:{padding:0},maskClosable:!1,width:680,destroyOnClose:""},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.modalTitle)+" "),e.loading?a("a-icon",{attrs:{type:"loading"}}):e._e()]},proxy:!0}]),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"normal",attrs:{tab:"常规"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"文章标题"}},[a("a-input",{model:{value:e.form.model.title,callback:function(t){e.$set(e.form.model,"title",t)},expression:"form.model.title"}})],1),a("a-form-item",{attrs:{help:e.fullPath,label:"文章别名"}},[a("a-input",{scopedSlots:e._u([{key:"addonAfter",fn:function(){return[a("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"left",title:"是否确定根据标题重新生成别名？"},on:{confirm:e.handleGenerateSlug}},[a("a-icon",{staticClass:"cursor-pointer",attrs:{type:"sync"}})],1)]},proxy:!0}]),model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),a("a-form-item",{attrs:{label:"分类目录"}},[a("category-tree",{model:{value:e.form.model.categoryIds,callback:function(t){e.$set(e.form.model,"categoryIds",t)},expression:"form.model.categoryIds"}})],1),a("a-form-item",{attrs:{label:"标签"}},[a("TagSelect",{model:{value:e.form.model.tagIds,callback:function(t){e.$set(e.form.model,"tagIds",t)},expression:"form.model.tagIds"}})],1),a("a-form-item",{attrs:{label:"摘要"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从文章中自动截取",type:"textarea"},model:{value:e.form.model.summary,callback:function(t){e.$set(e.form.model,"summary",t)},expression:"form.model.summary"}})],1)],1)],1),a("a-tab-pane",{key:"advanced",attrs:{tab:"高级"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"禁止评论"}},[a("a-switch",{model:{value:e.form.model.disallowComment,callback:function(t){e.$set(e.form.model,"disallowComment",t)},expression:"form.model.disallowComment"}})],1),a("a-form-item",{attrs:{label:"是否置顶"}},[a("a-switch",{model:{value:e.topPriority,callback:function(t){e.topPriority=t},expression:"topPriority"}})],1),a("a-form-item",{attrs:{label:"发表时间："}},[a("a-date-picker",{attrs:{defaultValue:e.createTimeDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择文章发表时间",showTime:""},on:{change:e.onCreateTimeSelect,ok:e.onCreateTimeSelect}})],1),a("a-form-item",{attrs:{label:"自定义模板："}},[a("a-select",{model:{value:e.form.model.template,callback:function(t){e.$set(e.form.model,"template",t)},expression:"form.model.template"}},[a("a-select-option",{key:"",attrs:{value:""}},[e._v("无")]),e._l(e.templates,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)],1),a("a-form-item",{attrs:{label:"访问密码："}},[a("a-input-password",{attrs:{autocomplete:"new-password"},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),a("a-form-item",{attrs:{label:"封面图："}},[a("div",{staticClass:"post-thumb"},[a("a-space",{attrs:{direction:"vertical"}},[a("img",{staticClass:"img",attrs:{src:e.form.model.thumbnail||"/images/placeholder.jpg",alt:"Post cover thumbnail"},on:{click:function(t){e.attachmentSelectVisible=!0}}}),a("a-input",{attrs:{"allow-clear":"",placeholder:"点击封面图选择图片，或者输入外部链接"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1)],1)])],1)],1),a("a-tab-pane",{key:"seo",attrs:{tab:"SEO"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"自定义关键词"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"多个关键词以英文逗号隔开，如不填写，将自动使用标签作为关键词",type:"textarea"},model:{value:e.form.model.metaKeywords,callback:function(t){e.$set(e.form.model,"metaKeywords",t)},expression:"form.model.metaKeywords"}})],1),a("a-form-item",{attrs:{label:"自定义描述"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从文章中自动截取",type:"textarea"},model:{value:e.form.model.metaDescription,callback:function(t){e.$set(e.form.model,"metaDescription",t)},expression:"form.model.metaDescription"}})],1)],1)],1),a("a-tab-pane",{key:"meta",attrs:{tab:"元数据"}},[a("MetaEditor",{attrs:{metas:e.form.model.metas,targetId:e.form.model.id,target:"post"},on:{"update:metas":function(t){return e.$set(e.form.model,"metas",t)}}})],1)],1)],1),a("template",{slot:"footer"},[e._t("extraFooter"),a("a-button",{attrs:{disabled:e.loading},on:{click:function(t){e.modalVisible=!1}}},[e._v(" 关闭")]),e.form.model.id?e._e():a("ReactiveButton",{attrs:{errored:e.form.draftSaveErrored,loading:e.form.draftSaving,erroredText:"保存失败",loadedText:"保存成功",text:"保存草稿",type:"danger"},on:{callback:e.handleSavedCallback,click:function(t){return e.handleCreateOrUpdate("DRAFT")}}}),a("ReactiveButton",{attrs:{errored:e.form.saveErrored,erroredText:(e.form.model.id?"保存":"发布")+"失败",loadedText:(e.form.model.id?"保存":"发布")+"成功",loading:e.form.saving,text:e.form.model.id?"保存":"发布"},on:{callback:e.handleSavedCallback,click:function(t){return e.handleCreateOrUpdate()}}})],2),a("AttachmentSelectModal",{attrs:{multiSelect:!1,visible:e.attachmentSelectVisible},on:{"update:visible":function(t){e.attachmentSelectVisible=t},confirm:e.handleSelectPostThumbnail}})],2)},l=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree",{attrs:{checkedKeys:e.categoryIds,treeData:e.categoryTree,checkStrictly:"",checkable:"",defaultExpandAll:"",showLine:""},on:{check:e.onCheck}})},s=[],i=a(1540);function n(e,t){t.forEach((t=>{e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((e=>n(e,t))):e.isLeaf=!0}function m(e){const t={key:0,title:"top",children:[]};return n(t,e),t.children}var d={name:"CategoryTree",model:{prop:"categoryIds",event:"check"},props:{categoryIds:{type:Array,required:!1,default:()=>[]}},data(){return{categories:{data:[],loading:!1}}},computed:{categoryTree(){return this.categories.data.length?m(this.categories.data):[]}},created(){this.handleListCategories()},methods:{async handleListCategories(){try{this.categories.loading=!0;const{data:e}=await i.Z.category.list({sort:[],more:!1});this.categories.data=e}catch(e){this.$log.error(e)}finally{this.categories.loading=!1}},onCheck(e,t){this.$log.debug("Chekced keys",e),this.$log.debug("e",t),this.$emit("check",e.checked)}}},c=d,h=a(18156),f=(0,h.Z)(c,r,s,!1,null,null,null),u=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-select",{staticClass:"w-full",attrs:{"token-separators":[",","|"],allowClear:"",mode:"tags",placeholder:"选择或输入标签"},on:{change:e.handleChange},model:{value:e.selectedTagNames,callback:function(t){e.selectedTagNames=t},expression:"selectedTagNames"}},e._l(e.tags,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.name}},[e._v(e._s(t.name))])})),1)},g=[],b=a(10299),y=a.n(b),v={name:"TagSelect",model:{prop:"tagIds",event:"change"},props:{tagIds:{type:Array,required:!1,default:()=>[]}},data(){return{tags:[],selectedTagNames:[]}},created(){this.handleListTags()},watch:{tags(e){e&&(this.selectedTagNames=this.tagIds.map((e=>this.tagIdMap[e].name)))},tagIds:{handler(e){this.tags.length&&(this.selectedTagNames=e.map((e=>this.tagIdMap[e].name)))},deep:!0}},computed:{tagIdMap(){const e={};return this.tags.forEach((t=>{e[t.id]=t})),e},tagNameMap(){const e={};return this.tags.forEach((t=>{e[t.name]=t})),e}},methods:{handleListTags(e){i.Z.tag.list({sort:"name,asc",more:!0}).then((t=>{this.tags=t.data,e&&e()}))},handleChange(){const e=this.selectedTagNames.filter((e=>!this.tagNameMap[e]));if(this.$log.debug("Tag names to create",e),!e.length){const e=this.selectedTagNames.map((e=>this.tagNameMap[e].id));return void this.$emit("change",e)}const t=e.map((e=>i.Z.tag.create({name:e})));y().all(t).then(y().spread((()=>{this.handleListTags((()=>{this.$log.debug("Tag name map",this.tagNameMap);const e=this.selectedTagNames.map((e=>this.tagNameMap[e].id));this.$emit("change",e)}))})))}}},k=v,$=(0,h.Z)(k,p,g,!1,null,null,null),T=$.exports,S=a(59563),C=a(3832),w=a(86637),x=a(73511),_=a.n(x),E=a(98906),D={name:"PostSettingModal",mixins:[C.jB,C.KT],components:{CategoryTree:u,TagSelect:T,MetaEditor:S.Z},props:{visible:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},post:{type:Object,default:()=>({})},savedCallback:{type:Function,default:null}},data(){return{form:{model:{},saving:!1,saveErrored:!1,draftSaving:!1,draftSaveErrored:!1},templates:[],attachmentSelectVisible:!1}},computed:{...(0,E.Se)(["options"]),modalVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}},modalTitle(){return this.form.model.id?"文章设置":"文章发布"},createTimeDefaultValue(){if(this.form.model.createTime){const e=new Date(this.form.model.createTime);return(0,w._)(e,"YYYY-MM-DD HH:mm:ss")}return(0,w._)(new Date,"YYYY-MM-DD HH:mm:ss")},topPriority:{get(){return 0!==this.form.model.topPriority},set(e){this.form.model.topPriority=e?1:0}},fullPath(){const e=this.options.post_permalink_type,t=this.options.blog_url,a=this.options.archives_prefix,o=this.options.path_suffix||"",l=this.form.model.slug||"{slug}",r=this.form.model.createTime||new Date,s=this.form.model.id||"{id}";switch(e){case"DEFAULT":return`${t}/${a}/${l}${o}`;case"YEAR":return`${t}${(0,w._)(r,"/YYYY/")}${l}${o}`;case"DATE":return`${t}${(0,w._)(r,"/YYYY/MM/")}${l}${o}`;case"DAY":return`${t}${(0,w._)(r,"/YYYY/MM/DD/")}${l}${o}`;case"ID":return`${t}/?p=${s}`;case"ID_SLUG":return`${t}/${a}/${s}${o}`;default:return""}}},watch:{modalVisible(e){e&&(this.form.model=Object.assign({},this.post),this.form.model.slug||this.form.model.id||this.handleGenerateSlug())},post:{deep:!0,handler(e){this.form.model=Object.assign({},e)}}},created(){this.handleListCustomTemplates()},methods:{async handleCreateOrUpdate(e="PUBLISHED"){if(!this.form.model.title)return void this.$notification["error"]({message:"提示",description:"文章标题不能为空！"});this.form.model.status=e,this.form.model.keepRaw=!0;const{id:t,status:a}=this.form.model;try{this.form["PUBLISHED"===a?"saving":"draftSaving"]=!0,t?await i.Z.post.update(t,this.form.model):await i.Z.post.create(this.form.model)}catch(o){this.form["PUBLISHED"===a?"saveErrored":"draftSaveErrored"]=!0,this.$log.error(o)}finally{setTimeout((()=>{this.form.saving=!1,this.form.draftSaving=!1}),400)}},handleSavedCallback(){this.form.saveErrored||this.form.draftSaveErrored?(this.form.saveErrored=!1,this.form.draftSaveErrored=!1):this.savedCallback&&this.savedCallback()},async handleListCustomTemplates(){try{const e=await i.Z.theme.listCustomPostTemplates();this.templates=e.data}catch(e){this.$log.error(e)}},onCreateTimeSelect(e){this.form.model.createTime=e.valueOf()},handleGenerateSlug(){if(this.form.model.title&&_().isSupported()){let e="";const t=_().parse(this.form.model.title.replace(/\s+/g,"").toLowerCase());let a;t.forEach((t=>{if(2===t.type){const o=t.target?t.target.toLowerCase():"";e+=e&&!/\n|\s/.test(a.target)?"-"+o:o}else e+=(a&&2===a.type?"-":"")+t.target;a=t})),this.$set(this.form.model,"slug",e)}},handleSelectPostThumbnail({raw:e}){e.length&&(this.form.model.thumbnail=encodeURI(e[0].path)),this.attachmentSelectVisible=!1},onClosed(){this.$emit("onClose"),this.$emit("onUpdate",this.form.model)}}},Y=D,I=(0,h.Z)(Y,o,l,!1,null,null,null),M=I.exports}}]);