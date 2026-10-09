import {useRouter} from 'next/router';

export default function Practica(){
    const router = useRouter();
    const { id } = router.query;

    return(
        <main>
            <h1>Ruta dinámica</h1>
            <p>El Parámetro capturado por next es : {id}</p>
        </main>
    );
}