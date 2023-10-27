<template>
  <single-day-guard
    v-if="numOfDays === 1"
    :selectedDate="startDate"
    :volenteers="volenteers"
    :shifts="shifts"
  ></single-day-guard>
  <div v-else>
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
        <b-col>
          <single-day-guard
            :selectedDate="getCurrentDate(currDay)"
            :volenteers="volenteers[getCurrentDate(currDay).getTime()]"
            :shifts="shifts"
          ></single-day-guard>
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import {
  getVolenteersByDateRange,
  getVolenteersByDate,
  getShifts,
} from '../api/apiConnection.js';
import singleDayGuard from './singleDayGuard.vue';

export default {
  components: { singleDayGuard },
  props: { startDate: Date, numOfDays: Number, dateParseOptions: Object },
  data() {
    return {
      volenteers: {},
      shifts: [],
    };
  },
  methods: {
    getCurrentDate(daysDifference) {
      const currentDate = new Date(this.startDate);
      currentDate.setDate(currentDate.getDate() + (daysDifference - 1));
      currentDate.setHours(0, 0, 0, 0);

      return currentDate;
    },
    async updateVolenteers() {
      if (this.numOfDays === 1) {
        this.volenteers = await getVolenteersByDate(this.startDate);
      } else {
        this.volenteers = await getVolenteersByDateRange(
          this.startDate,
          this.numOfDays
        );
        alert(
          JSON.stringify(
            Object.keys(this.volenteers).map((key) =>
              new Date(parseInt(key)).toLocaleDateString('he')
            )
          )
        );
      }
    },
    debug(currDay) {
      const currentDate = this.getCurrentDate(currDay);

      alert(
        `${currentDate.toLocaleDateString(
          'he',
          this.dateParseOptions
        )}: ${currentDate.getTime()}
        ${JSON.stringify(this.volenteers)}`
      );
    },
  },
  watch: {
    startDate() {
      this.updateVolenteers();
    },
    numOfDays() {
      this.updateVolenteers();
    },
  },
  async mounted() {
    this.shifts = await getShifts();
    this.updateVolenteers();
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
