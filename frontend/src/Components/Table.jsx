import React from 'react'

const Table = ({data}) => {
    
    return (
        <div role="table" className='accordion' id='tableAccordion'>
            <TableHeader />
            <TableBody />
        </div>
    )
}

const TableBody = ({dataContents}) => {
    return(
        <div role='rowgroup' className='d-flex flex-column gap-3'>
            <div role='row' className='accordion-item'>
                <h4 className='accordion-header'>
                    <button className='btn btn-outline-primary w-100' data-bs-toggle='collapse' data-bs-target='#collapse1' aria-expanded='true' aria-controls='collapseOne'>
                        <span>name</span>
                        <span>age</span>
                        <span>number</span>
                        <span>address</span>
                        <span>skill</span>
                    </button>
                </h4>
                <div id='collapse1' className='accordion-collapse collapse' data-bs-parent='tableAccordion'>
                    <div>
                        hello
                    </div>

                    <div>
                        World
                        <div>
                            hello
                        </div>
                    </div>
                </div>
            </div>

            <div role='row' className='accordion-item'>
                <h4 className='accordion-header'>
                    <button className='btn btn-outline-primary w-100' data-bs-toggle='collapse' data-bs-target='#collapse2' aria-expanded='true' aria-controls='collapseTwo'>
                        <span>name</span>
                        <span>age</span>
                        <span>number</span>
                        <span>address</span>
                        <span>skill</span>
                    </button>
                </h4>
                <div id='collapse2' className='accordion-collapse collapse' data-bs-parent='tableAccordion'>
                    <div>
                        hello
                    </div>

                    <div>
                        World
                        <div>
                            hello
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>

        </div>
    )
}
export default Table