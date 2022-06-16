export const GenericList = (props) => {
  //if (!props.list) return props.loadingUI ? props.loadingUI : <Loading />;
  if (props.list?.length === 0)
    return props.loadingUI ? (
      props.loadingUI
    ) : (
      <>No hay elementos que mostrar</>
    );
  else return props.children;
};
