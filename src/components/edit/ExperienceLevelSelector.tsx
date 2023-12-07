import FormSelect from './FormSelect';
import ExperienceLevel from 'src/types/ExperienceLevel';

export default function ExperienceLevelSelector() {
  return (
    <FormSelect label="Experience Level" name="experience_level">
      <option value={ExperienceLevel.BEGINNER}>Beginner</option>
      <option value={ExperienceLevel.INTERMEDIATE}>Intermediate</option>
      <option value={ExperienceLevel.ADVANCED}>Advanced</option>
    </FormSelect>
  );
}
