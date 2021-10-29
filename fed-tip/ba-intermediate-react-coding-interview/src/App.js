import { useState, useEffect } from "react"

const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getKeyValue = data => {
        if (typeof data === "object") {
            return flattenObject(data)
        } else if (typeof data === "string") {
            return data
        }
    }

    const flattenObject = obj => {
        const result = []
        Object.keys(obj).forEach(item => {
            if (typeof obj[item] === "string") {
                result.push(obj[item])
            } else {
                result.push("____")
            }
        })
        return result.join(", ")
    }

    const getData = async () => {
        try {
            const apiResponse = await fetch("https://randomuser.me/api/?results=20")
            const apiData = await apiResponse.json()
            setData(apiData.results)
        } catch (e) {
            console.log("Unable to fetch data.")
        }
    }

    return (
        <div className="wrapper">
            <h3>Lorem, ipsum dolor.</h3>
            {data ? (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((user, indexUser) => {
                            return (
                                <tr key={indexUser}>
                                    {Object.keys(user).map((userKey, userKeyIndex) => {
                                        return <td key={userKeyIndex}>{getKeyValue(user[userKey])}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : null}

            {data ? <pre>{JSON.stringify(data, null, 5)}</pre> : null}
        </div>
    )
}

export default App
