import React from 'react'


async function fetchData(){
    try{
        const response = await fetch('https://v1.nocodeapi.com/bhattiaman/spotify/hOhAdbAizXcfoctD/browse/categories?country=india');

        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log(data);
        const names = data.categories.items.map(item => item.name);
        console.log(names);

    } catch(error){
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();

const api = () => {
  return (
    <div>
      
    </div>
  )
}

export default api
