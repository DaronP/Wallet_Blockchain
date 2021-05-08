import '../css/Balance.css';

function Balance() {
  return (

    <div className="balance">
      <div className="square">
        <div className="myAcc">
          <a>ETH: 0.00000</a>
          <a>Gas: 0.00000</a>
          <a>Total: 0.00000</a>
          <div>
            <button className="btn-primary">Confirmar</button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Balance;