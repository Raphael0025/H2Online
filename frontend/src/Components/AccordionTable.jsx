import React, {useState} from 'react'

const AccordionTable = ({data, headers}) => {
    
    return (
        <div role="table" className='accordion' id='tableAccordion'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data}/>
        </div>
    )
}

const TableBody = ({dataContents}) => {
    const [selected, setSelected] = useState('')

    const toggleSelected = (select) => {
        setSelected(selected === select ? '' : select)
    }

    return(
        <div className='d-flex flex-column gap-2 table-container' role='rowgroup'>
        {dataContents.map((data) => (
            <div role='row' key={data.id} className='accordion-item'>
                <h4 className={`accordion-header ${selected === data.id ? 'selected' : 'un-select' }`}>
                    <button className='btn w-100 d-flex gap-2 collapsed' onClick={() => toggleSelected(data.id)} type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${data.id}`} aria-expanded='false' aria-controls={`collapse${data.id}`}>
                        <span className='w-100' role='cell'>{data.id}</span>
                        <span className='w-100' role='cell'>{data.name}</span>
                        <span className='w-100' role='cell'>{data.email}</span>
                        <span className='w-100' role='cell'>{data.age}</span>
                        <span className='w-100' role='cell'>{data.city}</span>
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
            <div role='row' className='d-flex gap-2 header-txt mb-3'>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default AccordionTable