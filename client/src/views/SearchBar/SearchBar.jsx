import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../../redux/actions";

const SearchBar = () => {
   const [name, setName] = useState('');

   const dispatch = useDispatch()

   const handleChange = (event) => {
      setName(event.target.value)
   }
   
   const onSearch = () => {
      dispatch(getDog(name))
   }
   
   return (
      <div>
         <input type="search" onChange={handleChange} value={name}/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}


export default SearchBar