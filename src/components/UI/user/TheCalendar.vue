<template>
  <div>
    <vue-cal
      class="vuecal--rounded-theme vuecal--blue-theme"
      xsmall
      hide-view-selector
      :time="false"
      active-view="month"
      :disable-views="['week']"
      style="width: 270px; height: 300px"
      @cell-click="handleCellClick"
      :selected-date="selectedDate"
    >
    </vue-cal>
    <p>Selected date: {{ formattedDate }}</p>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
  data() {
    return {
      selectedDate: null,
      formattedDate: null,
    };
  },
  methods: {
    handleCellClick(clickedDate) {
      this.selectedDate = clickedDate;
      this.formattedDate = this.selectedDate.format("DD.MM.YYYY");
      this.selectDate();
    },
    selectDate() {
      this.$emit("select-date", this.formattedDate);
    },
  },
};
</script>
