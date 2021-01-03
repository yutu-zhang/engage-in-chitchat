<template>
	<view class="p-2 flex justify-between align-center">
			<my-icon iconName="icon-user_icon" @my-click="friends"></my-icon>
		
		<view class="font-weight-bold">消息列表</view>
		
			<my-icon iconName="icon-gengduo"></my-icon>
	</view>

</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			friends(){
				const token = uni.getStorageSync('token')
				if(!token){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
					
					uni.navigateTo({
						url:"/pages/user-list/user-list"
					})
				}
			}
		}
	}
	
	
	
</script>

<style>
</style>
