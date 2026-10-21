function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-350 px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container

