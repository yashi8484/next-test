import axios from 'axios'

function Fuga({ users }) {
  return (
    <>
      <ul>
        {
          users.map((u) =>
            <li>{u.name}</li>
          )
        }
      </ul>
    </>
  )
}

Fuga.getInitialProps = async ({ req }) => {
  let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return { users: data }
}

export default Fuga
