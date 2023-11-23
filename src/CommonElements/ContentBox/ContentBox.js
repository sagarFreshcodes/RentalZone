const ContentBox = (props) => {
  return <div style={{width:"100%",padding:"1rem"}} {...props.attr}>{props.children}</div>;
};

export { ContentBox };
