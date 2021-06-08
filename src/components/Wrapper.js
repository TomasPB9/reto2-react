import '../css/Wrapper.css';
import WrapperUno from './WrapperUno';
import WrapperLargo from './WrapperLargo';
import WrapperDos from './WrapperDos';
import WrapperTres from './WrapperTres';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <WrapperUno />
      <WrapperLargo />
      <WrapperDos />
      <WrapperLargo />
      <WrapperTres />
    </div>
  )
}

export default Wrapper;