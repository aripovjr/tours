import React from 'react' 
import {data} from './data'

function Tours(){
    const [places, setPlaces] = React.useState(data)
    
    const deleteItem = id =>{
    const updated = places.filter(item => item.id !== id)
        setPlaces(updated)
    }

    return(
    <>{
        places.map(place => {
            const {id, image, title, price, text} = place
            return(
                <article key={id} className='container'>
                    <img src={image} alt='pic'/>
                    <div className='info-holder'>
                        <div className='title-price'>
                            <h2>{title}</h2>
                            <h2>${price}</h2>
                        </div>
                        <p>{text}</p>
                        <button key={id} onClick={()=>deleteItem(id)}>Not Interested</button>    
                    </div>
                </article>
            )
        })
    }
    </>
)
}

export default Tours
