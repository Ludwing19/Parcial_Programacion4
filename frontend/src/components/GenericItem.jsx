export const GenericItem = (props) => {
  return (
    <>
      <div className="card col-md-4" style={{ width: "20rem", margin: "1rem" }}>
        <img
          className="card-img-top"
          src={props.img_url}
          alt="solar system image"
        />
        <div className="card-body" style={{ color: "black" }}>
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">{props.Description}</p>
        </div>
      </div>
    </>
  );
};
