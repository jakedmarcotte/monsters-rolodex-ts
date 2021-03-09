import './search-box.styles.css'

export interface SearchBoxProps {
  placeholder?: string;
  handleChange: (event: { target: HTMLInputElement }) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <input
      className='search'
      type="search"
      onChange={props.handleChange}
      placeholder={props.placeholder ?? 'Search Monsters'}
    />
  );
}
