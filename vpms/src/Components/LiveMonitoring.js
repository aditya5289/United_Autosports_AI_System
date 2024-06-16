import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend, ChartDataLabels);

function LiveMonitoring() {
  const [selectedTier, setSelectedTier] = useState('Tier1');

  // State variables for each tier's data and warnings
  const [tier1Data, setTier1Data] = useState([25, 25, 25, 25]);
  const [tier2Data, setTier2Data] = useState([25, 25, 25, 25]);
  const [tier3Data, setTier3Data] = useState([25, 25, 25, 25]);
  const [tier4Data, setTier4Data] = useState([25, 25, 25, 25]);
  
  const [tier1Warning, setTier1Warning] = useState(false);
  const [tier2Warning, setTier2Warning] = useState(false);
  const [tier3Warning, setTier3Warning] = useState(false);
  const [tier4Warning, setTier4Warning] = useState(false);

  // Effect to fetch data for selected tier on initial load
  useEffect(() => {
    fetchData(selectedTier);
  }, [selectedTier]);

  // Function to fetch data from API for the selected tier
  const fetchData = async (tier) => {
    try {
      const response = await fetch(`your-api-endpoint-for-${tier}`); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Update state based on selected tier
      switch (tier) {
        case 'Tier1':
          setTier1Data(data);
          checkWarning(data, setTier1Warning);
          break;
        case 'Tier2':
          setTier2Data(data);
          checkWarning(data, setTier2Warning);
          break;
        case 'Tier3':
          setTier3Data(data);
          checkWarning(data, setTier3Warning);
          break;
        case 'Tier4':
          setTier4Data(data);
          checkWarning(data, setTier4Warning);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error fetching data for ${tier}:`, error);
      // Handle error state as needed
    }
  };

  // Function to check if any data value is below a threshold and set warning state
  const checkWarning = (data, setWarningState) => {
    const threshold = 10; // Example threshold value
    const hasWarning = data.some(value => value < threshold);
    setWarningState(hasWarning);
  };

  // Function to get background color based on data values
  const getBackgroundColor = (data) => {
    return data.map(value => value >= 50 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)');
  };

  // Function to get border color based on data values
  const getBorderColor = (data) => {
    return data.map(value => value >= 50 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)');
  };

  // Options for the charts
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Tier ${selectedTier.substring(4)} Data`,
      },
      datalabels: {
        formatter: (value, context) => {
          const sum = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
        labels: {
          title: {
            font: {
              weight: 'bold',
            },
          },
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  // Handle dropdown change to update selected tier
  const handleDropdownChange = (e) => {
    setSelectedTier(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="form-group mt-4">
            <label htmlFor="tierSelect">Select Tier:</label>
            <select className="form-control" id="tierSelect" value={selectedTier} onChange={handleDropdownChange}>
              <option value="Tier1">Tier 1</option>
              <option value="Tier2">Tier 2</option>
              <option value="Tier3">Tier 3</option>
              <option value="Tier4">Tier 4</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <Doughnut
            data={{
              labels: ['Good', 'Average', 'Poor', 'Very Poor'],
              datasets: [
                {
                  label: selectedTier,
                  data: selectedTier === 'Tier1' ? tier1Data : 
                        selectedTier === 'Tier2' ? tier2Data : 
                        selectedTier === 'Tier3' ? tier3Data : tier4Data,
                  backgroundColor: getBackgroundColor(selectedTier === 'Tier1' ? tier1Data : 
                                                          selectedTier === 'Tier2' ? tier2Data : 
                                                          selectedTier === 'Tier3' ? tier3Data : tier4Data),
                  borderColor: getBorderColor(selectedTier === 'Tier1' ? tier1Data : 
                                              selectedTier === 'Tier2' ? tier2Data : 
                                              selectedTier === 'Tier3' ? tier3Data : tier4Data),
                  borderWidth: 1,
                },
              ],
            }}
            options={chartOptions}
          />
          {selectedTier === 'Tier1' && tier1Warning && <p className="text-danger mt-2">Tier 1 has crossed a warning threshold.</p>}
          {selectedTier === 'Tier2' && tier2Warning && <p className="text-danger mt-2">Tier 2 has crossed a warning threshold.</p>}
          {selectedTier === 'Tier3' && tier3Warning && <p className="text-danger mt-2">Tier 3 has crossed a warning threshold.</p>}
          {selectedTier === 'Tier4' && tier4Warning && <p className="text-danger mt-2">Tier 4 has crossed a warning threshold.</p>}
        </div>
      </div>
    </div>
  );
}

export default LiveMonitoring;
