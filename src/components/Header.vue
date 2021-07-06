<template>
  <div class="w-screen h-20 bg-blue-100 flex justify-center items-center">
    <div class="w-11/12 h-full flex justify-between items-center">
      <p class="text-4xl font-thin">Expense Tracker</p>
      <p class="py-3 px-5 bg-yellow-400 rounded-2xl">Expenses: <span class="font-bold">€ {{expenseValue}}</span> </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['expenseValue']),  
  }
}
</script>

<style>

</style>