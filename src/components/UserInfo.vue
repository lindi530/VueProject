<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/89646_lg_28e4eb758d.jpg" alt="">
                </div>
                <div class="col-8">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans-counts">粉丝: {{ user.followersCount }}</div>
                    <button v-on:click="follow" v-if="!user.is_followed" type="button" class="btn btn-info">+关注</button>
                    <button v-on:click="unfollow" v-if="user.is_followed" type="button" class="btn btn-info">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'UserInfo',
    components: {
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        let fullName = computed(() => {
            return (
                props.user.lastName + ' ' + props.user.firstName
            )
        });

        const follow = () => {
            context.emit('follow');
        };

        const unfollow = () => {
            context.emit('unfollow');
        };

        return {
            fullName,
            follow,
            unfollow,
        }
    }

}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.username{
    font-weight: bold;
}
.fans-counts{
    font-size: 12px;
    color: gray;
}
button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>