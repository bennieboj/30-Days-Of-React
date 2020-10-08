import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const ItemGridLine = ({ backgroundColorFunction, items }) => {
  let groupByN = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };

  return items.map((item) => {
    const color = backgroundColorFunction(item);
    const divStyles = {
      display: 'inline-block',
      width: '100px',
      height: '100px',
      backgroundColor: color,
      border: '1px solid black',
      textAlign: 'center'
    }
    return <div key={item} style={divStyles}>{item}</div>
  })
}

const ItemGrid = ({ backgroundColorFunction, items }) => {
  let groupByN = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
  };

  items = groupByN(8, items)

  return items.map((items2) => {
    return <div><ItemGridLine backgroundColorFunction={backgroundColorFunction} items={items2}/><br/></div>
  })
}


const MyColoredNumbersGrid = ( {numberOfItems} ) => {
    const numberItems = Array.apply(null, {length: numberOfItems}).map(Number.call, Number)
    function mapItemToColor (number) {
      function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
      if(isPrime(number)) return 'red'

      if(number%2===0) return 'green'
      return 'yellow'
    }
  return (<ItemGrid backgroundColorFunction={mapItemToColor} items={numberItems} />)
}


const MyHexGrid = ( {numberOfItems} ) => {
    const hexaColor = () => {
      let str = '0123456789abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
      }
      return '#' + color
    }
    const hexItems = Array.apply(null, {length: numberOfItems}).map(Function.call, hexaColor)
    function mapItemToColor (item) {
      return item
    }
  return (<ItemGrid backgroundColorFunction={mapItemToColor} items={hexItems} />)
}


// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  const numberOfItems = 20

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <MyColoredNumbersGrid numberOfItems={numberOfItems}/>
      <br/>
      <MyHexGrid numberOfItems={numberOfItems}/>
      <Footer copyRight={date} />
    </div>
  )
}


const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)