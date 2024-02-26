import PropTypes from 'prop-types';
import{Label, Input} from './Filter.styled'
const Filter = ({ filter, handleFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input onChange={handleFilter} type="text" name="filter" value={filter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;
