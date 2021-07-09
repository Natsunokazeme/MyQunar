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
    data(){
        return{
            swiperOptions:{},
            iconList:[
                {
                    id:"01",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                    tittle:"酒店"
                },
                {
                    id:"02",
                    imgUrl:"	https://s.qunarzz.com/homenode/images/touchheader/flight.png",
                    tittle:"飞机"
                },
                {
                    id:"03",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/train.png",
                    tittle:"火车"
                },
                {
                    id:"04",
                    imgUrl:"	https://s.qunarzz.com/homenode/images/touchheader/package.png",
                    tittle:"度假"
                },
                {
                    id:"05",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                },
                {
                    id:"06",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                },
                {
                    id:"07",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                },
                {
                    id:"08",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                },
                {
                    id:"09",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                },
                {
                    id:"10",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/piao.png",
                    tittle:"景点门票"
                }

            ]
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
