import { useState } from 'react';
import { Box, Text, Textarea, TextareaInput } from '@gluestack-ui/themed';

export default function FormTextArea({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [data, setData] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <Box marginBottom="1rem">
      <Text color="white" marginBottom=".75rem">
        {label}
      </Text>
      <Textarea>
        <TextareaInput onChange={handleChange} color="white" value={data} />
      </Textarea>
    </Box>
  );
}
