import React from 'react'
import Card from './Card'
function Cards({title, data}) {

    return (
        <div>
            <h2 className={'text-2xl  text-center py-2'}>{title}</h2>
            <div className='container d-flex justify-content-center align-items-center h-100'>
                <div className='row'>
                    {
                        data.map((item,index)=>( <div key={index} className='col-md-4 mt-2'>
                            <Card item={item}/>
                        </div>))
                    }


                </div>

            </div>
        </div>

    )
}
export default Cards