<template>
    <div>
        <div class="header">
            <div class="header-left">
                <router-link to="/">
                    <span class="iconfont">
                        &#xe667;
                    </span>
                </router-link>
            </div >
            <div class="header-center">
                城市选择
            </div>
            
        </div>
        <div class="head-bottom">
                <button @click="cur=true" :class="{active:cur==true}">境内</button>
                <button @click="cur=false" :class="{active:cur==false}">境外·港澳台</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            cur:true
        }
    }
}
</script>

<style scoped>
.header{
    font-size: 0.34rem;
    width: 100%;
    line-height: .88rem;
    color: #FFF;
    background: #17c0c8;
    position: fixed;
    z-index:100;
    top: 0;
}
.header-left{
    width :.4rem;
    padding:0 0.2rem;
    text-align: center;
    position: absolute;
}
.header-center{
    text-align: center;
    margin: auto;
}
.head-bottom{
    margin-top: .88rem;
    display: flex;
    background: #17c0c8;
    padding: 0 1rem;
    height: 1rem;
}
.head-bottom button{
    width: 90%;
    height: 70%;
    background: #17c0c8;
    border:1px solid #fff;
    color: #fff;
    font:bolder;
    font-size: .3rem;
    line-height: .6rem;
    text-align:center;
    margin: 0 auto;
}
.head-bottom>>>.active{
    background: #fff;
    color: #17c0c8;
}
</style>