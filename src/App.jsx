import './App.scss';
import data from './assets/data';
import Header from './components/Header';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setMenu } from './redux/redux';

function App() {
  const dispatch = useDispatch();

  // 메뉴 초기화
  useEffect(() => {
    dispatch(setMenu(data.menu));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
