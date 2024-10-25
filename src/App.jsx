import React from 'react'
import './App.css'

import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const[text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [open, setOpen] = useState('Открыть')
  

  const change = () => {
    setImg(!img)
    setOpen(img ? 'ОТКРЫТЬ' : 'ЗАКРЫТЬ')
  }

      
  return (
    <>

      <div className="box">
        <button onClick={change}>{open} ФОТО</button>
        {img && <img src="https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg" alt="" />}
      </div>


      <div className="box"> 
        <h4>{text}</h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className="box">
        <h4>{num}</h4>
        <button onClick={() => setNum(num + 1)}>Добавить число</button>
        <button onClick={() => setNum(num - 1)}>Уменьшить число</button>
        <button onClick={() => setNum(num * 2)}>Удвоить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число</button>
        <button onClick={() => setNum(num * 0)}>Обнулить число</button>
      </div>


    </>
  )
}

export default App