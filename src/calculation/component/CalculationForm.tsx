import { useForm } from 'react-hook-form';

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

interface Props {
  onSubmit: (data: formValues) => void;
}

const CalculationForm = ({ onSubmit }: Props) => {
  const name = 'Drag';
  const name2 = 'Jessica';
  const { register, handleSubmit } = useForm<formValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="justify-content-center">
        <table className="table text-center table-bordered w-auto">
          <thead>
            <tr>
              <th className="text-center" colSpan="3">
                {name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platform</td>
              <td className="text-center">Starting</td>
              <td className="text-center">Ending</td>
            </tr>
            <tr>
              <td>{name} FK</td>
              <td>
                <input
                  {...register('dragFKS', { valueAsNumber: true })}
                  id="dragFKS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragFKE', { valueAsNumber: true })}
                  id="dragFKE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name} GV </td>
              <td>
                <input
                  {...register('dragGVS', { valueAsNumber: true })}
                  id="dragGVS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragGVE', { valueAsNumber: true })}
                  id="dragGVE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name} OR</td>
              <td>
                <input
                  {...register('dragORS', { valueAsNumber: true })}
                  id="dragORS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragORE', { valueAsNumber: true })}
                  id="dragORE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name} MW</td>
              <td>
                <input
                  {...register('dragMWS', { valueAsNumber: true })}
                  id="dragWMS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragMWE', { valueAsNumber: true })}
                  id="dragMWE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name} JW</td>
              <td>
                <input
                  {...register('dragJWS', { valueAsNumber: true })}
                  id="dragJWS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragJWE', { valueAsNumber: true })}
                  id="dragJWE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td> Bonus</td>
              <td colSpan="2">
                <input
                  {...register('dragBonus', { valueAsNumber: true })}
                  id="dragBonus"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td> Tips</td>
              <td colSpan="2">
                <input
                  {...register('dragTips', { valueAsNumber: true })}
                  id="dragTips"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <div className="mb-3"></div>
              </td>
            </tr>
            <tr>
              <td>{name} CA</td>
              <td>
                <input
                  {...register('dragCAS', { valueAsNumber: true })}
                  id="dragCAS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('dragCAE', { valueAsNumber: true })}
                  id="dragCAE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash Pay</td>
              <td colSpan="2">
                <input
                  {...register('dragCPay', { valueAsNumber: true })}
                  id="dragCPay"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash Out</td>
              <td colSpan="2">
                <input
                  {...register('dragCOut', { valueAsNumber: true })}
                  id="dragCOut"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash IN</td>
              <td colSpan="2">
                <input
                  {...register('dragCIN', { valueAsNumber: true })}
                  id="dragCIN"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-1"></div>
        <table className="table table-bordered w-auto">
          <thead>
            <tr>
              <th className="text-center" colSpan="3">
                {name2}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platform</td>
              <td className="text-center">Starting</td>
              <td className="text-center">Ending</td>
            </tr>
            <tr>
              <td>{name2} FK</td>
              <td>
                <input
                  {...register('jessicaFKS', { valueAsNumber: true })}
                  id="jessicaFKS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaFKE', { valueAsNumber: true })}
                  id="jessicaFKE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name2} GV </td>
              <td>
                <input
                  {...register('jessicaGVS', { valueAsNumber: true })}
                  id="jessicaGVS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaGVE', { valueAsNumber: true })}
                  id="jessicaGVE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name2} OR</td>
              <td>
                <input
                  {...register('jessicaORS', { valueAsNumber: true })}
                  id="jessicaORS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaORE', { valueAsNumber: true })}
                  id="jessicaORE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name2} MW</td>
              <td>
                <input
                  {...register('jessicaMWS', { valueAsNumber: true })}
                  id="jessicaMWS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaMWE', { valueAsNumber: true })}
                  id="jessicaMWE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>{name2} JW</td>
              <td>
                <input
                  {...register('jessicaJWS', { valueAsNumber: true })}
                  id="jessicaJWS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaJWE', { valueAsNumber: true })}
                  id="jessicaJWE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td> Bonus</td>
              <td colSpan="2">
                <input
                  {...register('jessicaBonus', { valueAsNumber: true })}
                  id="jessicaBonus"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td> Tips</td>
              <td colSpan="2">
                <input
                  {...register('jessicaTips', { valueAsNumber: true })}
                  id="jessicaTips"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <div className="mb-3"></div>
              </td>
            </tr>
            <tr>
              <td>{name2} CA</td>
              <td>
                <input
                  {...register('jessicaCAS', { valueAsNumber: true })}
                  id="jessicaCAS"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  {...register('jessicaCAE', { valueAsNumber: true })}
                  id="jessicaCAE"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash Pay</td>
              <td colSpan="2">
                <input
                  {...register('jessicaCPay', { valueAsNumber: true })}
                  id="jessicaCPay"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash Out</td>
              <td colSpan="2">
                <input
                  {...register('jessicaCOut', { valueAsNumber: true })}
                  id="jessicaCOut"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <td>Cash IN</td>
              <td colSpan="2">
                <input
                  {...register('jessicaCIN', { valueAsNumber: true })}
                  id="jessicaCIN"
                  type="text"
                  className="form-control"
                  defaultValue={0}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary text-center">Submit</button>
      </div>
    </form>
  );
};

export default CalculationForm;
