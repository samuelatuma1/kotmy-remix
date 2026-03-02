
import React, { useState, useEffect, useRef } from 'react';
import { ICurrencyBanks } from '~/services/wallet/types/wallet.interface';

interface SearchableSelectProps {
  options: ICurrencyBanks[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const ChevronDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.code === value);

  const filteredOptions = searchTerm
    ? options.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (selectedOption) {
        setSearchTerm(selectedOption.name);
    } else {
        setSearchTerm('');
    }
  }, [value, selectedOption]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSelectOption = (optionCode: string) => {
    onChange(optionCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          className={className}
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronDownIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-2xl mt-1 max-h-60 overflow-y-auto shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <li
                key={option.code}
                onClick={() => handleSelectOption(option.code)}
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {option.name}
              </li>
            ))
          ) : (
            <li className="px-5 py-3 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableSelect;
