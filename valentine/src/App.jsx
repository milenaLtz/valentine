import './App.scss'
import ContentBlock from './shared/ContentBlock';
import { useState } from 'react';
import Intro from './widgets/Intro';
import Gallery from './widgets/Gallery';
import Quiz from './widgets/Quiz';
import ValentineDate from './widgets/ValentineDate';
import MemorySlider from './widgets/MemorieSlider';


function App() {

  const [step, setStep] = useState(0);

  if (step === 0) return <div className='content-block'><Intro next={() => setStep(1)} /></div>;
  if (step === 1) return <div className='content-block'><Quiz next={() => setStep(2)} /></div>;
  if (step === 2) return <div className='content-block'><MemorySlider next={() => setStep(3)} /></div>;
  if (step === 3) return <div className='content-block'><ValentineDate /></div>;

}

export default App
