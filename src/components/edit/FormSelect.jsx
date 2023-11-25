import { Box, Text, Select, SelectTrigger, SelectInput, SelectIcon, Icon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from '@gluestack-ui/themed'
export default function FormSelect({ selectOptions, selectedValue, selectedLabel, label }) {
    return (
        <Box>
            <Text color='white'>{label}</Text>
            <Select selectedValue={selectedValue} selectedLabel={selectedLabel}>
                <SelectTrigger variant="outline" size="md">
                    <SelectInput color="white" placeholder="Select option" />
                    <SelectIcon mr="$3">
                        <Icon as={ChevronDownIcon} color='white'/>
                    </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                        { Object.entries(selectOptions).map(([key, value]) => (
                            <SelectItem color="white" label={key} value={value}/>
                        ))
                        }
                    </SelectContent>
                </SelectPortal>
            </Select>
        </Box>)
}