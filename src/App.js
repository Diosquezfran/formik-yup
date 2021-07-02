import './App.css';
import Formulario from './components/Form/Formulario';
import rocket from './assets/rocket.png';
import { Image, Grid, Segment } from 'semantic-ui-react';

function App() {
  return (
    <Segment>
      <Grid verticalAlign='middle' columns={2} >
        <Grid.Column stretched >
           <Formulario />
        </Grid.Column>
        <Grid.Column>
         <Image src={rocket} fluid/>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default App;
