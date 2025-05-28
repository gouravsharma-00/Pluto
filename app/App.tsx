import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = async () => {

    let [tab] = await chrome.tabs.query({active : true});
    chrome.scripting.executeScript({
      target : {tabId : tab.id!},
      func : () => {
        alert("Ubuntu extension")
      }
    })
    setCount(prev => prev+1)
  }
  return (
    <section>
      <span>Hello, from Ubuntu {count}</span>
      <button onClick={handleClick}>
        click
      </button>
    </section>
  );
};

export default App;
