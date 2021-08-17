<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe667;
            </span>
        </div>
        <div class="header-search">
            <span class="iconfont">
                &#xe600;
            </span>
            <input class="search" v-model="value" placeholder="输入城市/景点/游玩主题">
            
        </div>
        <div class="header-right">
            <router-link to="/city">
                {{city}}
                <span class="iconfont">
                    &#xe6bd;
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'Vuex'
export default{
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style >
.header{
    font-size: 0.38rem;
    width: 100%;
    line-height: .88rem;
    color: #FFF;
    background: #17c0c8;
    display: flex;
   
}
.header-left{
    width :.4rem;
    padding:0 0.2rem;
    text-align: center;

}
.header-search{
    padding-left: 10px;
    flex: 1;
    background-color: #FFF;
    height: .6rem;
    margin: .14rem;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .3rem;
}
.search{
    background-color: #FFF;
    display: inline-block;
    width: 80%;
    font-size: .3rem;
    border:0;
}
.header-right{
    font-size: .3rem;
    padding: 0 .2rem;
}
.header a{
    color: #fff;
}
</style>
