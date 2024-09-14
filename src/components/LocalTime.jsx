import '../App.css';
import { useWeather } from '../context/weatherContext';

function LocalTime() {
  const weather = useWeather();

  return (
    <section className='time-window'>
      <span className='local-time'>18:30:01</span>
      <span className='current-date'>Wednesday, 15th Feb 2024</span>
    </section>
  );
}

export default LocalTime;
