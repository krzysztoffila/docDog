<template>
  <div>
    <date-picker v-model="selectedDate" valueType="format"></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      selectedDate: null,
    };
  },
};
</script>