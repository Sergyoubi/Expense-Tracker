import { createStore } from 'vuex'

export default createStore({
  state: {
    amount: null,
    expenses: [ ],
    details: [ ]
  }, 
  getters: {
    expenseValue: state => {
      return state.amount = state.expenses.reduce((a, b) => { return a + b }, 0) 
    }
  },
  mutations: {
    ADD_DETAILS: (state, detailsPayload) => {
      state.details.push(detailsPayload)
    },
    
    ADD_EXPENSE: (state, expensesPayload) => {
      state.expenses.push(expensesPayload)
      console.log(state.expenses)
    },

    REMOVE_DETAILS: (state, detail) => {
      state.details = state.details.filter(item => item.id != detail.id)
      const index = state.expenses.indexOf(parseInt(detail.value))
      
      if (index > -1) {
        state.expenses.splice(index, 1)
      }
    }
  },
  actions: {
    removeDetails: (context, detail) => { 
      context.commit('REMOVE_DETAILS', detail) 
    } 
  }
})
