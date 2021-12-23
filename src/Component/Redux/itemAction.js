let ItemId = 0
export const addItem = item => ({
    type: 'ADD',
    
    item:{id: ++ItemId,...item}
  })
export const deleteItem = id => ({
    type: 'DELETE',
    id,
    
  })