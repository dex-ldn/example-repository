import Privacy from './Privacy';
import ExperienceLevel from './ExperienceLevel';
import MuscleGroup from './MuscleGroup';

export type Workout = {
  _id: string;
  name: string;
  info: string;
  muscleGroups: MuscleGroup[] | string[];
  privacy: Privacy | string;
  experienceLevel: ExperienceLevel | string;
};
