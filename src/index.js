import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const lakeList = ["Echo Lake", "Maud Lake", "Cascad Lake"]
const App = ({ lakes, description, title }) => {

  return (
    <>
    <header style={{margin: '3rem'}}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>

    <ul>
      {
        lakes.map(lake => (
        <li key={lake.toString()} style={{ boxShadow: '0 9px 9px 0 #ccc',
        listStyle: 'none',
         padding: '1rem',
         margin: '1rem',
         wordWrap: 'wrap'}}>{lake}</li>
      ))
      }

    </ul>
    </>
  )
}
  const GithubUser = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
      // const url = 'https://hn.algolia.com/api/v1/search?query=redux'
      fetch('https://randomuser.me/api/?results=6')
      // fetch(`https://api.github.com/users/${loign}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    }, [])
    console.log(data)
    if (data) {
      return (
        <div>

            {/* {data.hits[3].title} */}
            <br />
            {/* {data.hits[3].url} */}
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
              {
                data.results.map( (results, index) => (
                  <li key={index}
                  style={{ boxShadow: '0 9px 9px 0 #ccc',
                   listStyle: 'none',
                    padding: '1rem',
                    margin: '1rem',
                    wordWrap: 'wrap'}}>
                    {results.email}
                  <p>{results.id.name}</p>
                  <p>{results.name.last} {results.name.first}</p>
                   <img alt="" src={results.picture.large} style={{objectFit: 'fit', width: '100%', height: 'auto'}} />
                   </li>
                  ))
              }
            </ul>
{/* {data.results[0].email}
<br />
<p> {data.results[0].name.last} </p>
<br />
<img src={data.results[3].picture.large} alt="users" /> */}

            <br />
            {/* {data.map(t => t )} */}
            {/* {data.hits.map(hit => console.log(hit.query))} */}

          {/* <img src={data.avatar_url} alt="user" width={100} /> */}
        </div>
      )
    }
    return null
  }

  const Apps = () => {
    return <GithubUser />
  }


  ReactDOM.render(
    // <React.StrictMode>
    <>
      <App title="Trying out things..." description="This dipicts the use of React props, state and React hooks." lakes={lakeList} />
      <Apps />
    </>,
    // </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
