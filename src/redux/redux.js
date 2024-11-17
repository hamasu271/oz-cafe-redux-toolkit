import { configureStore, createSlice } from '@reduxjs/toolkit';

// 메뉴와 장바구니 초기 상태 설정
const initialMenuState = { menu: [] };
const initialCartState = { cart: [] };

// 메뉴 슬라이스 생성
const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenuState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

// 장바구니 슬라이스 생성
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

// Redux 스토어 구성
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// 액션 내보내기
export const { setMenu } = menuSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;
