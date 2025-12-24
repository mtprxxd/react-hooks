import { useState, useCallback, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(11);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  


const generatePassword = useCallback(() => {
  let charset = '';

  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  if (charset.length === 0) return;

  let newPassword = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset[randomIndex];
  }
  setPassword(newPassword);
}, [length, includeUppercase, includeNumbers, includeSymbols]);




// useRef hook

const passwordRef = useRef(null);

const copyToClipboard = useCallback(() => {
   passwordRef.current?.select();
  //  set a limit for copied text
  passwordRef.current?.setSelectionRange(0, 5);
   window.navigator.clipboard.writeText(password);
}, [password]);



  
  return (
    
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-[#f5f5dc] text-orange-500">
      <h1 className='text-black text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        readOnly
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
        value={password}
        ref={passwordRef}
      />
      <button onClick={copyToClipboard} className="bg-orange-500 text-white px-4 py-2 focus:outline-none">
        Copy
      </button>
    </div>
    <div className="flex items-center mb-4">
      <label className="flex items-center">
        <input type="checkbox"
  checked={includeUppercase}
  onChange={() => setIncludeUppercase(prev => !prev)} className="form-checkbox h-5 w-5 text-orange-500" />
        <span className="ml-2 text-gray-700">Include Uppercase Letters</span>
      </label>
      <label className="flex items-center ml-6">
  <input type="checkbox" checked={includeNumbers}
  onChange={() => setIncludeNumbers(prev => !prev)} className="form-checkbox h-5 w-5 text-orange-500"  />
  <span className="ml-2 text-gray-700">Include Numbers</span>
</label>
      <label className="flex items-center ml-6" />
        <input type="checkbox" checked={includeSymbols}
  onChange={() => setIncludeSymbols(prev => !prev)} className="form-checkbox h-5 w-5 text-orange-500" />
        <span className="ml-2 text-gray-700">Include Symbols</span>
    </div>
    <div className="flex items-center mb-4">
      <label className="text-gray-700 mr-4">Password Length:</label>
            <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer mx-2 mask-y-from-0.50 mask-x-to-0.50 w-36 accent-red-500'
         onChange={(e) => setLength(Number(e.target.value))
}
          />
          <label>Length: {length}</label>
      </div>
      
    </div>
    <div>
      <button onClick={generatePassword} className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none">
        Generate Password
      </button>
    </div>
     

      </div>
    

  );
}

export default App
