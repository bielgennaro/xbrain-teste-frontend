import React from 'react';
import Finalizacao from './routes/Finalizacao'
import Header from './components/Header'
import Form from './routes/userForm'
import ProductCard from './components/productCard'


function App() {
  return (
    <>
      <div>
        <Header />
        <ProductCard />
        <Form />
      </div>
    </>

  );
}

export default App;
