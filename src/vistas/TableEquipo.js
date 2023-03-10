import React from 'react'
import { Table } from 'reactstrap'

const TableEquipo = ({data}) => {
  return (
   <Table striped responsive>  
     <thead>
        <tr>
            <th>Nombre</th>
            <th>Presidente</th>            
        </tr>
     </thead>
     <tbody>
        {
            (data.length > 1) ? (
                <tr>
                    <td>Sin registros</td>
                </tr>
            ) : (
                data.map((item)=>(

                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.presidente}</td>
                    </tr>         
                    )
                
                )

            )
        }
     </tbody>
   </Table>
  )
}

export default TableEquipo