<template>
  <div class="">
    <div class="body" style="">
        <div class="search-wrapper" data-search-type="movie">
			<!-- 搜索输入框 -->
            <div class="search-header">
            	<div class="input-wrapper">
            		<img class="search-icon" src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png" alt="">
            		<input @input="dealInput(kw)" @blur="dealBlur(kw)" v-model="kw" class="search-input" type="text" placeholder="搜电影、搜影院">
            		<img class="del-input" style="display:none" src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png" alt="">
            	</div>
            	<div @click="$router.push('/')" class="cancel">取消</div>
            </div>
            <!-- 这里是搜索历史结果，默认也是显示 -->
            <div class="search-history">
            
            	<div v-for="(item,index) in movie" :key="index" class="history-item" :data-index="index">
            		<span class="history-icon"></span>
            		<span @click="dealHistorySearch(index)" class="word one-line">{{item}}</span>
            		<div @click="dealDelItem(index)" class="del-word"></div>
            	</div>
				
            </div>
			
            <div class="hot-search">
                <h3>热门搜索</h3>
                <div class="hot-movies-wrap">
                </div>
            </div>

            <div class="search-result" style="">
                <div class="result-wrapper">
                    <div class="result">
                        <h3>电影/电视剧/综艺</h3>
                        <div v-for="(item,index) in movieList" :key="index" class="list">
                            <div class="movie cell" data-id="344649">
                                <img class="poster" :src="item.img|wh128x180" alt="">
								
								<!-- 购票item.showst=3 -->
                                <div v-if="item.showst==3" class="info">
                                    <div class="name-score">
                                        <p class="name">
                                            <span class="one-line">{{item.nm}}</span>
                                            <span v-if="item.version=='v3d' || item.version=='v3d imax' || item.version=='v2d imax'" :class="{'version v3d':item.version=='v3d','version v3d imax':item.version=='v3d imax','version v2d imax':item.version=='v2d imax'}"></span>
                                        </p>
                                        <span class="score">
                                            <span class="num">{{item.sc}}</span>分
                                        </span>
                                    </div>
                                    <div data-v-4ad41bb8 class="detail-section">
                                        <div data-v-4ad41bb8 class="detail-items">
                                            <p class="ename one-line">{{item.enm}}</p>
                                            <p class="catogary">{{item.cat}}</p>
                                            <p class="release">{{item.rt}}</p>
                                        </div>
                                        <div data-v-4ad41bb8 class="buy-btn sale" data-id="344649">购票</div>
                                    </div>
                                </div>
								
								<!-- 购票item.showst=2 -->
								<div v-if="item.showst==2" class="info">
								    <div class="name-score">
								        <p class="name">
								            <span class="one-line">{{item.nm}}</span>
								            <span v-if="item.version=='v3d' || item.version=='v3d imax' || item.version=='v2d imax'" :class="{'version v3d':item.version=='v3d','version v3d imax':item.version=='v3d imax','version v2d imax':item.version=='v2d imax'}"></span>
								        </p>
								        <span class="score">
								            <span class="num">{{item.sc}}</span>分
								        </span>
								    </div>
								    <div data-v-4ad41bb8 class="detail-section">
								        <div data-v-4ad41bb8 class="detail-items">
								            <p class="ename one-line">{{item.enm}}</p>
								            <p class="catogary">{{item.cat}}</p>
								            <p class="release">{{item.rt}}</p>
								        </div>
								        <!-- <div data-v-4ad41bb8 class="buy-btn sale" data-id="344649">购票</div> -->
								    </div>
								</div>
								
								<!-- 预售item.showst=4 -->
								<div v-if="item.showst==4" class="info">
								    <div class="name-score">
								        <p class="name">
								            <span class="one-line">{{item.nm}}</span>
								            <span v-if="item.version=='v3d' || item.version=='v3d imax' || item.version=='v2d imax'" :class="{'version v3d':item.version=='v3d','version v3d imax':item.version=='v3d imax','version v2d imax':item.version=='v2d imax'}"></span>
								        </p>
								        <span class="wish">
								            <span class="num">{{item.wish}}</span>人想看
								        </span>
								    </div>
								    <div data-v-4ad41bb8 class="detail-section">
								        <div data-v-4ad41bb8 class="detail-items">
								            <p class="ename one-line">{{item.enm}}</p>
								            <p class="catogary">{{item.cat}}</p>
								            <p class="release">{{item.rt}}</p>
								        </div>
								        <div data-v-4ad41bb8 class="buy-btn presale" data-id="344649">预售</div>
								    </div>
								</div>
								
								<!-- 想看item.showst=1 -->
								<div v-if="item.showst==1" class="info">
								    <div class="name-score">
								        <p class="name">
								            <span class="one-line">{{item.nm}}</span>
								            <span v-if="item.version=='v3d' || item.version=='v3d imax' || item.version=='v2d imax'" :class="{'version v3d':item.version=='v3d','version v3d imax':item.version=='v3d imax','version v2d imax':item.version=='v2d imax'}"></span>
								        </p>
								        <span class="wish">
								            <span class="num">{{item.wish}}</span>人想看
								        </span>
								    </div>
								    <div data-v-4ad41bb8 class="detail-section">
								        <div data-v-4ad41bb8 class="detail-items">
								            <p class="ename one-line">{{item.enm}}</p>
								            <p class="catogary">{{item.cat}}</p>
								            <p class="release">{{item.rt}}</p>
								        </div>
								        <div data-v-4ad41bb8 class="btn toggle-wish-btn" data-id="344649" data-wishst="0">想看</div>
								    </div>
								</div>
								
                            </div>
                            
                        </div>
                        <div class="more-result" data-target="movies" data-total="9182">查看全部9182部影视剧</div>
                    </div>
                    <div class="result">
                        <h3>影院</h3>
                        <div v-for="(item,index) in cinemaList" :key="index" class="list">
                            <div class="cinema cell" data-id="10901">
                                <div class="info">
                                    <p class="name-price">
                                        <span class="name one-line">{{item.nm}}</span>
                                        <span class="sell-price">
                                            <span class="price">{{item.sellPrice}}</span>
                                            元起
                                        </span>
                                    </p>
                                    <p class="address one-line">{{item.addr}}</p>
                                    <p class="feature-tags">
                                        <span v-if="item.sell == true">座</span>
										<span v-if="item.hallType == '杜比全景声厅'">杜比全景声厅</span>
										<span v-if="item.allowRefund == 1">退</span>
                                        <span v-if="item.endorse == 1">改签</span>
                                        <span v-if="item.snack == 1" class="featrue">小吃</span>
                                        <span v-if="item.vipDesc == '折扣卡'" class="featrue">折扣卡</span>
                                    </p>
                                </div>
                                <div class="distance">{{item.distance}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      movie:[],
	  kw:'',
	  movieList:[],
	  cinemaList:[]
    }
  },
    created(){
      this.$store.commit("setNavTitle","猫眼电影")  
	  //加载历史记录
	  this.loadHistory()
	  
    },
    mounted(){
       var searchHistory = document.querySelector('.search-history')
	   var hotSearch = document.querySelector('.hot-search')
	   var searchResult = document.querySelector('.search-result')
       searchHistory.style.display='block' 
	   hotSearch.style.display='block'
	   searchResult.style.display='none'
    },
    methods:{
		dealInput(kw){
			var searchHistory = document.querySelector('.search-history')
			var hotSearch = document.querySelector('.hot-search')
			var searchResult = document.querySelector('.search-result')
			if(kw == ''){
				searchHistory.style.display='block' 
				hotSearch.style.display='block'
				searchResult.style.display='none'
				return
			}
			this.getSearchList(kw)
			searchHistory.style.display='none' 
			hotSearch.style.display='none'
			searchResult.style.display='block'
			
		},
		dealHistorySearch(index){
			var searchHistory = document.querySelector('.search-history')
			var hotSearch = document.querySelector('.hot-search')
			var searchResult = document.querySelector('.search-result')
			var kw = this.movie[index]
			this.getSearchList(kw)
			searchHistory.style.display='none' 
			hotSearch.style.display='none'
			searchResult.style.display='block'
			this.setHistory(kw)
		},
		dealDelItem(index){
			this.movie.splice(index,1)
			var history = JSON.parse(localStorage.search);
			history.movie = this.movie
			localStorage.search = JSON.stringify(history)
		},
		dealBlur(kw){
			var searchHistory = document.querySelector('.search-history')
			var hotSearch = document.querySelector('.hot-search')
			var searchResult = document.querySelector('.search-result')
			// var kw = this.kw;
			console.log("kw="+kw)
			if(kw == ''){
				searchHistory.style.display='block' 
				hotSearch.style.display='block'
				searchResult.style.display='none'
				return
			}
// 			this.getSearchList(kw)
			searchHistory.style.display='none' 
			hotSearch.style.display='none'
			searchResult.style.display='block'
			var data = {
				movie:[],
				cinema:[]
			}
			if(localStorage.search == undefined){
				localStorage.search = JSON.stringify(data)
			}
			this.setHistory(kw)
		},
		loadHistory(){
			if(localStorage.search != undefined){
				var history = JSON.parse(localStorage.search);
				var movie = history.movie
				var cinema = history.cinema
				this.movie = movie
			}
		},
		getSearchList(kw){
			this.request.getSearchList({kw},(data)=>{
					  this.movieList = data.movies.list
					  this.cinemaList = data.cinemas.list
			})
			var searchInput = document.querySelector('.search-input')
			searchInput.value = kw
			console.log('searchInput.value='+searchInput.value)
		},
		setHistory(kw){
			var history = JSON.parse(localStorage.search);
			var movie = history.movie
			for(var i in movie){
				var item = movie[i]
				if (kw == item){
					movie.splice(i,1)
				}
			}
			movie.unshift(kw)
			if(movie.length>=3){
				movie.splice(3,1)
			}
			localStorage.search = JSON.stringify(history)
		}
    },
    computed:{
        
    },
    watch:{
        
    },
    computents:{
        
    }
}
</script>

<style scoped>
.result .more-result, .result .no-related-result {
    text-align:center;
    line-height:44px;
    height:44px;
    font-size:15px
}
.hot-search, .result .movie .detail-section, .search-header, .search-header .del-input {
    position:relative
}
h3 {
    font-weight:400
}
h3, p {
    margin:0
}
.one-line {
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden
}
.search-wrapper {
    background-color:#f5f5f5;
    height:100vh
}
.result-wrapper {
    height:100%;
    overflow:auto;
    -webkit-overflow-scrolling:touch
}
.search-header {
    display:-webkit-box;
    display:flex;
    -webkit-box-align:center;
    align-items:center;
    padding:8px 0 8px 10px;
    background-color:#f5f5f5;
    border-bottom:1px solid #e5e5e5;
    z-index:1
}
.search-header .input-wrapper {
    padding:0 10px;
    border:1px solid #e6e6e6;
    border-radius:5px;
    background-color:#fff;
    -webkit-box-flex:1;
    flex-grow:1
}
.search-header .search-icon {
    width:15px;
    height:15px;
    margin-right:6px;
    float:left;
    position:relative;
    top:6px
}
.search-header .search-input {
    -webkit-box-flex:1;
    flex:1;
    border:none;
    font-size:13px;
    color:#333;
    line-height:20px;
    padding:4px 0;
    width:calc(100% - 40px)
}
.search-header .del-input {
    width:15px;
    height:15px;
    float:right;
    top:6px
}
.search-header .cancel {
    height:30px;
    line-height:30px;
    padding:0 10px;
    font-size:16px;
    color:#f03d37
}
.search-history {
    background-color:#fff
}
.search-history .history-item {
    margin-left:15px;
    display:-webkit-box;
    display:flex;
    -webkit-box-pack:justify;
    justify-content:space-between;
    border-bottom:1px solid #e5e5e5;
    line-height:44px;
    -webkit-box-align:center;
    align-items:center
}
.search-history .history-item:last-child {
    border-bottom:none
}
.search-history .history-item .history-icon {
    width:15px;
    height:15px;
    margin-right:10px;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAVFBMVEUAAACrq6u2traqqqqrq6utra2vr6+qqqqqqqqrq6urq6urq6urq6usrKyqqqqrq6urq6urq6urq6urq6uqqqqsrKyrq6uqqqqvr6+qqqqrq6uqqqqL2Pn/AAAAG3RSTlMA7gf3nBcL5NSxqHFJNN/IwoWDeWNQTyQgNumZiWHTAAABnklEQVRIx5SS2xKDIAxEIwJVQGu91vb//7PdyEynigL74DjiSZZNKKjVyq4tyrJoO2kbSpOYTfH+U2FmEccGT+3YIYKOt/eJbuMF5ir/V1lbtygh1OJsXfqPlTvjHt6WnDTRT3qS3v4jiOl6a9brwFm/ta0DZ8/NplQUlJKb3eeBe3ECFzNrOLfXjtTc767oQurOPf/d8v2MiMzY8D0PeRqKyuyydexTxEHBbn/zrJCLogQpJFSR14gyDSWpwb+j748qkhIl4U4QNGBfDkZROWgWOzRwQyxiT6kg9VhntJzxotNBjUazn42kdJCknzkKTDngBItEK6LROaBGPCtZXr8ckBfbsmObB1pOpcPy5YFY7Y7a73PJA5fvUcuhqjxQcayISOSBAoP4dF4GJwDDQAzrAh2g+y/ap0BwGKR/IOR8tnMfFD54X1X4qvfjCD/OPQ7hcSCAgQWA5AaWHCIfSOQvazXQWrHIGy8y1rHBOjCric0Ke9xgj9mQawTU0MkxV4O1RnkuD7mu9ILUK1kvgb129qLbq3Uv8/v78D0AP8WcS0GTLxhaAAAAAElFTkSuQmCC) no-repeat;
    background-size:contain;
    display:inline-block;
    -webkit-box-flex:0;
    flex:0 0 auto
}
.search-history .history-item .word {
    color:#333;
    font-size:15px;
    -webkit-box-flex:1;
    flex:1 1 auto;
    display:inline-block
}
@media only screen and (max-device-width:320px) {
    .search-history .history-item .word {
        max-width:230px
    }
}
.search-history .history-item .del-word {
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAASFJREFUKBV9kj2OwjAQhWPTkwppL0ADXZIGutVKHICODglWVLtUXIIOuIBvshfIj4SUKhdAossBEt7LMsFEmJGcmWTeZ09mrOI4PiqlRliLIAiu3huD9hfpNbRzTaiu66+qqv7SNB24uCRJdsgdoB/D+wQXCHKssQsmhM330FbQrcIwTBQCjycRIoyVa60/pewXkIHGa0AGr2CcsuycZKiltSBfbBhlXQB9WOUZasSeQH4kDOB8h+DqbRRFJwHEawnEQ8jyeBIhbrzhZpIX/wTajQC0hcjZ7Ra0IQArlsfuuuDmH7sQ5mQANGY3DB/aUSkkfjBDXjsZrvlHHs8u7Pv+VAP6fgcR52Wwyy7LcuJlWTZEqeFjf3dUFEUfF32GxvVumtjRa2eCUPQAAAAASUVORK5CYII=);
    background-repeat:no-repeat;
    background-position:15px;
    background-size:10px;
    -webkit-align-self:center;
    align-self:center;
    padding:17px 15px;
    width:10px;
    height:10px;
    -webkit-box-flex:0;
    flex:0 0 auto
}
.hot-search {
    padding:0 0 8px 15px;
    background-color:#fff;
    top:-1px
}
.hot-search h3 {
    border-top:1px solid #e5e5e5;
    padding-top:17px;
    font-size:15px;
    color:#666
}
.hot-search .hot-movies-wrap {
    margin-top:15px;
    padding-right:15px;
    overflow:hidden
}
.hot-search .hot-movies-wrap .hot-movie {
    float:left;
    padding:6px 12px;
    margin:0 12px 12px 0;
    background-color:#f5f5f5;
    border-radius:4px;
    font-size:12px;
    color:#333
}
.result-list {
    padding-left:15px;
    height:100%;
    overflow:auto;
    -webkit-overflow-scrolling:touch
}
.result {
    margin-bottom:10px;
    background-color:#fff
}
.result .everyone-search {
    color:#999;
    font-size:13px;
    padding:6px 15px;
    background-color:#f5f5f5
}
.result .everyone-search+.list {
    border-top:none
}
.result .no-related-result {
    color:#999
}
.result h3 {
    font-size:15px;
    color:#999;
    padding:9px 15px
}
.result .list {
    padding-left:15px;
    border-top:1px solid #e6e6e6
}
.result .cell, .result .list {
    border-bottom:1px solid #e6e6e6
}
.result .cell:last-child {
    border-bottom:none
}
.result .more-result {
    color:#ef4238
}
.result .movie {
    padding:12px 0;
    min-height:90px
}
.result .movie .name-score {
    font-size:16px;
    color:#222;
    display:-webkit-box;
    display:flex;
    -webkit-box-pack:justify;
    justify-content:space-between;
    margin-bottom:2px
}
.result .movie .name-score .name {
    display:-webkit-box;
    display:flex;
    -webkit-box-align:center;
    align-items:center;
    -webkit-box-flex:1;
    flex-grow:1;
    max-height:24px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis
}
.result .movie .name-score .name .one-line {
    display:inline-block;
    font-weight:700;
    font-size:17px
}
.result .movie .name-score .score, .result .movie .name-score .wish {
    color:#fa0;
    font-size:10px;
    flex-shrink:0;
    padding-left:5px
}
.result .movie .name-score .num {
    font-size:16px
}
.result .movie .name-score .no-score {
    font-size:14px;
    color:#666;
    flex-shrink:0
}
.result .movie .detail-section .detail-items {
    -webkit-box-flex:1;
    flex-grow:1;
    overflow:hidden;
    padding-right:10px;
    margin-right:48px;
    min-height:27px
}
.result .movie .detail-section .catogary, .result .movie .detail-section .ename, .result .movie .detail-section .release {
    font-size:13px;
    color:#666;
    margin-top:2px
}
.result .movie .detail-section .btn, .result .movie .detail-section .buy-btn {
    color:#fff;
    border-radius:4px;
    font-size:12px;
    -webkit-align-self:flex-end;
    align-self:flex-end;
    flex-shrink:0;
    width:48px;
    text-align:center;
    height:27px;
    line-height:27px;
    right:0;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto
}
.result .movie .detail-section .sale {
    background-color:#ef4238
}
.result .movie .detail-section .presale {
    background-color:#3c9fe6
}
.result .movie .detail-section .toggle-wish-btn[data-wishst="0"] {
    background-color:#faaf00;
    border:none;
    color:#fff
}
.result .movie .detail-section .toggle-wish-btn[data-wishst="1"] {
    background-color:#fff;
    border:1px solid #eaeaea;
    color:#666
}
.result .movie .poster {
    background-color:#eee;
    width:64px;
    height:90px;
    float:left;
    margin-right:10px
}
.result .movie .info {
    margin-right:15px;
    margin-top:1px
}
.result .cinema {
    display:-webkit-box;
    display:flex;
    -webkit-box-align:center;
    align-items:center;
    -webkit-box-pack:justify;
    justify-content:space-between;
    padding:15px 15px 15px 0
}
.result .cinema .info {
    -webkit-box-flex:1;
    flex:1;
    overflow:hidden
}
.result .cinema .name-price {
    font-size:16px;
    color:#000;
    margin-bottom:6px;
    display:-webkit-box;
    display:flex
}
.result .cinema .sell-price {
    font-size:11px;
    color:#999;
    white-space:nowrap;
    margin-left:10px
}
.result .cinema .price {
    font-size:17px;
    color:#ef4238
}
.result .cinema .address {
    font-size:13px;
    color:#999
}
.result .cinema .feature-tags {
    margin-top:7px
}
.result .cinema .feature-tags span {
    border:1px solid #589daf;
    color:#589daf;
    position:relative;
    display:inline-block;
    padding:0 3px;
    height:15px;
    line-height:15px;
    border-radius:2px;
	font-size: 12px;
}
.result .cinema .feature-tags span.featrue {
    color:#f90;
    border-color:#f90;
}
.result .cinema .distance {
    font-size:13px;
    color:#999
}
.version {
    background-size:contain;
    background-repeat:no-repeat;
    height:14px;
    margin-left:5px;
    display:inline-block
}
.version.v2d.imax {
    width:43px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAcCAYAAAD7lUj9AAAAAXNSR0IArs4c6QAABotJREFUaAXtWmlsVFUUPrN2mzJtaacUSkspLQVa2SooW7CpQSAKpDFqjEiUGENigvEPP8B/+EtBxfhTDQkiIJBYCxpasKyytWUrSzeg0+k27bS0na4z4/kufePr7JOxgjInmfS+e887797vnvOdc1+fgliK9lbkO+wjhx0OSnWQQ4m+sASHgFal7OQ7yhwOzceH3p3XpACodtvIxScN6NFNi4JbyVOmbekfppO15uGD10y9Drs6Ty08NeylIW9TfJSGivJSNGxId7CqabcS4R+y1bABJwIFMxI1CoWiUPmkKcA5o/9JA547OGKLDyeqcdrQMLBhYMcJgXEyq/ZnV8EKyzISKCtRR8QXNe19dLahgxyjN+YYdDQ9Idppxs4Drb2DZOzqp/a+IWd/KI3y+g6yc5Z9KTNRmDlVZ6b+YTstmhpHiTFar6bLas3Md3Z6MT2ewH1yae4ZpMqmbtJHqmnptAT5ENWY+8Rvqj6S8lImjBkbstmptMZMSsbi5ewkUimAkLv4BJaLXtpemC2M9w/b2JiCXp2tpFdyDPTpb3fIxotdnBZP63NT3C1zT5Wpm7491xAywIeumQgLkoDdX9lE7WLzkumDF9I9PhvgfHO2Xoylx0e5AfvzdROdrGknFSOUO2mCAFgyZNBF0M7SezTAm/LlulyaFBshDdHeK41UcruVip6b7BVUKPvk2NfnThagHr3RTJsPVtHG/RX0y60Wmp0cS6tnGZwPQ2P78dv09o9X6b0DlbStpJow8Tms98VruRQb4XP/xtgJ5gKeax2yebzl1+oWj/3oBGDn73fS5AmRZOMQO8WeLRd48ZalGcju9DVvjhSdN1t66NidNsqcGENvzZ8iv8Wt7RPYFdMn0hBP4qeqJrKyx8JrpAnPTGJqkAk8GovECeRuey/tqzDS5+W1AlR/k5CZCbgJTxvgZ55gr3MVzOH8fYvwRtcxXIPKcO+m59MohcEtq3W3AZopzEqi2609VMzOhM3Yc66etCoFbV2R6dNb8QyvwIJD7rT10pGbzQJQKEMyE2PE326evD+59LCLHlisgi786QY7nhQTQdm8ucc4LMHrcjnOXgWaWuLCnZJOKW+GPlJDC1L1tJJ5G/kAzuAq7y9Op2SmgX2VRtpVXkdtzMsb89MolbnXn3gFFpPdfbqODrC3SqJmtNfNmUQOnvSZBrxz8C/G7gFKiNbyTnt9lH8jXjTWzkqmNubaSw8tTo1hm4N+v9tGcznppOqjnP1SA/O5yw6znKMRiQfAQkrvuXttpFpJW5dn0gjbvNxo4Y2IozWcXwKRgFebEK2hnatnUY4hlvhFg8cd9vTAvsER0a2LUHkaDqkPHhnPm1Ys49PTHOaPBoZp7exkj7bhrRAJUINOK3LGOeZchLurxHE1oRl1iiQfFYjrfQEBO3+KnnZxEkqLixKZFpwbqCRxhgVPd1r9U0egNiU9RNAqLnmqmQfrO62iu4RBBm8uZO9yFdBDOSe8GK2a7jNFoRzDT8/gIUcAXLkgar86Uy+ocBqXlIiECi7RAhG/wCL0d3DJBU79pPiWmEgghqGj06oomznZ2N0f6C1B662aaRAehaR6i7N2AwO8JicZJbebXGnsoi5eR9/QiHAQlGP4XRgFtMwlER65YeI800OgnB2FMymGq5s9rP9oNArdHiDr8FkH5fOuI3Ne53r0s5M1otiW3euzGaVR0odLMsRkDp1v8KkbyiBCFZRwljm/lZNLlEZFBVmPedPVLmgAtfieDXlc1449WCDjA2DTowFRhtV1WDm/mET7nYWpIkdsXpTOHlwnavNtBVmu5sdc+wR2Y/5UoWy2DtEbc8fWbZiAxFdQKuSQtHC4a5nwUVCj6MaiofPng7+Ty5in/0MX8CiEOChhDbejGVxXQQmGk1YuJzXUr67Cr/sEsJjvm/NSBYA47X20bLoz8a7MnEgXHnTSRU6WJzjZ4eTlTbwCi4wolRUFM9wNwIvlwK7m8IOg4MaRtsbcKzjpqjEwTvI2wUD6s5huUHrhtAWQPQm/3RdzAzieZMGUOFGC/VHXwZHpoEYuwXCixJFdLls4ClGGfnf5oTg8yU9lcj3F+u/5vzJPgfzX/zUjh3DDD5e8HxDkiuF28Aj4rQqCNxm+AwiEgR0nP+ASW+F+3Binhz0LZlF9RKhVFpR1xmdhwf/WGvFtAb9LKVUqlOqisNeGDjs89fCN5scfbPDXMOLkF/7EKHRgEf7wVOkTo78AGr+2qUYoDr0AAAAASUVORK5CYII=)
}
.version.v3d {
    width:17px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA0VJREFUSA3tV1tIFGEU/mZ23F11vaTrZbNs1TIxawkSuyEWIRVU2ksEvRQFRU+91EvQmw9Rb1EQRARFVCC9iCRF201MKlRCMctN3RRb23VRd9e9TecfW2XWmdEedvOh8zJzzn/+c745t39+DkRH73evEcOBqwBXJ4qihckSTRzHjQGinROMF5tP2JycBCIU6BaBnEQ7V7LPAW4uxWgTWCT+FQgGTPJNGHiWDiWkyZVxdXyyakLrwxgGisjKoP9A4vMgxAvieYHnsHe9GdacNESiIhxuH14P/kKY3hlV5JtQSmsxYuLx6Vk4J/1wzQRj4iWfmkCyjAKaDlZidaYR/lAEOo6DXuDRWGXBpZZe+EhWU7wKDcQrUdeoFzffOZYFSBPIme1WCcStdgdefpsAT0CO2YrQuNmCQ5sK8ajrx7z/y619cHh8MOh45JsM2LY2G0dI5/rhKpxv7sHUbHheV+lFtVgpI6iksA9MTKPtiwuhiIjZcBSt/eOSHUuGQWaPRcwXjMDjD6HfNY0Hn5y49uorMgwCjm8tkukqMaoRYbk+9bhr0R6bJUuS9Y5PLVqLF3QOT2KIosTSd7tjKH5ZxqsCkWkRc7pmHTaY01Gam4ann8ekVMXrKPFObwC7rDnQU8qCkaiSiiRTTU38jnyTHuZ0vVQnzCjrpuXQzJ/aMBl0murLjkjTiwHJUG1pLi7Ulklfd+/DiKZxtphHhRuk2nL7Qpq6qhEppGI8t8OK3SXyv4M3NEMmqSCrqSuWIpNeh3JKp9PrX0oVqkC8gRD2lefhZHUxpWPBTgEBZPPFG9Bux9QUHmd3liCduuZJz+iCAZU31dT4Q1G09f/E/ooCXKmvgJ3mCKuRPWVm0N8VWvrm2jhml4H2UPjZwGPRrCrMRHZqCp4PuNAx5ImpqT5VgbAddzqHwdq4fmMetlgyJSMsLTfeDqL9u1tm9AABZsSOATbi2fx5Rh/y0emV6akxXMPd93OHhpoGyfU6DgUZRgRoaP3N+aFhctGSZkRi2kGaqiN0iCWSVIs1kU6VbK8cIHP3CyWMyZMxDBQR0Z48l2qeRDvPblo0r+S9qKafADnzzTDw0nWPblo0ox4mM03Ml+STfDMMvwErHhRiC0ymfAAAAABJRU5ErkJggg==)
}
.version.v3d.imax {
    width:43px;
    background-image:url(data:image/png;base64,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)
}
.no-result {
    height:100vh;
    display:-webkit-box;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    flex-direction:column;
    -webkit-box-pack:center;
    justify-content:center;
    -webkit-box-align:center;
    align-items:center;
    margin-top:-20%
}
.no-result img {
    width:87px;
    height:100px;
    margin-bottom:16px
}
.no-result p {
    font-size:16px;
    color:#999
}


</style>
