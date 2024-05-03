
// IMAGES 
import Sedans from './images/icon-sedans.svg';
import Suvs from './images/icon-suvs.svg';
import Luxury from './images/icon-luxury.svg';


// COMPONENTS
import Card from './components/Card';
import Description from './components/Description';
import Title from './components/Title';
import Btn from './components/Btn';
import Icon from './components/Icon';

function App() {
  return (
    <main className='px-6 py-24 flex flex-col halfxl:flex-row halfxl:min-h-svh halfxl:justify-center halfxl:items-center halfxl:p-0' first> 
      <Card primaryColor={'400'} first>
        <Icon filepath={Sedans}/>
        <Title text={'Sedans'} />
        <Description text={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'} />
        <Btn text={'Learn More'} primaryColor={'400'} />
      </Card>
      <Card primaryColor={'600'}>
        <Icon filepath={Suvs}/>
        <Title text={'Suvs'} />
        <Description text={'Take an SUV for its spacious interior, power, and versatility. Perfecr=t for your next family vacation and off-road adventures.'} />
        <Btn text={'Learn More'} primaryColor={'600'} />
      </Card>
      <Card primaryColor={'700'} last>
        <Icon filepath={Luxury}/>
        <Title text={'Luxury'} />
        <Description text={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'} />
        <Btn text={'Learn More'} primaryColor={'700'} />
      </Card>
    </main>
  )
}

export default App
