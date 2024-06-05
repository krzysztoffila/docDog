<template>
  <vue-cal
    class="vuecal--rounded-theme vuecal--blue-theme"
    xsmall
    hide-view-selector
    :time="false"
    active-view="month"
    :disable-views="['week']"
    style="width: 270px; height: 300px"
  >
  </vue-cal>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
  data() {
    return {
      selectedDate: null,
    };
  },
};
</script>