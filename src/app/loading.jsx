import LoadingSpinner from "@/components/loadingSpinner";

export default function loading(){
    return(
        <>
        <div className="middlebox">
            <div className="flex">
                <h2 className="" >Carregando</h2>
                <LoadingSpinner/>
            </div>
        </div>
        
        </>
    )
}