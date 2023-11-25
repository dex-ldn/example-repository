import { useState } from 'react';
import { Box, Text, Textarea, TextareaInput } from '@gluestack-ui/themed';

export default function FormTextArea({label, value}) {
    const [data, setData] = useState(value)

    const handleChange = (e) => {
        setData(e.target.value)
    }

    return (
        <Box marginBottom="1rem">
            <Text color="white" marginBottom=".75rem">{label}</Text>
            <Textarea>
                <TextareaInput onChange={handleChange} color="white" value={data}/>
            </Textarea>
        </Box>
    )
}