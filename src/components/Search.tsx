type SearchProps = {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="w-72 rounded-md">
      <input type="text" placeholder="Search a product" value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
