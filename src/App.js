import './App.css';
import Banner from './components/Banner';
import { Caraousel } from './components/Caraousel';
import { Footer } from './components/Footer';
import { FormSet } from './components/Formset/FormSet';
import { Navbar } from './components/Navbar';
import { RowCard } from './components/RowCard';
import { LayoutSection } from './components/section/LayoutSection';
import { Section } from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Section/>
      <Caraousel/>
      <LayoutSection/>
      <RowCard/>
      <FormSet/>
      <Footer/>
      <div className='container bg-black'>
        <div className='container bg-danger'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
