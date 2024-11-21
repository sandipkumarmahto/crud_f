import { useParams } from "react-router-dom"

function SamplePage(){
    const {id}=useParams();
    return(
        <>
        <h1>
            {id}
        </h1>
        </>
    )
}

export default SamplePage;