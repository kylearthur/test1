<template>
    <td scope="row">{{ history.id }}</td>
    <td>{{ history.method }}</td>
    <td>{{ history.type }}</td>
    <td><span class="text-nowrap">₱ {{ history.amount.toLocaleString() }}</span></td>
    <td>
        <span v-if="history.status == 'approved' " class="badge bg-success">
            {{ history.status }}
        </span>
        <span v-if="history.status == 'rejected' " class="badge bg-danger">
            {{ history.status }}
        </span>
        <span v-if="history.status == 'pending' " class="badge bg-warning text-dark">
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