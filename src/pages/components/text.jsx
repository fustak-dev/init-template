export function Text({ children, ...props }) {
    return <U tag="p" fontSize="18px" marginTop="16px" { ...props }>{children}</U>;
}