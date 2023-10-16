<template>
  <b-container fluid id="mainPageContainer">
    <b-row align-h="center" class="topElement">
      <b-col cols="8" id="dateScroller">
        <b-row align-h="between">
          <b-col cols="3" class="dateContainer">
            <h3>{{ prevDate.toLocaleDateString() }}</h3>
          </b-col>
          <b-col cols="5" class="dateContainer">
            <b-row class="selectedDateContainer">
              <b-col cols="1">
                <b-button @click="decreaseDate"
                  ><BIconArrowLeft></BIconArrowLeft
                ></b-button>
              </b-col>
              <b-col cols="10">
                <h3>{{ selectedDate.toLocaleDateString() }}</h3>
              </b-col>
              <b-col cols="1">
                <b-button @click="increaseDate"
                  ><BIconArrowRight></BIconArrowRight
                ></b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="3" class="dateContainer">
            <h3>{{ nextDate.toLocaleDateString() }}</h3>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-vue';

export default {
  components: {
    BIconArrowLeft,
    BIconArrowRight,
  },
  data() {
    return {
      selectedDate: new Date(),
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
  },
};
</script>

<style scoped>
#mainPageContainer {
  background-color: #242424;
}
.topElement {
  margin-top: 1.5rem;
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
</style>
