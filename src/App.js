import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './img/logo.png';
import Section1 from './components/Section1';
import Description from './components/Description';
import Classes from './components/Classes';
import WhyUrban from './components/WhyUrban';
import img1 from './img/excercise-1.jpg'
import img2 from './img/excercise-2.jpg'
import img3 from './img/excercise-3.jpg'
import img4 from './img/excercise-4.jpg'
import CenterImg from './img/back-pull.jpg'
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Section2 from './components/Section2';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar logo={Logo}/>
    <Section1/>
    <Description />
    <Classes img1={img1} img2={img2} img3={img3} img4={img4}/>
    <WhyUrban CenterImg={CenterImg}/>
    <Schedule/>
   <Stats/>
   <Section2/>
   <JoinForm/>
   <Footer logo={Logo}/>
    </>
  );
}

export default App;
