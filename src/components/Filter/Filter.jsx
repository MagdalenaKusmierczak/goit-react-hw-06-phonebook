import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const searchQuery = evt.target.value.toLowerCase();
    dispatch(addFilter(searchQuery));
  };

  return (
    <Label>
      Find contacts by name
      <Input onChange={handleChange} type="text" name="filter" />
    </Label>
  );
};

export default Filter;
