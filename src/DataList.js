//? Admin edit page

import EditButton from "./EditButton";

const DatasList = ({ datas }) => {
  //? datas return is Javascript Object

  return (
    <div className="datas-table" key={datas.productId}>
      <h4>Info Section:</h4>

      <p>
        Date created:<b> {datas.itemDate}</b>
      </p>
      <p>
        Name: <b>{datas.name}</b>
      </p>
      <p>
        Email: <b>{datas.email}</b>
      </p>
      <p>
        Phone: <b>{datas.phone}</b>
      </p>
      <p>
        Chain Type:<b>{datas.chainType}</b>
      </p>
      <p>
        Metal Type:<b> {datas.metalType}</b>
      </p>
      <p>
        Size Length: <b>{datas.sizeLength}</b>
      </p>
      <p>
        Width:<b> {datas.width}</b>
      </p>
      <p>
        Weight: <b>{datas.weight}</b>
      </p>
      <p>
        Clasp:<b> {datas.clasp}</b>
      </p>
      <p>
        Gem Stone: <b>{datas.gemStone}</b>
      </p>
      {/* <p key={datas.photo}>
        <b>Photo:</b> {datas.photo}
      </p> */}

      <br />
      <h4> Edit</h4>
      <EditButton productId={datas.productId} item={"name"} />
      <EditButton productId={datas.productId} item={"email"} />
      <EditButton productId={datas.productId} item={"chainType"} />
      <EditButton productId={datas.productId} item={"phone"} />
      <EditButton productId={datas.productId} item={"chainType"} />
      <EditButton productId={datas.productId} item={"metalType"} />
      <EditButton productId={datas.productId} item={"sizeLength"} />
      <EditButton productId={datas.productId} item={"width"} />
      <EditButton productId={datas.productId} item={"weight"} />
      <EditButton productId={datas.productId} item={"clasp"} />
      <EditButton productId={datas.productId} item={"gemStone"} />
    </div>
  );
};

export default DatasList;
