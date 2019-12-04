const handleGoBack = props => {
  const { state } = props.location;

  if (state) {
    return props.history.push(state.from);
  }

  return props.history.push({
    pathname: '/',
  });
};

export default handleGoBack;
