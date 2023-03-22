import { wrapper } from '@/redux/store'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import PrivateRoute from '@/router/privateRoutes';
import { ToastContainer } from 'react-toastify';
// import dynamic from "next/dynamic";


export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props;
  // const shop = dynamic(import("../pages/user/shopping-card"), {
  //   loading: () => <p>Loading...</p>,ssr: false,
  // });
  return (


    <Provider store={store}>
      <PrivateRoute>
        <Component {...pageProps} />
      </PrivateRoute>
      <ToastContainer autoClose={2000}/>
    </Provider>

  )
}
