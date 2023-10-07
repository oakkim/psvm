type SeperatorProps = {
  className?: string
}

const Separator = ({ className } : SeperatorProps) => {
  return (
    <div className={className}>--------------------</div>
  )
};

export default Separator;