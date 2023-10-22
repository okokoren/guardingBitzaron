<template>
  <b-container fluid id="mainPageContainer">
    <b-row align-h="center">
      <b-col cols="auto" class="pageTitle">
        <h1>שמירות ביצרון</h1>
      </b-col>
    </b-row>
    <b-row align-h="center" align-v="center">
      <b-col xl="10">
        <b-row align-v="center" align-h="center">
          <b-col cols="auto">
            <b-button @click="getToday">היום</b-button>
          </b-col>
          <b-col xl="11" id="dateScroller">
            <b-row align-h="around">
              <b-col lg="3" class="dateContainer d-none d-lg-block">
                <h4>
                  {{ prevDate.toLocaleDateString('he-IL', dateParseOptions) }}
                </h4>
              </b-col>
              <b-col cols="11" lg="6" xl="5" class="dateContainer">
                <b-row class="selectedDateContainer" align-h="around">
                  <b-col cols="3">
                    <b-button @click="decreaseDate"
                      ><BIconArrowLeft></BIconArrowLeft
                    ></b-button>
                  </b-col>
                  <b-col cols="6">
                    <h4>
                      {{
                        selectedDate.toLocaleDateString(
                          'he-IL',
                          dateParseOptions
                        )
                      }}
                    </h4>
                  </b-col>
                  <b-col cols="3">
                    <b-button @click="increaseDate"
                      ><BIconArrowRight></BIconArrowRight
                    ></b-button>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="3" class="dateContainer d-none d-lg-block">
                <h4>
                  {{ nextDate.toLocaleDateString('he-IL', dateParseOptions) }}
                </h4>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-5">
          <b-col xl="6" md="8" cols="10">
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
  background-clip: content-box;
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
