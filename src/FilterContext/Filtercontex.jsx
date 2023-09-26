
import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from '../FilterReducer/FilterReducer'
import { ProductUseContext } from "../ProdContext/Prodcontex";

const FilterContext = createContext();

export const FilterContextProvider = ({children})=>{

 const {allData} = ProductUseContext();

 const initialstate = {
    filtered_Data:[],
    all_Products:[],
    selected_value: 'low-high',
    filters:{
      text:'',
      category:'All',
      company:'All'
    }

 }

 const [state, dispatch] = useReducer (reducer, initialstate);

// sorting function...............
 const sorting = () => {
   dispatch({type:'selected'})
}

      // SEARCH FILTER FUNCTIONALITY...............

      const updateFilter = (event) =>{
         let name = event.target.name;
         let value = event.target.value;

         return dispatch({type:'when_search', payload:{name, value}})
      }

     useEffect(()=>{
      dispatch({type:'updated_search'})
     },[state.filters])

 useEffect(()=>{
   
   dispatch({type:'sort_value', payload:allData})
 },[state.selected_value])


 useEffect(()=>{
    dispatch({type:'allProducts', payload:allData})
 },[allData])

 
 

   return(
    <FilterContext.Provider value={{...state, sorting, updateFilter}}>
        {children}
    </FilterContext.Provider>
   )
};

export const UseFilterContext = ()=>{
    return useContext(FilterContext)
};