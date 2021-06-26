<template>
  <div style="position:relative" v-bind:class="{'open':openSuggestion}">
    <input class="form-control" type="text" v-model="selection"/>
    <ul class="dropdown-menu" style="width:100%">
        <li v-for="suggestions in matches">
            <a href="#">{{ suggestion }}</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props:{
         suggestions: {
            type: Array,
            required: true
        },
        selection: {
            type: String,
            required: true,
            twoWay: true
        }
    }

}
</script>

<style>

</style>