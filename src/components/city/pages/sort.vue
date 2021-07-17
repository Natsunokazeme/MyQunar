<template>
    <div>
        <div class="sort-tittle">字母排序</div>
        <ul class="sort-char">
            <li v-for="(val,key,index) in cities" :key="index"
            >{{key}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props:['cities']
}
</script>

<style scoped>
.sort-tittle{
    color: #212121;
    font-size: .28rem;
    padding: .3rem;
}
.sort-char{
    background: #fff;
    overflow: hidden;
}
.sort-char li{
    float:left;
    width: 16.6%;
    font-size: .3rem;
    line-height: .9rem;
    text-align: center;
    background: #fff;
}
</style>