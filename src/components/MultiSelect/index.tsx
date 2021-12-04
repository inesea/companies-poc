// import CloseIcon from '@mui/icons-material/Close'
import {
  Checkbox,
  FormControl,
  // IconButton,
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

  // const handleClearAll = () => {
  //   onChangeSelection([])
  // }

  return (
    <FormControl size="small" sx={{ m: 1, width: 300, display: 'flex' }}>
      <InputLabel id="multiple-checkbox-label">{placeholder}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput label={placeholder} />}
        renderValue={(selected) => <div>{selected.join(', ')}</div>}
      >
        {options.map(({ key, label }: { key: string; label: string }) => (
          <MenuItem key={key} value={label}>
            <Checkbox checked={selectedOptions.includes(key)} />
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Select>
      {/* <IconButton
        size="small"
        tabIndex={-1}
        aria-label="Clear content"
        onClick={handleClearAll}
        onMouseDown={handleClearAll}
      >
        <CloseIcon onClick={handleClearAll} />
      </IconButton> */}
    </FormControl>
  )
}
