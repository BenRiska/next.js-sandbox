import {useRouter} from "next/router"

function index({data}) {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            <h1>dynamic route {id}</h1>
            <h2>{data.name}</h2>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    // context.params.id
    // fetch page data
    let data = {name: "mock data"}
    return {
        props: {
            data
        }
    }
}

export default index
