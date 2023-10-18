<template>
  <b-card bg-variant="secondary" text-variant="white">
    <b-table :items="items" :fields="fields" bordered>
      <template #cell(shift)="row">
        {{ row.value }}
      </template>
      <template #cell()="row">
        <b-button
          size="sm"
          @click="showModal(row.index, parseInt(row.field.key), $event.target)"
          class="mr-1"
          v-if="!row.value"
        >
          הירשם
        </b-button>
        <p v-else>
          {{ row.value }}
        </p>
      </template>
    </b-table>
  </b-card>

  <b-modal :id="modalInfo.id" :title="modalInfo.title" ok-only> </b-modal>
</template>

<script>
export default {
  id: 'singleDayTable',
  props: {
    selectedDate: Date,
  },
  data() {
    return {
      volenteerNumber: 2,
      shiftNumber: 2,
      shiftDuration: 2,
      startHour: 2,
      items: [],
      modalInfo: { id: 'signUpModal', title: '' },
    };
  },
  computed: {
    fields() {
      const fields = [{ key: 'shift', label: 'משמרת' }];
      for (
        let volenterrIndex = 0;
        volenterrIndex < this.volenteerNumber;
        volenterrIndex++
      ) {
        fields.push({
          key: volenterrIndex.toString(),
          label: `מתנדב ${volenterrIndex + 1}`,
        });
      }

      return fields;
    },
  },
  methods: {
    showModal(shift, volenteerIndex, button) {
      this.modalInfo.title = `הרשמה למשמרת ${
        shift + 1
      } בתאריך ${this.selectedDate.toLocaleDateString()}`;
      this.$root.$emit('bv::show::modal', this.modalInfo.id, button);
    },
  },
  mounted() {
    let currentHour = this.startHour;
    for (let shiftIndex = 0; shiftIndex < this.shiftNumber; shiftIndex++) {
      this.items.push({
        shift: `${currentHour}:00 - ${currentHour + this.shiftDuration}:00`,
      });
      currentHour += this.shiftDuration;
    }
  },
};
</script>

<style scoped>
.card {
  direction: rtl;
  text-align: center;
}
</style>

<style>
.modal-content {
  direction: rtl;
}
</style>
