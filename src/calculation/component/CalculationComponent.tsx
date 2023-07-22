import { useState } from 'react';
import CalculationResult from './CalculationResult';
import CalculationForm from './CalculationForm';
type formValues = {
  dragFKS: number;
  dragFKE: number;
  dragGVS: number;
  dragGVE: number;
  dragORE: number;
  dragORS: number;
  dragJWE: number;
  dragJWS: number;
  dragMWE: number;
  dragMWS: number;
  dragBonus: number;
  dragTips: number;
  dragCAE: number;
  dragCAS: number;
  dragCPay: number;
  dragCOut: number;
  dragCIN: number;
  jessicaFKS: number;
  jessicaFKE: number;
  jessicaGVS: number;
  jessicaGVE: number;
  jessicaORS: number;
  jessicaORE: number;
  jessicaJWS: number;
  jessicaJWE: number;
  jessicaMWS: number;
  jessicaMWE: number;
  jessicaBonus: number;
  jessicaTips: number;
  jessicaCAE: number;
  jessicaCAS: number;
  jessicaCPay: number;
  jessicaCOut: number;
  jessicaCIN: number;
};
function CalculationComponent() {
  const delay = (ms: number) => (
    console.log('delay started'),
    new Promise((resolve) => setTimeout(resolve, ms)),
    console.log('delay Ended')
  );
  var cDragFKD: number;
  var cDragGVD: number;
  var cDragORD: number;
  var cDragJWD: number;
  var cDragMWD: number;
  var cDragCAD: number;
  var cDragSales: number;
  var cDragIncome: number;
  var cDragBalance: number;
  var cJessicaFKD: number;
  var cJessicaGVD: number;
  var cJessicaORD: number;
  var cJessicaJWD: number;
  var cJessicaMWD: number;
  var cJessicaSales: number;
  var cJessicaIncome: number;
  var cJessicaBalance: number;
  var cJessicaCAD: number;
  var cOverall: number;

  function calculate(data: formValues) {
    cDragFKD = data.dragFKS - data.dragFKE;
    cDragGVD = data.dragGVS - data.dragGVE;
    cDragORD = data.dragORS - data.dragORE;
    console.log(data.dragORS);
    console.log('value test');
    console.log(cDragORD);
    cDragMWD = data.dragMWS - data.dragMWE;
    cDragJWD = data.dragJWS - data.dragJWE;
    cDragCAD = data.dragCAE - data.dragCAS;
    cJessicaFKD = data.jessicaFKS - data.jessicaFKE;
    cJessicaGVD = data.jessicaGVS - data.jessicaGVE;
    cJessicaORD = data.jessicaORS - data.jessicaORE;
    cJessicaMWD = data.jessicaMWS - data.jessicaMWE;
    cJessicaJWD = data.jessicaJWS - data.jessicaJWE;
    cJessicaCAD = data.jessicaCAE - data.jessicaCAS;

    cDragSales =
      cDragFKD +
      cDragGVD +
      cDragORD +
      cDragMWD +
      cDragJWD -
      data.dragBonus +
      data.dragTips;
    cDragIncome = cDragCAD + data.dragCIN + data.dragCOut - data.dragCPay;

    cJessicaSales =
      cJessicaFKD +
      cJessicaGVD +
      cJessicaORD +
      cJessicaMWD +
      cJessicaJWD -
      data.jessicaBonus +
      data.jessicaTips;
    cJessicaIncome =
      cJessicaCAD + data.jessicaCIN + data.jessicaCOut - data.jessicaCPay;

    cDragBalance = cDragIncome - cDragSales;
    cJessicaBalance = cJessicaIncome - cJessicaSales;
    cOverall = cDragBalance + cJessicaBalance;
  }

  const [dataDetails, setDataDetails] = useState({
    dragFKS: 0,
    dragFKE: 0,
    dragGVS: 0,
    dragGVE: 0,
    dragORE: 0,
    dragORS: 0,
    dragJWE: 0,
    dragJWS: 0,
    dragMWE: 0,
    dragMWS: 0,
    dragBonus: 0,
    dragTips: 0,
    dragCAE: 0,
    dragCAS: 0,
    dragCPay: 0,
    dragCOut: 0,
    dragCIN: 0,
    jessicaFKS: 0,
    jessicaFKE: 0,
    jessicaGVS: 0,
    jessicaGVE: 0,
    jessicaORS: 0,
    jessicaORE: 0,
    jessicaJWS: 0,
    jessicaJWE: 0,
    jessicaMWS: 0,
    jessicaMWE: 0,
    jessicaBonus: 0,
    jessicaTips: 0,
    jessicaCAE: 0,
    jessicaCAS: 0,
    jessicaCPay: 0,
    jessicaCOut: 0,
    jessicaCIN: 0,
  });
  const [calcSwitch, setCalcSwitch] = useState('form');
  const [difference, setDifference] = useState({
    dragFKD: 0,
    dragGVD: 0,
    dragORD: 0,
    dragMWD: 0,
    dragJWD: 0,
    dragCAD: 0,
    dragSales: 0,
    dragIncome: 0,
    dragBalance: 0,
    jessicaFKD: 0,
    jessicaGVD: 0,
    jessicaORD: 0,
    jessicaMWD: 0,
    jessicaJWD: 0,
    jessicaCAD: 0,
    jessicaSales: 0,
    jessicaIncome: 0,
    jessicaBalance: 0,
    overall: 0,
  });

  const onSubmit = (data: formValues) => {
    calculate(data);
    setDataDetails(() => ({
      dragFKS: data.dragFKS,
      dragFKE: data.dragFKE,
      dragGVS: data.dragGVS,
      dragGVE: data.dragGVE,
      dragORE: data.dragORE,
      dragORS: data.dragORS,
      dragJWE: data.dragJWE,
      dragJWS: data.dragJWS,
      dragMWE: data.dragMWE,
      dragMWS: data.dragMWS,
      dragBonus: data.dragBonus,
      dragTips: data.dragTips,
      dragCAE: data.dragCAE,
      dragCAS: data.dragCAS,
      dragCPay: data.dragCPay,
      dragCOut: data.dragCOut,
      dragCIN: data.dragCIN,
      jessicaFKS: data.jessicaFKS,
      jessicaFKE: data.jessicaFKE,
      jessicaGVS: data.jessicaGVS,
      jessicaGVE: data.jessicaGVE,
      jessicaORE: data.jessicaORE,
      jessicaORS: data.jessicaORS,
      jessicaJWE: data.jessicaJWE,
      jessicaJWS: data.jessicaJWS,
      jessicaMWE: data.jessicaMWE,
      jessicaMWS: data.jessicaMWS,
      jessicaBonus: data.jessicaBonus,
      jessicaTips: data.jessicaTips,
      jessicaCAE: data.jessicaCAE,
      jessicaCAS: data.jessicaCAS,
      jessicaCPay: data.jessicaCPay,
      jessicaCOut: data.jessicaCOut,
      jessicaCIN: data.jessicaCIN,
    }));
    setDifference((difference) => ({
      ...difference,
      dragFKD: cDragFKD,
      dragGVD: cDragGVD,
      dragORD: cDragORD,
      dragMWD: cDragMWD,
      dragJWD: cDragJWD,
      dragCAD: cDragCAD,
      jessicaFKD: cJessicaFKD,
      jessicaGVD: cJessicaGVD,
      jessicaORD: cJessicaORD,
      jessicaMWD: cJessicaMWD,
      jessicaJWD: cJessicaJWD,
      jessicaCAD: cJessicaCAD,
      dragSales: cDragSales,
      dragIncome: cDragIncome,
      jessicaSales: cJessicaSales,
      jessicaIncome: cJessicaIncome,

      dragBalance: cDragBalance,
      jessicaBalance: cJessicaBalance,
      overall: cOverall,
    }));
    delay(20000);
    setCalcSwitch('calc');
    console.log(difference);
  };

  const onFinalSubmit = () => {
    console.log('FInaaly submitted to DB');
  };

  const onEdit = () => {
    setCalcSwitch('form');
  };

  return (
    <div>
      <div className="mb-3 text-center">
        <h1 className="text-center"> Red Dragon Calculation</h1>
      </div>
      {calcSwitch === 'form' ? (
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <CalculationForm onSubmit={onSubmit} />
        </div>
      ) : null}

      {calcSwitch === 'calc' ? (
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <CalculationResult
            dataDetails={dataDetails}
            difference={difference}
            onEdit={onEdit}
            onSubmit={onFinalSubmit}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CalculationComponent;
