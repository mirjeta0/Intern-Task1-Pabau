import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const steps = [
  {name: 'Daily skin care',imagePath: 'img1.jpg',},
  {name: 'Sun creams',imagePath: 'img2.jpg',},
  {name: 'Night creams',imagePath: 'img3.jpg',},
  {name: 'Cleansers cs',imagePath: 'img4.jpg',},
];

function App() {
  const [Step, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(steps[index].name);
    setCurrentStep(index + 1);
  };

  const handleBack = () => {
    setSelectedOption(null);
    setCurrentStep(0);
  };

  return (
    <div className="App">
      <Header step={`${Step}/${steps.length}`} />
      <Body
        step={`${Step}/${steps.length}`}
        options={steps}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        onBack={handleBack}
      />
      <Footer />
    </div>
  );
}

function Body({ step, options, onSelect, selectedOption, onBack }) {
  if (selectedOption) {
    return (
      <div>
        <p>{selectedOption}</p>
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={option.name}
            className="option-item"
            onClick={() => onSelect(index)}
          >
            <img
              id="option-photo"
              src={process.env.PUBLIC_URL + option.imagePath}
              alt={option.name}
            />
            <button>{option.name}</button>
          </div>
        ))}
      </div>

      <div className="contact-container">
<p>Not sure about consultation type? Please, call <span className="phone-number">02037959063</span></p>
</div>

    </div>


  );
}

export default App;



