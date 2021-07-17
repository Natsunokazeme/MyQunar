<template>
    <div class="background">
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons  :iconList='iconList'></home-icons>
        <home-location></home-location>
        <home-activity></home-activity>
        <home-hot  :hotList='hotList'></home-hot>
    </div>
</template>

<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
import HomeIcons from './pages/icons.vue'
import HomeLocation from './pages/location.vue'
import HomeActivity from './pages/activity.vue'
import HomeHot from './pages/hot.vue'

export default{
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot
    },
    data(){
        return{
            swiperList:[],
            iconList:[],
            hotList:[],
            changecity:''
        }
    },
    methods:{
        getHttp(){
            this.changecity=this.city;
            this.$http.get("/api/dataHome.json")
            .then((res)=>{
                const data=res.data.data[1];
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.hotList = data.hotList;
            });
        }
    },
    //从后端获取数据
    mounted(){
        this.getHttp();
    },
    activated(){
        if(this.changecity!=this.city){
            this.getHttp();
            this.changecity=this.city;
        }
    }
}
</script>

<style >
.background{
    background-color: #e0e0e0;
}
</style>
