import React, { useState } from 'react';
import Mainmenu from '../../components/Mainmenu/Mainmenu';
import { menuItems } from "../../assets/pictures/pictures";
import Header from '../../components/Header/Header';

function Landingpage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Mainmenu items={filteredItems} />
    </>
  );
}

export default Landingpage;
