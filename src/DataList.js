import EditButton from "./EditButton";

const DatasList = ({ datas }) => {
  //? datas return is Javascript Object

  return (
    <div className="datas-table" key={datas.productId}>
      <h4>Info Section:</h4>
      <p> Chain Type:{datas.chainType}</p>
      <p key={datas.email}>Email: {datas.email}</p>
      <p key={datas.phone}>Phone: {datas.phone}</p>
      <p key={datas.photo}>
        <b>Photo:</b> {datas.photo}
      </p>

      <br />
      <h4> Edit</h4>
      <EditButton productId={datas.productId} item={"email"} />
      <EditButton productId={datas.productId} item={"chainType"} />
      <EditButton productId={datas.productId} item={"phone"} />
    </div>
  );
};

export default DatasList;
