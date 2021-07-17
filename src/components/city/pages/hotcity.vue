<template>
    <div class="hot">
        <div class="hot-tittle">
            热门城市
        </div>
        <ul class="hot-cities">
            <li v-for="item in hotcity" :key="item.id"
            >{{item.name}}</li>
        </ul>
        
    </div>
</template>

<script>

export default {
    props:['hotcity'],
}
</script>

<style scoped>
.hot-tittle{
    color: #212121;
    font-size: .28rem;
    padding: .3rem;
}
.hot-cities{
    background: #fff;
    overflow: hidden;
    position: relative;

}
.hot-cities::before{
    content: "";
    height: 100%;
    width: 33.3%;
    left: 33.3%;
    border-left: 2px solid #ddd;
    border-right: 2px solid #ddd;
    position: absolute;

    
}
.hot-cities li{
    float:left;
    width: 33%;
    font-size: .3rem;
    line-height: .9rem;
    text-align: center;
    background: #fff;
    border-bottom: 2px solid #ddd;
}
</style>