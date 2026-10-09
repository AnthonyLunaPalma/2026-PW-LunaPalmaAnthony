import Menu from '../components/Menu'
import '../styles/style.css'

export default function App({Component, pageProps}){
    return(
        <>
            <Menu />
            <Component {...pageProps} />
        </>
    );
}