//rem
function freshRem(){
    var desW=750,
        winW=document.documentElement.clientWidth,
        ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px'
}
freshRem();
window.addEventListener('resize',freshRem);

//swiper
var mySwiper=new Swiper(".swiper-container",{
    /*��������
    ����:Ĭ��ˮƽ  direction
    loop �޷����
    */
    direction:'vertical',
    loop:true,
    onTransitionEnd:function(swiper){
       var slides=swiper.slides,
           curIndex=swiper.activeIndex,
           total=slides.length,
           targetId='page0';
       switch(curIndex){
           case 0:
               targetId+=total-2;
               break;
           case total-1:
               targetId+=1;
               break;
           default:
              targetId+=curIndex
       }
        [].forEach.call(slides,function(item,index){
            //�жϻ����ǲ��ǵ�ǰ������� ��̬���idֵ ��������idΪnull
            if(index==curIndex){
                item.id=targetId
            }else{
                item.id=null
            }
        })

    }

});