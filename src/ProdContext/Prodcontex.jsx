import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../ProdctReducer/ProdctReducer";

const Productcontext = createContext();

export const ProductProvider = ({ children }) => {
  const initialstate = {
    isloding: false,
    iserror: false,
    allData: [],
    featureData:[]
  };

  
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    dispatch({ type: "is_loading" });
    try {
      const response = await fetch("https://api.pujakaitem.com/api/products");
      const res = await response.json();
    //   console.log(res)
      dispatch({ type: "is_data", payload: res });
    } catch (err) {
      dispatch({ type: "is_error" });
    }
  };

  

  return (
    <Productcontext.Provider value={{ ...state }}>
      {children}
    </Productcontext.Provider>
  );
};

export const ProductUseContext = () => {
  return useContext(Productcontext);
};
