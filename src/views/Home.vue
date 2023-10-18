<template>
  <b-container fluid id="mainPageContainer">
    <b-row align-h="center">
      <b-col cols="auto" class="pageTitle">
        <h1>שמירות ביצרון</h1>
      </b-col>
    </b-row>
    <b-row align-h="center" align-v="center">
      <b-col cols="10">
        <b-row align-v="center">
          <b-col cols="auto">
            <b-button @click="getToday">היום</b-button>
          </b-col>
          <b-col>
            <b-row align-h="between" id="dateScroller">
              <b-col cols="3" class="dateContainer">
                <h3>
                  {{ prevDate.toLocaleDateString('he-IL', dateParseOptions) }}
                </h3>
              </b-col>
              <b-col cols="5" class="dateContainer">
                <b-row class="selectedDateContainer">
                  <b-col cols="1">
                    <b-button @click="decreaseDate"
                      ><BIconArrowLeft></BIconArrowLeft
                    ></b-button>
                  </b-col>
                  <b-col cols="10">
                    <h3>
                      {{
                        selectedDate.toLocaleDateString(
                          'he-IL',
                          dateParseOptions
                        )
                      }}
                    </h3>
                  </b-col>
                  <b-col cols="1">
                    <b-button @click="increaseDate"
                      ><BIconArrowRight></BIconArrowRight
                    ></b-button>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="3" class="dateContainer">
                <h3>
                  {{ nextDate.toLocaleDateString('he-IL', dateParseOptions) }}
                </h3>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-5">
          <b-col cols="6">
            <singleDayGuard :selected-date="selectedDate"></singleDayGuard>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-vue';
import singleDayGuard from '../components/singleDayGuard.vue';

export default {
  components: {
    BIconArrowLeft,
    BIconArrowRight,
    singleDayGuard,
  },
  data() {
    return {
      selectedDate: new Date(),
      dateParseOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
    };
  },
  computed: {
    prevDate() {
      const date = new Date(this.selectedDate);
      date.setDate(this.selectedDate.getDate() - 1);

      return date;
    },
    nextDate() {
      const date = new Date(this.selectedDate);
      date.setDate(this.selectedDate.getDate() + 1);

      return date;
    },
  },
  methods: {
    increaseDate() {
      this.selectedDate = new Date(this.selectedDate);
      this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    },
    decreaseDate() {
      this.selectedDate = new Date(this.selectedDate);
      this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    },
    getToday() {
      this.selectedDate = new Date();
    },
  },
};
</script>

<style scoped>
#mainPageContainer {
  background-color: #242424;
}

#dateScroller {
  background-color: #555252ee;
  color: white;
  text-align: center;
}

.dateContainer {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
}

.selectedDateContainer {
  color: white;
}

.pageTitle {
  margin-bottom: 1rem;
}
</style>
