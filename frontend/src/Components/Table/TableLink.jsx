import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const TableLink = ({data, headers, height='420px'}) => {
    
    return ( 
        <div role="table" className='w-100'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height}/>
        </div>
    )
}

const TableBody = ({dataContents, height}) => {
    const [selectedRow, setSelectedRow] = useState(null);

    return(
        <div className='d-flex flex-column w-100 gap-2 table-container-two' role='rowgroup' style={{height: height}}>
        {dataContents.map((data) => (
            <Link to={`/customer-profile/${data.id}`} state={{ customerData: data }} key={data.id} className='table-row unstyled rounded-3'>
                <div role='row' className={`table-row d-flex text-center py-2 rounded-3 ${selectedRow === data ? 'selected' : ''}`} onClick={() => setSelectedRow(data)} >
                {Object.values(data).map((value, index) => (
                    <span className='w-100 text-truncate' style={{fontSize: '12px'}} role='cell' key={index}>
                        {value}
                    </span>
                ))}
                </div>
            </Link>
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