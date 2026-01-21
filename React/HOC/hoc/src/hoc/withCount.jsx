const withCount = (Wrappedcomponent) => (props) => {
    
  return <Wrappedcomponent {...props} />
}

export default withCount
