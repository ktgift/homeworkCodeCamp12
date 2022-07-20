import { useState } from 'react'

const provinces = ['Bangkok', 'Tak', 'Nakhonsawan'];
const districtObject = {
  'BANGKOK': ['Pathuwan', 'Ratchathewi'],
  'TAK': ['MueangTak', 'Maesot'],
  'NAKHONSAWAN': ['Maewong', 'Latyao']
}
const subDistrictsObject = {
  'PATHUMWAN': ['Pathumwan', 'Rongmuang', 'Wangmai'],
  'RATCHATHEWI': ['Thanonphetcahburi', 'Thanonphuthai'],
  'MUEANGTAK': ['Mai Ngam', 'Nong Bua Tai' ],
  'MAESOT': ['Mae Tan'],
  'MAEWONG': ['Khonchonkan', 'Mae ra'],
  'LATYAO': ['Latyao', 'Wang san']
}

function App() {
  const [selectedProvince, setSelectedProvince] = useState('BANGKOK')
  const [selectedDirtrict, setSelectedDirtrict] = useState('PATHUMWAN')

  const optionProvinces = provinces.map(el => (
    <option value={el.toUpperCase()}>{el}</option>
  ))

  const optionDistricts = districtObject[selectedProvince].map(el => (
    <option value={el.toUpperCase()}>{el}</option>
    
  ))

  const optionSubDistrict = subDistrictsObject[selectedDirtrict].map(el => (
    <option value={el.toUpperCase()}>{el}</option>
  ))

  return (
    <div style={{ margin: '3rem' }}>
     <div style={{ marginBottom: '0.5rem'}}>
      <label>Province: </label>
      <select onChange={event => {
        setSelectedProvince(event.target.value)
        console.log(event.target.value)
        }}>
        {optionProvinces}
      </select>
     </div>

     <div style={{ marginBottom: '0.5rem'}}>
      <label>District: </label>
      <select onChange={event => {
        setSelectedDirtrict(event.target.value)
        console.log(event.target.value)
        }}>{optionDistricts}</select>
     </div>
     
     <div style={{ marginBottom: '0.5rem'}}>
      <label>Sub District: </label>
      <select>{optionSubDistrict}</select>
     </div>
    </div>
  );
  }

export default App;