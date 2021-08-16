<template>
    <div class="city">
        <city-header class="head"></city-header>
        <city-sort :hotcity='hotcity' :cities='cities'></city-sort>
    </div>
</template>

<script>
import CityHeader from './pages/header.vue'
import CitySort from './pages/sort.vue'


export default {
    components:{
        CityHeader,
        CitySort,
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