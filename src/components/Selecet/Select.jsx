import Form from 'react-bootstrap/Form';

export function Select({ handleSelect }) {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={e => {
        handleSelect(e.target.value);
      }}
    >
      <option>Вибери число</option>
      <option value="3">Три</option>
      <option value="5">П'ять</option>
      <option value="10">Десять</option>
    </Form.Select>
  );
}
