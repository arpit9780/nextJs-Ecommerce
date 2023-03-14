import { wrapper } from '@/redux/store'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import PrivateRoute from '@/router/privateRoutes';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props;
  return (


    <Provider store={store}>
      <PrivateRoute>
        <Component {...pageProps} />
      </PrivateRoute>
      <ToastContainer autoClose={2000}/>
    </Provider>

  )
}
