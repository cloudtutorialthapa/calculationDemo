interface Props {
  dataDetails: {
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
  difference: {
    dragFKD: number;
    dragGVD: number;
    dragORD: number;
    dragMWD: number;
    dragJWD: number;
    dragCAD: number;
    dragSales: number;
    dragIncome: number;
    dragBalance: number;
    jessicaFKD: number;
    jessicaGVD: number;
    jessicaORD: number;
    jessicaMWD: number;
    jessicaJWD: number;
    jessicaCAD: number;
    jessicaSales: number;
    jessicaIncome: number;
    jessicaBalance: number;
    overall: number;
  };
}
const CalculationResult = ({ dataDetails, difference }: Props) => {
  const name = 'Drag';
  const name2 = 'Jessica';

  return (
    <div className="justify-content-center">
      <table className="table text-center table-bordered w-auto">
        <thead>
          <tr>
            <th className="text-center" colSpan={4}>
              {name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platform</td>
            <td className="text-center">Starting</td>
            <td className="text-center">Ending</td>
            <td className="text-center">Difference</td>
          </tr>
          <tr>
            <td>{name} FK</td>
            <td>{dataDetails.dragFKS}</td>
            <td>{dataDetails.dragFKE}</td>
            <td>{difference.dragFKD}</td>
          </tr>
          <tr>
            <td>{name} GV </td>
            <td>{dataDetails.dragGVS}</td>
            <td>{dataDetails.dragGVE}</td>
            <td>{difference.dragGVD}</td>
          </tr>
          <tr>
            <td>{name} OR</td>
            <td>{dataDetails.dragORS}</td>
            <td>{dataDetails.dragORE}</td>
            <td>{difference.dragORD}</td>
          </tr>
          <tr>
            <td>{name} MW</td>
            <td>{dataDetails.dragMWS}</td>
            <td>{dataDetails.dragMWE}</td>
            <td>{difference.dragMWD}</td>
          </tr>
          <tr>
            <td>{name} JW</td>
            <td>{dataDetails.dragJWS}</td>
            <td>{dataDetails.dragJWE}</td>
            <td>{difference.dragJWD}</td>
          </tr>
          <tr>
            <td> Bonus</td>
            <td colSpan={3}>{dataDetails.dragBonus}</td>
          </tr>
          <tr>
            <td> Tips</td>
            <td colSpan={3}>{dataDetails.dragTips}</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <div className="mb-3"></div>
            </td>
          </tr>
          <tr>
            <td>{name} CA</td>
            <td>{dataDetails.dragCAS}</td>
            <td>{dataDetails.dragCAE}</td>
            <td>{difference.dragCAD}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash Pay</td>
            <td>{dataDetails.dragCPay}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash Out</td>
            <td>{dataDetails.dragCOut}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash IN</td>
            <td>{dataDetails.dragCIN}</td>
          </tr>
          <tr>
            <td colSpan={3}>Calculation</td>
            <td>{difference.dragBalance}</td>
          </tr>
        </tbody>
      </table>
      <table className="table text-center table-bordered w-auto">
        <thead>
          <tr>
            <th className="text-center" colSpan={4}>
              {name2}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platform</td>
            <td className="text-center">Starting</td>
            <td className="text-center">Ending</td>
            <td className="text-center">Difference</td>
          </tr>
          <tr>
            <td>{name2} FK</td>
            <td>{dataDetails.jessicaFKS}</td>
            <td>{dataDetails.jessicaFKE}</td>
            <td>{difference.jessicaFKD}</td>
          </tr>
          <tr>
            <td>{name2} GV </td>
            <td>{dataDetails.jessicaGVS}</td>
            <td>{dataDetails.jessicaGVE}</td>
            <td>{difference.jessicaGVD}</td>
          </tr>
          <tr>
            <td>{name2} OR</td>
            <td>{dataDetails.jessicaORS}</td>
            <td>{dataDetails.jessicaORE}</td>
            <td>{difference.jessicaORD}</td>
          </tr>
          <tr>
            <td>{name2} MW</td>
            <td>{dataDetails.jessicaMWS}</td>
            <td>{dataDetails.jessicaMWE}</td>
            <td>{difference.jessicaMWD}</td>
          </tr>
          <tr>
            <td>{name2} JW</td>
            <td>{dataDetails.jessicaJWS}</td>
            <td>{dataDetails.jessicaJWE}</td>
            <td>{difference.jessicaJWD}</td>
          </tr>
          <tr>
            <td> Bonus</td>
            <td colSpan={3}>{dataDetails.jessicaBonus}</td>
          </tr>
          <tr>
            <td> Tips</td>
            <td colSpan={3}>{dataDetails.jessicaTips}</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <div className="mb-3"></div>
            </td>
          </tr>
          <tr>
            <td>{name2} CA</td>
            <td>{dataDetails.jessicaCAS}</td>
            <td>{dataDetails.jessicaCAE}</td>
            <td>{difference.jessicaCAD}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash Pay</td>
            <td>{dataDetails.jessicaCPay}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash Out</td>
            <td>{dataDetails.jessicaCOut}</td>
          </tr>
          <tr>
            <td colSpan={3}>Cash IN</td>
            <td>{dataDetails.jessicaCIN}</td>
          </tr>
          <tr>
            <td colSpan={3}>Calculation</td>
            <td>{difference.jessicaBalance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculationResult;
