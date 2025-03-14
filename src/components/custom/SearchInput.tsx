import { Input } from '@chakra-ui/react';
import { InputGroup } from '../ui/input-group';
import { LuSearch } from 'react-icons/lu';
import { FormEvent, useRef } from 'react';
import useGameQueryStore from '@/store';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const refSearch = useRef<HTMLInputElement>(null);
  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (refSearch.current) setSearchText(refSearch.current.value);
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
