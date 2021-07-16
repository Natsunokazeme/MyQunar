<template>
    <div class="hot">
        <div class="hot-top">
            <span class="hot-top-head">特惠度假</span><br>
            <button >当季热门季度</button>
            <button >今日特惠度假</button>

        </div>
        <div class="hot-list">
            <ul>
                <li  class="hot-item" v-for="item in hotList" :key="item.id">
                    <img :src="item.imgUrl">
                    <div>{{item.tittle}}</div>
                    <span>￥{{item.price}}</span>
                </li>
            </ul>
        </div>
        <div class="hot-bottom">
            <button>更多特惠度假></button>
        </div>
    </div>
</template>

<script>
export default {
    props:['hotList'],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.hot{
    margin-top: .2rem;
    background-color: #fff;
    padding: 0 .2rem;
}
.hot-top{
    margin-left: .2rem ;
    margin-bottom: .2rem;

}
.hot-top-head{
    margin-top: .2rem ;
    font-size: .4rem;
    line-height: .1rem;
}
.hot-top button{
    display: inline-block;
    width: 2.2rem;
    height: .6rem;
    background: #fff;
    border:1px solid #ccc;
    border-radius: 5px;
    font:bolder;
    font-size: .3rem;
    line-height: .6rem;
    text-align:center;
}
.hot-top button:focus{
    background: #17c0c8;
    color: #fff;
}
.hot-item{
    display: inline-block;
    width: 3.6rem;
    height: 3.6rem;
    font-size: .3rem;
    margin: .1rem .1rem;
}
.hot-item img{
    width: 100%;
    height: 80%;
    border-radius: .2rem;
}
.hot-item div{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.hot-item span{
    color: #ff7400;
    font-size: 0.4rem ;
    font:bolder
}
.hot-bottom{
    display: flex;
}
.hot-bottom button{
    display: inline-block;
    width: 90%;
    height: 100%;
    background: #fff;
    border:1px solid #17c0c8;
    border-radius: 5px;
    color: #17c0c8;
    font:bolder;
    font-size: .3rem;
    line-height: .6rem;
    text-align:center;
    margin: 0 auto;
}
</style>