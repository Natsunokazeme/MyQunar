<template>
    <div class="city">
        <city-header class="head"></city-header>
        <city-hot :hotcity='hotcity'></city-hot>
        <city-sort :cities='cities'></city-sort>
        <city-char :cities='cities'></city-char>
    </div>
</template>

<script>
import CityHeader from './pages/header.vue'
import CityHot from './pages/hotcity.vue'
import CitySort from './pages/sort.vue'
import CityChar from './pages/char.vue'


export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityChar
    },
    data() {
        return {
            hotcity:[],
            cities:[],
        }
    },
    mounted(){
        this.$http.get("/api/city.json").then((res)=>{
            const data=res.data.data;
            this.hotcity=data.hotCities;
            this.cities=data.cities;
        })
    }
}
</script>

<style scoped>
.city{
    width: 100%;
    background-color: #E0E0E0;
}
</style>