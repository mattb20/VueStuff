<template>
    <div class="component">
        <h3>You may view the User Details here:</h3>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName()">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'Slim Shady'
      },
      userAge: {
        type: Number,
        default: 27
    },
      resetFn: Function
    },
    methods: {
      reverseName() {
        return this.name.split("").reverse().join("");
      },
      resetName() {
        this.name = 'Slim Shady';
        this.$emit('nameReset', this.name);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
