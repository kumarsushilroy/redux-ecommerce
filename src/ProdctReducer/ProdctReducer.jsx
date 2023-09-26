
 const proReducer = (state, action)=>{

  switch(action.type){
    case 'is_loading':{
        return{
            ...state,
            isloading:true
        }
        
    } 
    case 'is_data':{

        const featuredData = action.payload.filter((item)=>item.featured == true);

        return{
            ...state,
            isloading:false,
            featureData:featuredData,
            allData:action.payload

        }
    }

    case 'is_error':{
        return{
            ...state,
            is_loading:false,
            iserror:true
        }
    }

    default: return  state
  }

}

export default proReducer;