import Table from 'react-bootstrap/Table';

const CustomTable = (props) => {
    return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {props.titles.map(title => {
                            return <th>{title}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    {props.dataTable.map(row => {
                        return (
                            <tr>
                                {Object.values(row).map(data => {
                                    return <td>{data}</td>
                                })}
                            </tr>)
                    })}
                </tbody>
            </Table>
    )
}

export default CustomTable