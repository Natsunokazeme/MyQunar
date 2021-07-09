
<template>
    <div class="activity border-top" >
        <div class="activity-item border-right">
            <span ><!-- 伪元素不可用在img等替换元素上-->
            </span>
                <img src="https://s.qunarzz.com/package_mobile/home-activity/freetrip-190212.png">
            
            
        </div>
        <div class="activity-item">
           <img src="https://s.qunarzz.com/package_mobile/home-activity/freetrip-190212.png">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.activity{
    margin-top: .2rem;
    display: flex;
    position: relative;
    background-color: #fff;

}
.activity-item img{
    height: 90%;
    width: 90%;
    margin:  auto;

}
.activity-item{
    font-size: .2rem;
    margin: 0 auto;
    line-height: 1rem;
    height: 1.4rem;
    display: flex;
}


</style>


