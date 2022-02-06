import { InputGrpN } from '@/components/common/utils/InputGrp'
import { v4 as uuid } from 'uuid'
import { handleAddVariant, handleDeleteVariant, handleVariant } from '@/helpers/dashboard/add-product-helpers'
import { FaPlus, FaTimesCircle } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'

const FrontCameraSensors = ({ frontCameraSensors, setfrontCameraSensors }) => {
  return (
    <>
      {frontCameraSensors.length > 0 && (
        <>
          <h3>Front Camera Sensors</h3>
          <div className="d-flex flex-wrap">
            {frontCameraSensors.map((sensor, i) => (
              <div key={sensor.id} className="d-flex flex-column p-3 mx-1 my-4 shadow shadow-lg">
                <h3>
                  <i>Sensor {i + 1}</i>
                </h3>
                <InputGrpN
                  name="megaPixels"
                  label="Mega Pixels"
                  placeholder="Mega Pixels"
                  required={true}
                  onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  value={sensor.megaPixels}
                  type="number"
                />
                <div className="d-flex mb-3">
                  <label htmlFor="sensorType">Sensor Type</label>
                  <select
                    id="sensorType"
                    name="sensorType"
                    value={sensor.sensorType}
                    onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  >
                    <option>- Select One -</option>
                    <option value="Primary">Primary</option>
                    <option value="Ultra-Wide">Ultra-Wide</option>
                    <option value="depth">depth</option>
                  </select>
                </div>
                {sensor.sensorType === 'Ultra-Wide' && (
                  <InputGrpN
                    name="fieldOfView"
                    label="Field of View(In degrees)"
                    placeholder="Field of View(For Ultra-Wide Lens)"
                    onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                    value={sensor.fieldOfView}
                    type="number"
                  />
                )}
                <InputGrpN
                  name="aperture"
                  label="Aperture"
                  placeholder="Aperture (Ex: 1.8)"
                  onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  value={sensor.aperture}
                  type="number"
                />
                <div className="d-flex mb-3">
                  <label htmlFor="ois">OIS / EIS</label>
                  <select
                    id="ois"
                    name="ois"
                    value={sensor.ois}
                    onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  >
                    <option>- Select One -</option>
                    <option value="OIS">OIS</option>
                    <option value="EIS">EIS</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <Button
                  basic
                  className="d-flex align-items-center justify-content-center"
                  color="red"
                  type="button"
                  onClick={() => handleDeleteVariant(frontCameraSensors, setfrontCameraSensors, sensor.id)}
                >
                  <FaTimesCircle />
                  <span className="px-1"></span>Delete Sensor Type
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
      <Button
        onClick={() =>
          handleAddVariant(frontCameraSensors, setfrontCameraSensors, {
            id: uuid(),
            megaPixels: '',
            sensorType: '',
            zoom: '',
            fieldOfView: '',
            aperture: '',
            ois: ''
          })
        }
        basic
        secondary
        type="button"
        className="d-block my-3"
      >
        <FaPlus /> Add Front Camera Sensor
      </Button>
    </>
  )
}

export default FrontCameraSensors
