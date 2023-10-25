<template>
  <single-day-guard
    v-if="numOfDays === 1"
    :selectedDate="startDate"
  ></single-day-guard>
  <b-container fluid v-else>
    <b-row v-for="currDay in numOfDays" :key="currDay" class="singleDateTable">
      <b-row class="dateCard">
        <b-card bg-variant="secondary" text-variant="white">
          <h4>
            {{
              getCurrentDate(currDay).toLocaleDateString(
                'he-IL',
                dateParseOptions
              )
            }}
          </h4>
        </b-card>
      </b-row>
      <b-row>
        <single-day-guard
          :selectedDate="getCurrentDate(currDay)"
        ></single-day-guard>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import singleDayGuard from './singleDayGuard.vue';
export default {
  components: { singleDayGuard },
  props: { startDate: Date, numOfDays: Number, dateParseOptions: Object },
  methods: {
    getCurrentDate(daysDifference) {
      const currentDate = new Date(this.startDate);
      currentDate.setDate(currentDate.getDate() + (daysDifference - 1));

      return currentDate;
    },
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
}
.singleDateTable,
.dateCard {
  margin-bottom: 1rem;
}
</style>
