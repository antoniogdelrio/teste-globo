export const Typography = ({
    size,
    children,
    className
}) => {
    switch (size) {
        case('h1'): {
            return <h1 className={`text-xl font-bold ${className}`}>
                {children}
            </h1>
        }
        case('h2'): {
            return <h2 className={`text-sm font-bold ${className}`}>
                {children}
            </h2>
        }
    }
}

export default {}
