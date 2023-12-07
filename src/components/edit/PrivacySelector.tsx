import FormSelect from './FormSelect';
import Privacy from 'src/types/Privacy';

export default function PrivacySelector() {
  return (
    <FormSelect label="Privacy" name="privacy">
      <option value={Privacy.PRIVATE}>Private</option>
      <option value={Privacy.PUBLIC}>Public</option>
    </FormSelect>
  );
}
