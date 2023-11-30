import { useState } from 'react';
import { Box, Input, InputField, Text } from '@gluestack-ui/themed';

export default function FormInput({
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
      <Input>
        <InputField value={data} onChange={handleChange} color="white" />
      </Input>
    </Box>
  );
}
