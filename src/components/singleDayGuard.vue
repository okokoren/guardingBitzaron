<template>
  <b-card bg-variant="secondary" text-variant="white">
    <b-table :items="items" :fields="fields"> </b-table>
  </b-card>
</template>

<script>
export default {
  id: 'singleDayTable',
  data() {
    return {
      fields: [
        { key: 'shift', lable: 'משמרת' },
        { key: 'firstVolenteer', lable: 'מתנדב ראשון' },
        { key: 'secondVolenteer', lable: 'מתנדב שני' },
      ],
      items: [
        {
          shift: '2:00 - 4:00',
        },
        {
          shift: '4:00 - 6:00',
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  direction: rtl;
  text-align: center;
}
</style>
