import Fetch from './component/fetch/Fetch';


function App() {
  return (
    <>
    <Fetch id="" m="get" />
    <Fetch id="" m="post" category="men's clothing" description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" price="109.95"/>
    <Fetch id="7" m="put" category="men's clothing" description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" price="109.95"/>
    <Fetch id="6" m="delete"/>
    </>
  );
}

export default App;
