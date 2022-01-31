import { InputGrpN } from '@/components/common/utils/InputGrp'
import { v4 as uuid } from 'uuid'
import { handleAddVariant, handleDeleteVariant, handleVariant } from '@/helpers/dashboard/add-product-helpers'
import React from 'react'
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
                <InputGrpN
                  name="sensorType"
                  label="Sensor Type"
                  placeholder="(Ex: Primary, Telephoto, Ultra-Wide, etc)"
                  required={true}
                  onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  value={sensor.sensorType}
                />
                <InputGrpN
                  name="zoom"
                  label="Zoom (X times)"
                  placeholder="Zoom (For Telephoto Lens)"
                  onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  value={sensor.zoom}
                  type="number"
                />
                <InputGrpN
                  name="fieldOfView"
                  label="Field of View(In degrees)"
                  placeholder="Field of View(For Ultra-Wide Lens)"
                  onChange={(e) => handleVariant(frontCameraSensors, setfrontCameraSensors, e, sensor.id)}
                  value={sensor.fieldOfView}
                  type="number"
                />
                <Button
                  basic
                  className="d-flex align-items-center justify-content-center"
                  color="red"
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
            fieldOfView: ''
          })
        }
        basic
        secondary
        className="d-block my-3"
      >
        <FaPlus /> Add Front Camera Sensor
      </Button>
    </>
  )
}

export default FrontCameraSensors
