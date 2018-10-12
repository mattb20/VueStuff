<template>
  <header-cmp></header-cmp>
  <server-index-cmp></server-index-cmp>
</template>
        <hr>
        <div class="row">
            <div class="col-x s-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    components: {}
  }
</script>

<style>

</style>
