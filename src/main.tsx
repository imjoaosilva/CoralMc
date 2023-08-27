import ReactDOM from 'react-dom/client';
import { RouteList } from './router/route';
import {BrowserRouter} from 'react-router-dom';
import { Container } from './global/style';
import './global/global.css';
import { SideBar } from './components/SideBar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container>
    <SideBar/>
    <BrowserRouter>
      <RouteList/>
    </BrowserRouter>
  </Container>
)
