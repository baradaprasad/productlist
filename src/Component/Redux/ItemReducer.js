const itemm=[
    // {
    //     id:1,
    //     name:'jockey',
    //     price:520
    // },
    // {
    //     id:2,
    //     name:'Puma',
    //     price:574
    // },
    // {
    //     id:3,
    //     name:'Glen',
    //     price:789
    // },
    // {
    //     id:4,
    //     name:'Apple',
    //     price:85277 
    // },
    // {
    //     id:5,
    //     name:'Intigr',
    //     price:852
    // },
    // {
    //     id:6,
    //     name:'Brit',
    //     price:753
    // },
    // {
    //     id:7,
    //     name:'Parle',
    //     price:456
    // },
    // {
    //     id:8,
    //     name:'Super',
    //     price:1320
    // },
    // {
    //     id:9,
    //     name:'Durga',
    //     price:750
    // }
   
]
const ItemReducer = (state = itemm, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state,action.item];
        case 'DELETE':{
            let newState=[...state];
           const index= newState.findIndex((eachItem)=>{
               return eachItem.id===action.id
            })
            if(index>-1){
                newState.splice(index,1)
                
            }
            return newState;
        }

           
        default:
            return state;

    }

}
export default ItemReducer