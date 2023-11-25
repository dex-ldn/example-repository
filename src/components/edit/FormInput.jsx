import { useState } from 'react';
import { Box, Input, InputField, Text } from '@gluestack-ui/themed';

export default function FormInput({label, value}) {
    const [data, setData] = useState(value)

    const handleChange = (e) => {
        setData(e.target.value)
    }

    return (
        <Box marginBottom="1rem">
            <Text color="white" marginBottom=".75rem">{label}</Text>
            <Input >
                <InputField value={data} onChange={handleChange} color="white"/>
            </Input>
        </Box>
    )
}
