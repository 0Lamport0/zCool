header();
getAjax();
backTop();
mainTitle();

/**
 * 头部区域效果实现
 */
function header() {
    const headerNavLi = document.querySelectorAll("#header ul>li");
    // 实现导航栏的效果
    for (let i = 0; i < headerNavLi.length; i++) {
        headerNavLi[i].onmouseover = function () {
            // 改变导航栏背景颜色以及字体颜色
            this.style.background = "#282828";
            this.children[0].style.color = "#ffe300";
            // 二级菜单
            if (this.children.length > 1) {
                this.children[1].style.display = "block";
                const headerAside_p = this.querySelectorAll("aside p");
                for (let j = 0; j < headerAside_p.length; j++) {
                    headerAside_p[j].onmouseover = function () {
                        this.children[0].style.color = "#d36f16";
                        this.children[1].style.color = "#d36f16";
                    }
                    headerAside_p[j].onmouseout = function () {
                        this.children[0].style.color = "#444";
                        this.children[1].style.color = "#444";
                    }
                }
                const headerMenu_p = this.querySelectorAll(".menu p");
                for (let j = 0; j < headerMenu_p.length; j++) {
                    headerMenu_p[j].onmouseover = function () {
                        this.style.background = "#ffe300";
                    }
                    headerMenu_p[j].onmouseout = function () {
                        this.style.background = "";
                    }
                }
            }
        }
        headerNavLi[i].onmouseout = function () {
            this.style.background = "";
            this.children[0].style.color = "#333";
            if (this.children.length > 1) {
                this.children[1].style.display = "none";
            }
        }
    }
    // 实现二级菜单的内容的效果
    const headerOlLi = document.querySelectorAll("#header ol li");
    const headerMenu = document.querySelectorAll(".menu");
    for (let i = 0; i < headerOlLi.length; i++) {
        headerOlLi[i].children[0].onmouseover = function () {
            this.style.background = "#ffe300";
        }
        headerOlLi[i].children[0].onmouseout = function () {
            this.style.background = "";
        }
    }
    // 实现搜索和上传特效
    const headerPersonalCenter_i = document.querySelectorAll(".personalCenter i");
    for (let i = 0; i < headerPersonalCenter_i.length; i++) {
        headerPersonalCenter_i[i].onmouseover = function () {
            this.style.background = "#282828";
            this.style.color = "#ffe300";
        }
        headerPersonalCenter_i[i].onmouseout = function () {
            this.style.background = "";
            this.style.color = "";
        }
    }
}

/* 回到顶部效果实现 */
function backTop() {
    $(document).scroll(function () {
        let $footerHeight = $("#footer").height();
        if ($(document).scrollTop() >= 606) {
            $(".mainNav").css({
                "position": "fixed",
                "top": 0,
                "left": 0
            })
            $("#backTop").css({
                "display": "block"
            })
        } else {
            console.log(1)
            $(".mainNav").css({
                "position": "static"
            })
            $("#backTop").css({
                "display": "none"
            })
        }
        if ($(document).height() - $("#backTop").offset().top <= $("#footer").height() + 100) {
            $("#backTop").css({
                "bottom": $footerHeight + 50
            })
        }
    })
    $("#backTop").click(function(){
        $(document).scrollTop(0)
    })
}

/* 获取数据 */
function getAjax() {
    // 获取图片数据
    $.ajax({
        "type": "GET",
        "url": "../json/zCool.json",
        "dataType": "json",
        "success": function (data) {
            banner(data);
            getMainCardBox(data);

        },
        "error": function (e) {
            console.log("请求失败！")
        }
    })
}

/* 主体区域数据获取 */
function getMainCardBox(data){
    let mainData = data.index.main;
    $.each(mainData,function(index,item){
        $(".cardList").append('<div class="cardBox"><div class="cardImg"><img src="' + item.src + '" title="" alt="" /></div><div class="cardInfo"><p class="cardInfo-title"><a href="###">'+item.title+'</a></p><p class="cardInfo-type">'+item.classification+'</p><p class="cardInfo-item"><i class="iconfont icon-yanjing"><span>'+item.read+'</span></i><i class="iconfont icon-pinglun"><span>'+item.comment+'</span></i><i class="iconfont icon-dianzan"><span>'+item.fabulous+'</span></i></p></div><div class="cardItem clearFloat"><a href="###" class="left"><img src="'+item.portrait+'" title="" alt="" />'+item.nickName+'</a><span class="right time">'+item.time+'</span></div></div>')
    })
    mailCardBox(); 
}

/* 主体区域中标题的滑过效果 */
function mainTitle() {
    $(".mainNav a").not($(".mainNav a").eq(0)).mouseover(function () {
        $(this).css("border-bottom", "2px solid #444");
    }).mouseout(function () {
        $(this).css("border", "none");
    })
}


/* 主体区域中内容的滑过效果 */
function mailCardBox() {
    $(".cardBox a").mouseover(function () {
        $(this).css("color", "#d36f16");
    }).mouseout(function () {
        $(this).css("color", "#333");
    })
    $(".cardImg img").mouseover(function () {
        $(this).css("opacity", "0.9");
    }).mouseout(function(){
        $(this).css("opacity","1");
    })
}

flip();
/* 分页划过效果实现 */
function flip(){
    $(".flip a").mouseover(function(){
        if( !$(this).attr("class") ){
            $(this).attr("class","flipActive");
        }else{
            $(this).attr("num",1);
        }
    }).mouseout(function(){
        if( $(this).attr("num") ){
            $(this).attr("num","");
        }else{
            $(this).attr("class","");
        }
    })
}





/* 轮播图区域效果实现 */
function banner(data) {
    // 将获取到的图片数据添加到页面中
    let bannerImg = data.index.banner;
    $(".banner ul").append("<li><a href='###'><img alt='' title='' src='" + bannerImg[bannerImg.length - 2].src + "' /></a></li><li><a href='###'><img alt='' title='' src='" + bannerImg[bannerImg.length - 1].src + "' /></a></li>")
    for (let i = 0; i < bannerImg.length; i++) {
        $(".banner ul").append("<li><a href='###'><img title='' alt='' src='" + bannerImg[i].src + "' /></a></li>")
    }
    // 实现图片自动轮播
    let bannerImgTimer;
    let bannerImgNum = 0;
    let bannerImgWidth = $(".banner img").eq(0).width();
    bannerImgTimer = setInterval(bannerMove, 1)
    // 实现鼠标划入停止，鼠标划出轮播
    $(".banner ul").mouseover(function () {
        clearInterval(bannerImgTimer);
    }).mouseout(function () {
        bannerImgTimer = setInterval(bannerMove, 1)
    })
    function bannerMove() {
        bannerImgNum--;
        if (bannerImgNum <= -bannerImgWidth * bannerImg.length) {
            bannerImgNum = 0;
        }
        $(".banner ul").css({
            "left": bannerImgNum
        })
    }
}







