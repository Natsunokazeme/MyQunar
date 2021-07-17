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
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            <router-link to="/city">
                上海
                <span class="iconfont">
                    &#xe6bd;
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default{

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
    flex: 1;
    background-color: #FFF;
    height: .6rem;
    margin: .14rem;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .3rem;
}
.header-right{
    font-size: .3rem;
    padding: 0 .2rem;
}
.header a{
    color: #fff;
}
</style>
