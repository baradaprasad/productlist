import React from 'react'

export default function Pagingnation({currentPage,totalItem,setCurrentPage}) {
    
    return ( 
             <div>
             <span>Pagination : </span>
                                       
                  {Array(Math.ceil(totalItem/5)).fill().map((_, i) => (<span onClick={()=>{setCurrentPage(i+1)}} style={{color:(i+1)===currentPage?'red':'black',cursor: 'pointer',marginRight:'5px'}} key={i+1}>{i+1}</span>))}
                    
                 </div>
    )
}
