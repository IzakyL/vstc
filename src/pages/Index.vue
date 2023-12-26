<script>
import { problems } from "../assets/list"
export default {
    data() {
        return {
            problems,
            search: "",
            page: 1,
            page_size: 10
        }
    },
    mounted() {
        document.title = "VSTC 答题自测"
    },
    computed: {
        searchProblem() {
            return this.problems.filter(v => v.title.indexOf(this.search) !== -1)
        }
    }
}
</script>

<template>
    <div class="index-container">
        <h2>
            <template v-if="search">
                搜索"{{ search }}" -
            </template>VSTC 答题自测
        </h2>
        <hr />
        <div class="form-group">
            <div class="input-group input-group-alternative mb-4" style="max-width: 200px">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fal fa-search"></i></span>
                </div>
                <input class="form-control" v-model="search" placeholder="搜索..." type="text">
            </div>
        </div>
        <router-link class="choose-box" :to="{ name: 'Test', params: { id: p.key } }" v-for="(p, i) in searchProblem">{{
            p.title
                    }}</router-link>
        <div class="divider"></div>
        By <a href="https://github.com/yemaster/vstc">yemaster</a>.
    </div>
</template>