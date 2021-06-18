import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {


  // make categories dynamic, so that I may add more and the buttons would follow the data
  let allCategories = ['all', ...new Set(items.map((item)=> item.category))]  // nifty Class that only returns unique values; creating an array with spread
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // filter helper
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)  // inititial state
      return
    }
    let newItems = items.filter((item) => item.category === category)    
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
