<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(server, index) in servers"> Server {{ index }} 
                <br>
                Status: {{ server.status }}</li>
        </ul>
    </div>
</template>

<script>
    import ServerDetails from './ServerDetails.vue';
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Started'},
                    {id: 2, status: 'Stopped'}
                ] 
            };
        }
    }
</script>

<style>

</style>
