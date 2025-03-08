import { Input } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import { LuSearch } from 'react-icons/lu';
import { FormEvent, useRef } from 'react';

interface Props {
  onSearchText: (searchText: string) => void;
}

const SearchInput = ({ onSearchText }: Props) => {
  const refSearch = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (refSearch.current) onSearchText(refSearch.current.value);
  };
  return (
    <form style={{ width: '100%' }} onSubmit={handleSearch}>
      <InputGroup startElement={<LuSearch />} width="100%">
        <Input
          ref={refSearch}
          borderRadius={'2xl'}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
