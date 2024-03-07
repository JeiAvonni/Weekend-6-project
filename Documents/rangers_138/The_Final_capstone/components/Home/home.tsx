import * as _React from 'react'; 

interface Project {
    title: string
}


// Functional component
export const Home = (project: Project) => {

    return (
        <div>
            <h1> { project.title }</h1>
        </div>
    )
}