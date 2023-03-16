import { useEffect, useState } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import './App.css'
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary"

export default function App() {
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    // const [robots, setRobots] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => setRobots(users))
        console.log("Load users...")
    }, [])

    useEffect(() => { console.log("State has changed...") })

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
        return <h1 className="tc">Loading...</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary><CardList robots={filteredRobots} /></ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

