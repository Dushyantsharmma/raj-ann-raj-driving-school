export default function LazyMount({ children, label = "Loading section..." }) {
  return <div aria-label={label}>{children || <p>{label}</p>}</div>;
}
