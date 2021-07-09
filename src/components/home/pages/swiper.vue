<template>
    <div class="swiper-container">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for='item in swiperList' :key="item.id"><img :src="item.imgUrl"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            
        </swiper>
    </div>
</template>

<script>
export default{
    data(){
        return {
            swiperList:[
                {
                    id:"01",
                    imgUrl:require("@/assets/img/head-swiper01.jpg")
                },
                {
                    id:"02",
                    imgUrl:require("@/assets/img/head-swiper02.jpg")
                },
                {
                    id:"03",
                    imgUrl:require("@/assets/img/head-swiper03.jpg")
                }
            ],
            swiperOptions:{
                pagination: {
                    el: ".swiper-pagination",
                    clickable:true
                },
                loop:true
            }
        }
    }
}
    
</script>

<style scoped>
.swiper-container{
    height: 0;
    padding-bottom: 25%;
    background: #fff;
}
.swiper-container img{
    width: 100%;
    height: 2rem;
}
 .swiper-container >>>.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
</style>