<template>
  <div @click="$emit('click')" class="cell">
    <span v-if="value !== ''"> {{ value }} </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: String
    }
  }
</script>

<style>
.cell {
  width: 120px;
  height: 120px;
  border: 2px solid rgb(233,233,233);
  font-size: 2em;
  font-family: 'Bungee Inline', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.red {
  color: rgb(249,116,34);
}

.green {
  color: rgb(190,217,72);
}

.red, .green {
  position: relative;
  top: -6px;
  font-weight: bold;
  font-size: 48px;
}
</style>