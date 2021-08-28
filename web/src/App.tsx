import './App.css'
import { Typography, Button } from '@material-ui/core'
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Welcome</Typography>
      </header>
      <Button variant="contained" color="primary" style={{
        position: "absolute",
        bottom: 50,
        right: 50
      }}>
        <LinkOutlinedIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default App;
