'use client'

import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FC, ReactNode, useState } from 'react'

export type ComboboxItem = {
  value: string | number
  label: string
  icon?: ReactNode
}

type ComboboxProps = {
  value?: string | number
  items: ComboboxItem[]
  onChange: (value: string | number) => void
  canSearch?: boolean
  placeholder: string
  size?: "small" | "medium" | "large"
}

export const widthSize = {
  small : 160,
  medium: 200,
  large: 250
}

export const Combobox: FC<ComboboxProps> = ({
  items,
  value = '',
  onChange,
  canSearch = false,
  placeholder,
  size = 'small'
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`justify-between`}
          style={{
            width: widthSize[size]
          }}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`p-0`} style={{
        width: widthSize[size]
      }}>
        <Command>
          {canSearch && (
            <>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
            </>
          )}
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={(currentValue) => {
                  onChange(currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
