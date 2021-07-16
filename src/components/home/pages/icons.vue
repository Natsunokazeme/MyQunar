<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in page" :key="index">
                <a class="icons-item" v-for="page in item" :key="page.id">
                    <img :src="page.imgUrl">
                    <p>{{page.tittle}}</p>

                </a>
            </swiper-slide>
            
        </swiper>
        
    </div>
</template>

<script>
export default{
    props:['iconList'],
    data(){
        return{
            swiperOptions:{}
            
        }
    },
    computed:{
        page(){
            let pages=[];
            this.iconList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx])
                pages[idx]=[];
                pages[idx].push(item);
            })
            return pages;
        }
    }

}
</script>

<style scoped>
.icons{
    background-color: #fff;
}
.icons-item{
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    float: left;
}
.icons-item img{
    width: 1rem;
    height: 1rem;
    display: block;
    margin: auto;
    padding-top: .2rem;
    padding-bottom: .1rem;

}
.icons-item p{
    font-size: .12rem;
    color: #333;
    text-align: center;
}
</style>
