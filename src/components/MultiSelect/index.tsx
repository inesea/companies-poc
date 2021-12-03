import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'

export default ({
  options,
  onChangeSelection,
  selectedOptions,
  placeholder,
}: {
  options: {
    key: string
    label: string
  }[]
  onChangeSelection: (options: string[]) => void
  selectedOptions: string[]
  placeholder: string
}): JSX.Element => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChangeSelection(event.target.value as string[])
  }

  return (
    <FormControl size="small" sx={{ m: 1, width: 300 }}>
      <InputLabel id="multiple-checkbox-label">{placeholder}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput label={placeholder} />}
        renderValue={(selected) => selected.join(', ')}
      >
        {options.map(({ key, label }: { key: string; label: string }) => (
          <MenuItem key={key} value={label}>
            <Checkbox checked={selectedOptions.includes(key)} />
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
