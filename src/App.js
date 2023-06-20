import React from 'react';
import { Header } from './components/header';
import { Res } from './components/res';
import { About } from './components/about';
import { FoodMenu } from './components/foodmenu';
import { FoodMenuWithContext } from './components/foodmenu';


function App() {
  return (
    <div className="App">
    <FoodMenuWithContext>
      <Header />
      <Res />
      <About />
       <FoodMenu />
      </FoodMenuWithContext>
    </div>
  );
}

export default App;
