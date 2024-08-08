"use client"

interface ErrorProps{
    error : Error;
    reset: () => void;
}

export default function Error({error,reset} : ErrorProps){

    return(
        <div>
            <h1>ha ocurriod un error</h1>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}