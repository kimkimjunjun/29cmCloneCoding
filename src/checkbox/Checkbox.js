function Checkbox({ children, disabled, checked, onChange }) {
    return (
      <label style={{cursor:'pointer'}}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
          style={{cursor:'pointer'}}
        />
        {children}
      </label>
    );
  }

export default Checkbox;