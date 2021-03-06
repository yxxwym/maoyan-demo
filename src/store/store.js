import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



//安装插件
Vue.use(Vuex)

//默认城市
var city = {
	id:1,
	nm:"北京",
	py:"beijing"
}
//加载用户选择的城市
if(localStorage.Maoyan_cityConfirm != undefined){
	var saveData = JSON.parse(localStorage.Maoyan_cityConfirm)
	city = saveData.data
}
console.log(city)

var isLogin = false;
if (localStorage.Maoyan_isLogin && localStorage.Maoyan_isLogin == "1") {
  isLogin = true;
}
//定义store
const store = new Vuex.Store({
	
	//1.state 定义vuex中存放的数据
	state:{
		tabIndex:0,
		
		theme:"light",
		
		//城市
		selectCity:city,
		
		navTitle:"猫眼电影",

		isLogin: isLogin,
		//是否显示标签栏
		isShowTabbar: true
	},
	
	
	//2.getters  添加获取数据的方法,  
	getters:{
		getTabIndex(state){
			return state.tabIndex
		},
	
		getTheme(state){
			return state.theme
		},
		
		getSelectCity(state){
			return state.selectCity
		},
		
		getNavTitle(state){
			return state.navTitle
		},
		getIsLogin(state) {
			return state.isLogin;
		},
		getIsShowTabbar(state) {
			return state.isShowTabbar;
		},
	},
	
	//3.mutations 添加同步修改数据的方法,  
	//注意: 这些方法不要直接调, 要通过commit调用
	mutations:{
		setTabIndex(state, index){
			state.tabIndex = index
		},
		
		setTheme(state, theme){
			state.theme = theme
		},
		
		setSelectCity(state,city){
			state.selectCity = city
		},
		
		setNavTitle(state,title){
			state.navTitle = title
		},
		setIsLogin(state, isLogin) {
			state.isLogin = isLogin;
		},
		setIsShowTabbar(state, isShowTabbar) {
			state.isShowTabbar = isShowTabbar;
		  },
	},
	
	//4.actions 添加异步修改数据方法, 
	//注意: 这些方法不要直接调, 这些方法通过函数 dispatch调用
	actions:{
		
	}
	
})

export default store;

