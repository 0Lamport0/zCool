/**
 * 获取ID
 * @param {*} id 
 */
function $id(id){
    return document.getElementById(id);
};

/**
 * 获取非行间样式
 * @param {要获取样式的对象} obj 
 * @param {要获取的属性} attr 
 */
function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj.false)[attr];
	} else {
		return obj.currentStyle[attr];
	};
};

/**
 * 获取任意两个整数之间的随机数
 * @param {*} min 
 * @param {*} max 
 */
function randomNumber(min, max) {
	if(min > max) {
		var t = min;
		min = max;
		max = min;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 创建元素
 * @param {要创建的标签} ele 
 * @param {创建的标签放到哪个元素中} parent 
 */
function creatEle(ele,parent){
	return parent.appendChild( document.createElement(ele) );
};