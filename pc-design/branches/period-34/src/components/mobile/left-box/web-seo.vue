<template>
    <div class="wrapper design-module-wrapper">
        <div class="left">
            <div v-for="(list, key) in seoList" class="module-btn">
                <span @mouseover="mouseoverEvt(key)" @mouseout="mouseoutEvt" :class="{'on': selectedModuleIndex === key}">{{list.ch}}</span>
            </div>
        </div>
        <div class="right">
        	<div class="item" :class="{'on': selectedModuleIndex === 0}">
        		<div class="keywordOptTitleLine">
	        	    <div class="lineItem">
	        	     	<label >设置全站关键词</label>
	        	     	<el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="34"
					    content="蜘蛛在抓取网站页面时，网站的关键词能给蜘蛛提示网站的关键内容，搜索引擎也会以网站设置的关键词作为用户搜索结果匹配度的参考，需要与网站标题以及描述互相配合。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
	        	     	</el-popover>
	        	    </div>
	        	    <textarea maxlength="200"  v-model="siteDataList.keywords"  @input="changeSiteData" placeholder="可用3-5个关键词来描述与网站相关的内容"  class="keywordValArea"></textarea>
        		    <div class="keywordItemDisc" >多个关键词用英文逗号" , "隔开</div>
        		</div>
        		<div class="keywordOptTitleLine">
	        	    <div class="lineItem">
	        	     	<label >设置全站描述</label>
	        	     	<el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="44"
					    content="网站的页面描述很大程度地影响搜索结果页显示的描述内容，必须与网站的关键词以及标题相互匹配，能让搜索引擎更加认同你网站的质量。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
	        	     	</el-popover>
	        	    </div>
	        	    <textarea maxlength="200"  v-model="siteDataList.description"  @input="changeSiteData"   placeholder="请输入带网站关键词的网站描述"  class="descriptArea"></textarea>
        		</div>
        	 	  <div class="lineItem">
        	 	  	 <label>
        	 	  	 	   <input type="checkbox"  v-model="Static"/>启用网站html静态化
        	 	  	 </label>
        	 	  	 <el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="-10"
					    content="静态化页面有利于搜索引擎蜘蛛的爬行抓取，简明的“xxx.html”地址比动态页面地址更便于让用户记忆，静态页面的地址对搜索引擎也更加友好。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     	</el-popover>
        	 	  </div>
        	 	  <div class="lineItem">
        	 	  	 <label>
        	 	  	 	   <input type="checkbox" v-model="Jump"/>启用301跳转
        	 	  	 </label>
        	 	  	 <el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="34"
					    content="301跳转是指旧网址在废弃前转向新网址以保证用户的访问。启用301跳转，可以永久重定向网站页面，引导非主域名页面到主域名，帮助转移域名的权重，是搜索引擎优化的常用操作。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     	</el-popover>
        	 	  </div>
        	 	  <div class="lineItem">
        	 	  	 <label>
        	 	  	 	   <input type="checkbox" v-model="siteMap"/>启用网站sitemap
        	 	  	 </label>
        	 	  	<el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="10"
					    content="启用网站的sitemap是给搜索引擎的蜘蛛提供一张游览地图说明，sitemap让蜘蛛在访问网站时清晰地了解到网站的结构和页面之间的联系，清楚了解网站页面的层级关系，对提升网站索引有十分大的作用。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     	</el-popover>
        	 	  </div>
        	 	  <div class="lineItem">
        	 	  	 <label>
        	 	  	 	   <input type="checkbox" v-model="falsePage"/>编辑404页面
        	 	  	 </label>
        	 	  	 <el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="34"
					    content="HTTP 404或NOT FOUND错误信息代表当在浏览网页时，服务器无法正常提供信息，网页未找到。自定义编辑您的专属404页面，不仅可以使404页面更加美观，而且对SEO优化有十分大的作用。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     	</el-popover>
        	 	  </div>
        	</div>

        	<div class="item"  :class="{'on': selectedModuleIndex === 1}">
        		<!--<p>
        			<label><input type="checkbox"/>本页面独立设置关键词 </label>
        		</p>
        		<p>
        			<label><input type="checkbox"/>本页独立设置描述 </label>
        		</p>-->

        		<div class="keywordOptTitleLine">
	        	    <div class="lineItem">
	        	     	<label >设置当前页面关键词</label>
	        	     	<el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="10"
					    content="蜘蛛在抓取网站页面时，网站的关键词能给蜘蛛提示网站的关键内容，搜索引擎也会以网站设置的关键词作为用户搜索结果匹配度的参考，需要与网站标题以及描述互相配合。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     		</el-popover>
	        	    </div>
	        	    <textarea maxlength="200"  v-model="pageDataList.keywords"  @input="changePageData"  placeholder="可用3-5个关键词来描述与网站相关的内容"  class="keywordValArea"></textarea>
        		    <div  class="keywordItemDisc" >多个关键词用英文逗号" , "隔开</div>
        		</div>
        		<div class="keywordOptTitleLine">
	        	    <div class="lineItem">
	        	     	<label >设置当前页面描述</label>
	        	     	<el-popover
					    placement="bottom"
					    width="300"
					    trigger="hover"
					    :offset="22"
					    content="网站的页面描述很大程度地影响搜索结果页显示的描述内容，必须与网站的关键词以及标题相互匹配，能让搜索引擎更加认同你网站的质量。">
	        	     	<span class="iconfont"  slot="reference">&#xe60b;</span>
        	     		</el-popover>
	        	    </div>
	        	    <textarea maxlength="200"  v-model="pageDataList.description"  @input="changePageData" placeholder="请输入带网站关键词的网站描述"  class="descriptArea"></textarea>
        		</div>
        	</div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import seoList from './web-site-list'
import siteData from '../common/data-site'
import pageData from '../common/data-page'

let stat

export default {
  data () {
      	return {
	        selectedModuleIndex: 0,
	        seoList,
	        siteData,
	        pageData,
	        Static: true,
	        Jump: false,
	        siteMap: false,
	        falsePage: false
      	}
  },
  computed: {
      	selectedModule () {
      	 	return 1
      	},
      	siteDataList () {
      	  	    return this.siteData.get()
 		},
 		pageDataList () {
      	  	    return this.pageData.get()
 		}
  },
  components: {
  },
  methods: {
    	changeSiteData () {
    		// console.log(this.siteDataList)
    		this.siteData.init(this.siteDataList)
    	},
    	changePageData () {
    		// console.log(this.pageDataList)
    		this.pageData.init(this.pageDataList)
    	},
    	mouseoverEvt (key) {
        	clearTimeout(stat)
        	stat = setTimeout(() => {
	          	this.selectedModuleIndex = key
	        }, 200)
      	},
      	mouseoutEvt () {
        	clearTimeout(stat)
      	}
  },
  beforeDestroy () {
    $(this.$el).undelegate()
  },
  mounted () {
    //  	$('.lineItem .iconfont').mouseover(function(event){
    //  		$(event.target).next(".explain").addClass('active')
    //  	})
    //  	$('.lineItem .iconfont').mouseout(function(event){
    //  		$(event.target).next(".explain").removeClass('active')
    //  	})
  }
}
</script>

<style lang="scss">
    @import "../../../styles/variables";
    .right{
    	.item {
    		display:none;
    		&.on {
    			display: block;
    		}
    		width:100%;
    		.lineItem{
	    		margin-bottom:10px;
	    		height:25px;
	    		position: relative;
	    		label {
	    			float: left;
				    color: #333;
				    cursor: pointer;
				    font-size: 13px;
				    pointer-events: auto;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
	    			input {
	    				margin-right:5px;
	    			}
	    		}
	    		.iconfont{
				    float: left;
				    width: 18px;
				    height: 18px;
				    line-height: 18px;
				    margin-left: 15px;
				    cursor: pointer;
	    		}
			    .explain{
			    	 &.active {
			    	 	display: block;
			    	 }
			    	display: none;
				    position: absolute;
				    top: 30px;
				    left: 0px;
				    width: 100%;
				    padding: 20px 15px;
				    background: #fff7e9;
				    color: #f2a561;
				    box-sizing: border-box;
				    line-height: 22px;
				    z-index: 2;
				    font-size: 13px;
				    font-style: normal;
			    }
	    	}
	    	.keywordOptTitleLine{
    			.keywordItemDisc {
    				    font-size: 13px;
					    color: #333;
					    vertical-align: middle;
					    cursor: pointer;
					    margin-bottom: 10px;
    			}
	    		textarea{
	    			&[disabled]{
	    				background: #f8f8f8;
	    			}
	    			width: 100%;
				    height: 75px;
				    background: #fff;
				    border: 1px solid #e9e9e9;
				    font-family: "微软雅黑";
				    color: #646172;
				    font-size: 13px;
				    padding: 8px;
				    margin-bottom: 10px;
				    box-sizing: border-box;
				    resize: none;
	    		}
	    	}
    	}
    }
</style>
