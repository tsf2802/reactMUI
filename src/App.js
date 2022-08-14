import {Button, Typography} from "@mui/material"

function App() {
  return (
    <div >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant = "h1" component = "p">
        H1 style but it a p tag
      </Typography>
    </div>
  );
}

export default App;
