
import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react'
import './App.css'
import data from './components/data'

function App() {
 
  const [selected,setSelected] = useState(null)
  const [enableMultiSelection,setEnableMultiSelection] = useState(false)
  const [multiple,setMultiple] = useState([]);

  
  const handleSingleSelection = (getCurrentId)=>{
    setSelected(getCurrentId === selected? null : getCurrentId)
  }
  const handlemultiSelection = (getCurrentId)=>{
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
      else copyMultiple.splice(findIndexOfCurrentId,1)

    setMultiple(copyMultiple)
  }
  return (
    
      <div className='wrapper'>
        <button
        onClick={()=>setEnableMultiSelection(!enableMultiSelection)
       
        }
        style={{
          backgroundColor: enableMultiSelection ? '#874202' : '#614101',
         
        }}
        
        > {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}</button>
        <div className='accordian'>
        
        {
          data && data.length > 0 ? (
            data.map((dataItem) =>(
              <div key={dataItem.id} className='item'
              onClick={ enableMultiSelection 
              ? ()=>handlemultiSelection(dataItem.id) 
              :()=>handleSingleSelection(dataItem.id)}>
                <div onClick={()=>handleSingleSelection(dataItem.id)} className='tittle'>
                  <h3>{dataItem.question}</h3> 
                  <span><SlArrowDown /></span>
                  
                </div>
                {
                  enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 &&(
                    <div className='content'>{dataItem.answer}</div>
                  )
                  : selected === dataItem.id && (
                    <div className='content'>{dataItem.answer}</div> 
                   )
                }

               


              </div>
            ))
          ): 
          (<div>No Data found</div>)
        }
          
        </div>
      </div>
    
  )
}

export default App;
