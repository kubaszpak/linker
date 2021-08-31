import './App.css'
import { Typography, Button } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Typography variant="h2">Welcome</Typography>
      </header>
      <Button variant="contained" color="primary" style={{
        position: "absolute",
        bottom: 50,
        right: 50
      }}>
        <LinkIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default App;
