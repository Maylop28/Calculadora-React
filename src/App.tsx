import { useState } from 'react';
import { Lucide } from 'lucide-react';
import { Settings } from 'lucide-react';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const evaluatedResult = eval(expression);
        setResult(evaluatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl p-4 w-72">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold">{expression}</div>
          <Settings className="w-6 h-6" />
        </div>
        <div className="text-6xl font-bold mb-4">{result}</div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('C')}
          >
            C
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('(')}
          >
            (
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick(')')}
          >
            )
          </button>
          <button
            className="bg-orange-500 rounded-lg p-4 text-white hover:bg-orange-600"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            className="bg-orange-500 rounded-lg p-4 text-white hover:bg-orange-600"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            className="bg-orange-500 rounded-lg p-4 text-white hover:bg-orange-600"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            className="bg-orange-500 rounded-lg p-4 text-white hover:bg-orange-600"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button
            className="bg-orange-500 rounded-lg p-4 text-white hover:bg-orange-600"
            onClick={() => handleButtonClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;