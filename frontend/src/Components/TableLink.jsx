import React from 'react'

const TableLink = ({data, headers, height='420px'}) => {
    
    return (
        <div role="table" className='w-100'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height}/>
        </div>
    )
}

const TableBody = ({dataContents, height}) => {

    return(
        <div className='d-flex flex-column w-100 gap-2 table-container-two' role='rowgroup' style={{height: height}}>
        {dataContents.map((data) => (
            <div role='row' key={data.id} className='table-row d-flex text-center py-2 rounded-3'>
            {Object.values(data).map((value, index) => (
                <span className='w-100' role='cell' key={index}>
                    {value}
                </span>
            ))}
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
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default TableLink