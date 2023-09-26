const filterReducer = (state, action) => {

  switch (action.type) {
    case "allProducts": {
      return {
        ...state,
        all_Products: [...action.payload],
        filtered_Data: [...action.payload],
      }
    }

    case 'selected':{

      let select = document.getElementById('sort');
      let selection = select.options[select.selectedIndex].value
      
      return{
        ...state,
        selected_value : selection
      }
    }

    case 'sort_value':{

      let sortedData;
     let sortData = [...action.payload];

     
     if(state.selected_value === 'high-low'){
      sortedData = sortData.sort((a,b)=>{
       return a.name.localeCompare(b.name)
      })
     }

     if(state.selected_value === 'low-high'){
      sortedData = sortData.sort((a,b)=>{
       return b.name.localeCompare(a.name)
      })
     }

     if(state.selected_value === 'lowestprice'){
      const sortingData = (a,b)=>{
        return a.price - b.price
      }
      sortedData = sortData.sort(sortingData)
     }

     if(state.selected_value === 'highestprice'){
      const sortingData = (a,b)=>{
        return b.price - a.price
      }
      sortedData = sortData.sort(sortingData)
     }


      
      return{
        ...state,
        filtered_Data: sortedData
      }
    }

    // SEARCH FILTER FUNCTIONALITY............

    case 'when_search':{

      const {name, value} = action.payload;

      return{
          ...state,
          filters:{
            ...state.filters,
            [name] : value
          }
      }
    }

    

    case 'updated_search':{

      let {all_Products} = state
      let tempData = [...all_Products]

      const {text, category, company} = state.filters 
      

      if(text){
        tempData = tempData.filter((item)=>item.name.toLowerCase().includes(text));
        console.log(tempData)
      }

      else if(category !== 'All') {
       tempData = tempData.filter((item)=>item.category === category)
       
      }

      else if(company !== 'All'){
        tempData = tempData.filter((item)=>{
          return item.company === company
        })
        console.log(tempData)
      }
      
      return{
         ...state,
         filtered_Data: tempData,
         
      }
      
    }

    case "FILTER_PRODUCTS":
      let { all_Products } = state;
      let tempFilterProduct = [...all_Products];

      const { text } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      return{
        ...state,
        filtered_Data : tempFilterProduct
      }
    default: return state
  }
};

export default filterReducer;
