<template>
  <div class="flex flex-col">
    <label for="doctors" class="mb-2 font-bold">Choose a doctor:</label>
    <div id="doctors" class="flex flex-col space-y-2">
      <label class="flex items-center">
        <input type="radio" name="doctor" value="dolittle" class="mr-2" />
        Dr. Dolittle
      </label>
      <label class="flex items-center">
        <input type="radio" name="doctor" value="vetura" class="mr-2" />
        Ace Ventura
      </label>
      <label class="flex items-center">
        <input type="radio" name="doctor" value="oetker" class="mr-2" />
        Dr. Oetker
      </label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
