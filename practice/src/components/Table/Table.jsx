function Table({ allStudents }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>company</th>
          <th>role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allStudents.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
