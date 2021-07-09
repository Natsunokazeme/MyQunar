<template>
    <div class="background">
        <home-header/>
        <home-swiper/>
        <home-icons/>
        <home-location/>
        <home-activity/>
    </div>
</template>

<script>
import HomeHeader from './pages/header.vue'
import HomeSwiper from './pages/swiper.vue'
import HomeIcons from './pages/icons.vue'
import HomeLocation from './pages/location.vue'
import HomeActivity from './pages/activity.vue'

export default{
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity
    }
}
</script>

<style >
.background{
    background-color: #e0e0e0;
}
</style>
