<template>
    <div class="card whole-posts">
        <div class="card-body">
            <div class="title">
                历史记录
            </div>
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card signed-post">
                    <div class="card-body">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'UserHistoricalPosts',
    props: {
        posts: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.title {
    font-size: larger;
    font-weight: bold;
    margin: auto 45%;
}
.whole-posts {
    background-color: azure;
}

.signed-post{
    margin-top: 10px;
}
</style>