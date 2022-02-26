import { isNonEmpty, isNonEmptyArr, isNonEmptyString } from '@/helpers/product-details-helpers'
import React from 'react'
import ArrayShower from './ArrayShower'
import ObjectChildShower from './ObjectChildShower'
import ObjectShower from './ObjectShower'
import SingleShower from './SingleShower'

const ProductDetailsSpecs = ({ product }) => {
  const {
    os,
    processor,
    frontCamera,
    backCamera,
    battery,
    batteryType,
    dimensions,
    display,
    weight,
    driver,
    chargingSpeed,
    axis,
    boxContents,
    flyingTime,
    ports,
    capacity,
    length,
    camera,
    imageSensor
  } = product
  return (
    <div id="specifications">
      <h3 className="py-2">Specifications</h3>
      <SingleShower thing={os} title="Operating System" />
      <ObjectShower thing={processor} title="Processor">
        <ObjectChildShower title="Brand" thing={processor.brand} />
        <ObjectChildShower title="Model" thing={processor.model} />
        <ObjectChildShower title="Number of core" thing={processor.core} />
        <ObjectChildShower title="Details" thing={processor.details} />
        <ObjectChildShower title="GPU details" thing={processor.gpu} />
      </ObjectShower>
      <ObjectShower thing={frontCamera} title="Front Camera">
        {isNonEmptyArr(frontCamera.sensor) && (
          <div className="d-flex flex-wrap">
            {frontCamera.sensor.map((sensor) => (
              <div key={sensor.id} className="border px-3 py-2 me-2 mb-2">
                <ObjectChildShower title="Sensor" thing={sensor.sensorType} />
                <ObjectChildShower title="Capacity" thing={`${sensor.megaPixels} MP`} />
                <ObjectChildShower title="Zoom" thing={`${sensor.zoom} times`} />
                <ObjectChildShower title="Field of view" thing={`${sensor.fieldOfView}°`} />
                <ObjectChildShower title="Aperture" thing={sensor.aperture} />
                <ObjectChildShower title="OIS/EIS" thing={sensor.ois} />
              </div>
            ))}
          </div>
        )}
      </ObjectShower>
      <SingleShower thing={frontCamera.videoCapability} title="Video Capability" />
      <ObjectShower thing={backCamera} title="Back Camera">
        {isNonEmptyArr(backCamera.sensor) && (
          <div className="d-flex flex-wrap">
            {backCamera.sensor.map((sensor) => (
              <div key={sensor.id} className="border px-3 py-2 me-2 mb-2">
                <ObjectChildShower title="Sensor" thing={sensor.sensorType} />
                <ObjectChildShower title="Capacity" thing={`${sensor.megaPixels} MP`} />
                <ObjectChildShower title="Zoom" thing={`${sensor.zoom} times`} />
                <ObjectChildShower title="Field of view" thing={`${sensor.fieldOfView}°`} />
                <ObjectChildShower title="Aperture" thing={sensor.aperture} />
                <ObjectChildShower title="OIS/EIS" thing={sensor.ois} />
              </div>
            ))}
          </div>
        )}
      </ObjectShower>
      <SingleShower thing={backCamera.videoCapability} title="Video Capability" />
      {isNonEmptyString(battery) && (
        <div className="d-flex py-2 align-items-center">
          <h4>Battery :</h4>
          <p className="ps-4">
            {battery} mAh {isNonEmptyString(batteryType) && <span>({batteryType})</span>}
          </p>
        </div>
      )}
      <ObjectShower thing={dimensions} title="Dimensions">
        {isNonEmptyString(dimensions.length) && <span className="pe-1">{dimensions.length}</span>}
        {isNonEmptyString(dimensions.width) && (
          <span className="pe-1">
            {' '}
            <span className="pe-1">x</span> {dimensions.width}
          </span>
        )}
        {isNonEmptyString(dimensions.thickness) && (
          <span>
            {' '}
            <span className="pe-1">x</span> {dimensions.thickness}
          </span>
        )}
        <span className="ps-1">mm</span>
      </ObjectShower>
      <ObjectShower thing={display} title="Display">
        <ObjectChildShower title="Type" thing={display.displayType} />
        <ObjectChildShower title="Size" thing={`${display.displaySize} inch`} />
        <ObjectChildShower title="Resolution" thing={display.displayResolution} />
        <ObjectChildShower title="Screen to body ratio" thing={`${display.displayScreenToBodyRatio}%`} />
        <ObjectChildShower title="Refresh rate" thing={`${display.refreshRate} Hz`} />
      </ObjectShower>
      <SingleShower thing={weight} title="Weight" />
      <SingleShower thing={driver} title="Number of driver" />
      <SingleShower thing={`${chargingSpeed} Watt`} title="Charging Speed" />
      <SingleShower thing={driver} title="Number of driver" />
      <SingleShower thing={axis} title="Number of axis" />
      <ArrayShower title="Box contents" thing={boxContents} />
      <SingleShower thing={`${flyingTime} minutes`} title="Flying Time" />
      <ArrayShower title="Ports" thing={ports} />
      <SingleShower thing={`${capacity} mAh`} title="Battery Capacity" />
      <SingleShower thing={`${length} m`} title="Cable length" />
      <SingleShower thing={`${camera} MP`} title="Camera" />
      <SingleShower thing={imageSensor} title="Image Sensor" />
    </div>
  )
}

export default ProductDetailsSpecs
