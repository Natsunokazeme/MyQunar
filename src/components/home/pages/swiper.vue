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
    props:['swiperList'],
    data(){
        return {
            
            swiperOptions:{
                pagination: {
                    el: ".swiper-pagination",
                    clickable:true
                },
                loop:true,
                autoplay : {
                    delay : 3000, 
                    disableOnInteraction : false 
                },
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
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 25px;
    width: 100%;
}
</style>