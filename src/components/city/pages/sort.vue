<template>
    <div ref='container' class="container">
        <div>
            <!--hot-->
            <div class="hot-tittle">
            热门城市
            </div>
            <ul class="hot-cities">
                <li v-for="item in hotcity" :key="item.id"
                >{{item.name}}</li>
            </ul>
            <!--chars-->
            <div class="sort-tittle">字母排序</div>
            <ul class="sort-char" >
                <li v-for="(val,key,index) in cities" :key="index " @click="jump(key)"
                >{{key}}</li>
            </ul>
            <!--details-->
            <ul >
                <li class="sort-details" v-for="(val,key,index) in cities" :key="index" :ref="key"
                ><div>{{key}}</div>
                <br>
                <div class="citybg">
                    <div class="char-city" v-for="item in val" :key="item.id"
                    >{{item.name}}</div>
                </div>
                    
                </li>
                
            </ul>
        </div>
    </div>

</template>

<script>

import BetterScroll from 'better-scroll'

export default {
    props:['cities','hotcity'],
    data(){
        return{
            scroll:''
        }
    },
    updated(){
        this.move();
    },
    methods:{
        jump(key){
            this.scroll.scrollToElement(this.$refs[key][0])
        },
        move(){
            this.$nextTick(()=>{
                if (!this.scroll) {
                    let container = this.$refs['container'];
                    this.scroll = new BetterScroll(container, {
                    click: true
                    });
                    
                } else {
                    this.scroll.refresh();
                };
            })
        }
    }
    

}
</script>

<style scoped>
.container{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1.88rem;
    background-color:#f5f5f5;
    overflow: hidden;
    
}
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
.sort-details{
    color: #212121;
    font-size: .28rem;
    padding: .3rem;
    overflow: hidden;
}
.citybg{
    background: #fff;
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
.char-city::before{
    content: "";
    height: .9rem;
    width: 25%;
    left: 25%;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: absolute;

    
}
.char-city::after{
    content: "";
    height: .9rem;
    width: 25%;
    left: 75%;
    border-left: 1px solid #ddd;
    position: absolute;

    
}

</style>