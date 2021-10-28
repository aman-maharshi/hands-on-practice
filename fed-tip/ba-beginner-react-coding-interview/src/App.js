import { useState, useEffect } from "react"

const App = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData()
    }, [page])

    const getData = async () => {
        try {
            const apiResponse = await fetch(`https://randomuser.me/api/?page={page}`)
            const apiData = await apiResponse.json()
            setData([...data, apiData])
        } catch (e) {
            console.log("Unable to fetch data")
        }
    }

    return (
        <div className="wrapper">
            {data.length ? (
                data.map((item, index) => {
                    return (
                        <div key={index} className="userData">
                            <div className="left">
                                <p>Name: {item.results[0].name.first + " " + item.results[0].name.last}</p>
                                <p>Country: {item.results[0].location.country}</p>
                                <p>Email: {item.results[0].email}</p>
                            </div>
                            <div className="right">
                                <img src={item.results[0].picture.medium} alt="profile-pic" />
                            </div>
                        </div>
                    )
                })
            ) : (
                <p>Loading...</p>
            )}

            <button onClick={() => setPage(page + 1)} className="loadMore">
                Load More
            </button>
        </div>
    )
}

export default App
