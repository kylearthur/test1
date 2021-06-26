<template>
    <td scope="row">{{ history.id }}</td>
    <td>{{ history.betType }}</td>
    <td><span class="text-nowrap">₱ {{ history.amount.toLocaleString() }}</span></td>
    <td>
        <span v-if="history.status == 'win' " class="badge bg-success">
            {{ history.status }}
        </span>
        <span v-if="history.status == 'lose' " class="badge bg-danger">
            {{ history.status }}
        </span>
        <span v-if="history.status == 'draw' " class="badge bg-info text-dark">
            {{ history.status }}
        </span>
    </td>
    <td> <span class="text-nowrap">{{ history.date }}</span></td>
</template>

<script>
export default {
    props:['history'],
    data(){
        return{

        }
    }
    

}
</script>

<style>

</style>