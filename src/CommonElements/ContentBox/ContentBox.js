const ContentBox = (props) => {
  return (
    <div className="ContentBox" {...props.attr}>
      {props.children}
    </div>
  );
};

export { ContentBox };
