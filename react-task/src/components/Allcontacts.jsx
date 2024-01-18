import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Allcontacts() {
  const [data, setdata] = useState([]);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/contacts/?format=json&${
        searchData && "search=" + searchData
      }`
    )
      .then((res) => res.json())
      .then((res) => setdata(res.results));
  }, [searchData]);

  const  handelSearch = (form) =>{
    form.preventDefault()
    setSearchData(form.target.search.value.trim())
  }
 
  return (
    <Modal data={data}>
      <form method="post" onSubmit={handelSearch}>
        <div class="input-group mb-3">
          <input type="text" name="search" class="form-control inputGroup-sizing-lg" placeholder="Search by Number" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
    </Modal>
  );
}
