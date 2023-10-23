import React, {useState} from 'react'

const AccordionTable = ({data, headers, rowColor="un-select", height="300px"}) => {
    
    return (
        <div role="table" className='accordion' id='tableAccordion'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height} rowColor={rowColor}/>
        </div>
    )
}

const TableBody = ({dataContents, height, rowColor}) => {
    const [selected, setSelected] = useState('')

    const toggleSelected = (select) => {
        setSelected(selected === select ? '' : select)
    }

    return(
        <div className='d-flex flex-column gap-2 table-container' role='rowgroup' style={{height: height}}>
        {dataContents.map((data) => (
            <div role='row' key={data.id} className='rounded-3 accordion-item'>
                <h4 className={`accordion-header rounded-3 ${selected === data.id ? 'selected' : rowColor }`} >
                    <button className='btn w-100 d-flex gap-2 collapsed' onClick={() => toggleSelected(data.id)} type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${data.id}`} aria-expanded='false' aria-controls={`collapse${data.id}`}>
                    {Object.values(data).map((value, index) => (
                        <span className='w-100 text-truncate' style={{fontSize: '12px'}} role='cell' key={index}>
                            {value}
                        </span>
                    ))}
                    </button>
                </h4>
                <div id={`collapse${data.id}`} className='accordion-collapse collapse' data-bs-parent='#tableAccordion'>
                    <div className='accordion-body'>
                        hello
                        <div>
                            World
                            <div>
                                hello
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>
            <div role='row' className='d-flex gap-2 header-txt mb-3 px-3'>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default AccordionTable