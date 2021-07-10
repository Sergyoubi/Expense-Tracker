<template>
  <div class="w-screen h-5/6 bg-gray-50">
    <div class="w-full h-28 flex justify-center items-center">
      <form @submit.prevent="addDetails" class="w-full md:w-7/12 lg:w-7/12 flex justify-center space-x-2">
          <input type="text" required placeholder="Description" class="w-full lg:w-2/5 h-10 pl-3 border border-gray-200 focus:outline-none" v-model="description">
          <input type="number" required placeholder="Value" class="w-full lg:w-2/5 h-10 pl-3 border border-gray-200 focus:outline-none" v-model="value">
          <input type="date" required placeholder="dd/mm/yy" min="2020-01-01" max="2025-12-31" class="w-full lg:w-2/6 h-10 pl-3 border border-gray-200 focus:outline-none" v-model="date">
          <input type="submit" value="Submit" class="w-full lg:w-1/5 h-10 bg-indigo-800 text-white">
      </form>
    </div>
    <div class="w-full md:w-7/12 lg:w-7/12 mx-auto">
      <div class="w-full relative top-10">
        <div v-for="detail in details" :key="detail.id" class="w-full py-2 bg-white rounded-xl flex justify-between items-center border border-gray-200 mb-5"> 
          <div class="w-full h-full text-gray-500 text-lg font-thin ml-3">
            {{ detail.description }}
          </div>
          <div class="w-full h-full text-gray-500 text-lg font-thin ml-3">
            {{ detail.value }} €
          </div>
          <div class="w-full h-full text-gray-500 text-lg font-thin ml-5">
            {{ detail.date }}
          </div>
          <div @click="deleteContent(detail)" class="text-red-600 mr-5 p-2 rounded-full hover:bg-gray-100 bg-white">X</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {

  data () {
    return {
      description: '',
      value: '',
      date: '' 
    }
  },

  computed: {
    ...mapState(['details'])
  },

  methods: {
    ...mapMutations(['ADD_EXPENSE', 'ADD_DETAILS']),
    ...mapActions(['removeDetails']),

    addDetails: function() {
      this.ADD_DETAILS({ id: Date.now(), description: this.description, value: this.value, date: this.date })
      this.ADD_EXPENSE(parseInt(this.value))
      this.description = '',
      this.value = '',
      this.date = '' 
    },
    deleteContent(detail) {
      this.removeDetails(detail)
    }
  }
}
</script>

<style></style>