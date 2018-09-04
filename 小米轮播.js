function banner_Xm(imgs,dots,banner,leftBtn,rightBtn,widths){
    // 获取元素
    let imgs=document.querySelectorAll("img");
    let dots=document.querySelectorAll("li");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".zuojian")[0];
    let rightBtn=document.querySelectorAll(".youjian")[0];
    let widths=parseInt(getComputedStyle(imgs[0],null).width);
    console.log(widths);
    // 初始值
    imgs[0].style.left=0;
    dots[0].classList.add("active");
    let now=0;
    let next=0;
    // 开关  控制快速点击时，图片快速轮播的现象
    //       默认是打开的  flag=ture   可以点击左右箭头，
    let flag=true;

    // let t=setInterval(move,2000);
    function move(){
        next++;
        if(next==imgs.length){
            next=0;
        }
        // 确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){flag=true});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }

    // 左右键点击效果
    leftBtn.onclick=function(){
        // 判断开关是否开启
        // 开关开启的时候，则！flase=true，不执行return，执行flag=flase和movel，movel执行完flag=ture
        // 开关关闭的时候，不要点击

        if(!flag){
            return;
        }
        if(next==0){
            return;
        }
        flag=false;
        movel();
        
    }
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        if(next==imgs.length-1){
            return;
        }
        flag=false;
        move();
    }
    function movel(){
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function(){flag=true});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    // 鼠标移入banner
    // banner.onmouseover=function(){
    //     clearInterval(t);
    // }
    // banner.onmouseout=function(){
    //     t=setInterval(move,2000);
    // }
    // 鼠标点击轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            if(i==now){
                return;
            }else if(i<now){
                imgs[i].style.left=-widths+"px";
                imgs[now].style.left=0;
                animate(imgs[i],{left:0});
                animate(imgs[now],{left:widths});
            }else{
                imgs[i].style.left=widths+"px";
                imgs[now].style.left=0;
                animate(imgs[i],{left:0});
                animate(imgs[now],{left:-widths});
            }
        
            dots[now].classList.remove("active");
           
            dots[i].classList.add("active");
        
            now=i;
            next=i;
        }
    }
}
