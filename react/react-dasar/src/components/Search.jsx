import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
     props.onSearchChange(e.target.value);
  };

 

  return (
    <div className="mb-5">
      Cari artikel : <input onChange={onSearchChange} className="border-1 rounded-lg px-2 " type="text" />
      <p className="text-xs">ditemukan 0 data dengan pencarian kata {search} </p>
    </div>
  );
}

export default Search;
