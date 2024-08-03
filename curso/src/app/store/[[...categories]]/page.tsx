interface CategoriesProps{
    // path de url
    params : {
        categories : string[]
    }
    // parametros de url
    searchParams : {
        hola ?: string
    }
}

export default function Categories(props : CategoriesProps){
    const {categories} = props.params
    const {hola} = props.searchParams
    return(
        <div>
        <h1>Categoria dinamica: {categories} </h1>
        <p>parametros: {hola}</p>
        </div>
    )
}