<script setup lang="ts">
import { ref } from "vue";

const input = ref();

function setPlace(event: any) {
  console.log(event)
}
</script>

<template>
  <GMapAutocomplete @place_changed="setPlace">
    <template #input="slotProps">
      <input
        ref="input"
        v-bind="slotProps"
      >
    </template>
  </GMapAutocomplete>
</template>

