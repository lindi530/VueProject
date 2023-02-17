<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo v-on:follow="follow" v-on:unfollow="unfollow" :user="user" />
                <UserPost v-on:posting="posting" />
            </div>
            <div class="col-9">
                <UserHistoricalPosts :posts="posts"/>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import UserInfo from '@/components/UserInfo.vue';
import UserHistoricalPosts from '@/components/UserHistoricalPosts.vue';
import UserPost from '@/components/UserPost.vue'
import { reactive } from 'vue';

export default {
    name: "UserState",
    components: {
		ContentBase,
        UserInfo,
        UserHistoricalPosts,
        UserPost,
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "lindi530",
            lastName: "lindi",
            firstName: "530",
            followersCount: 0,
            is_followed: false,
        });

       const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userid: 1,
                    content: "AcWing!"
                },
                {
                    id: 2,
                    userid: 2,
                    content: "牛客网!"
                },
                {
                    id: 3,
                    userid: 3,
                    content: "Codeforces!"
                }
            ]
        }); 

        const follow = () => {
            if(user.is_followed) return;
            user.is_followed = true;
            user.followersCount++;
        };

        const unfollow = () => {
            if(!user.is_followed) return;
            user.is_followed = false;
            user.followersCount--;
        };

        const posting = (content) => {
          posts.count++;
          posts.posts.unshift({   // 向数组最前方添加一个元素
            id: posts.count,
            userid: 1,
            content: content,
          });
        };

        return { 
            user,
            posts,
            follow,
            unfollow,
            posting,
        }
    }
}

</script>

<style scoped>
</style>