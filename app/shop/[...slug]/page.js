export default function Shop({params}){
    return(
        <h3>this is dynamic multiple routes: {params.slug[0]} / {params.slug[1]}</h3>
    )
}