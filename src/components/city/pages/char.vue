<template>
    <div>
        <ul >
            <li class="sort-char" v-for="(val,key,index) in cities" :key="index"
            ><div>{{key}}</div>
            <br>
            <div class="citybg">
                <div class="char-city" v-for="item in val" :key="item.id"
                >{{item.name}}</div>
            </div>
                
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    props:['cities']
}
</script>

<style scoped>
.sort-char{
    color: #212121;
    font-size: .28rem;
    padding: .3rem;
    overflow: hidden;
}
.citybg{
    background: #fff;
}
.char-city::before{
    content: "";
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: absolute;

    
}
.char-city::after{
    content: "";
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: 1px solid #ddd;
    position: absolute;

    
}
.char-city {
    display: inline-block;
    width: 25%;
    font-size: .3rem;
    line-height: .9rem;
    text-align: center;
    background: #fff;
    border-bottom:1px solid #ddd;
}
</style>