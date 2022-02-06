import { InputGrpN } from '@/components/common/utils/InputGrp'
import { v4 as uuid } from 'uuid'
import { handleAddVariant, handleDeleteVariant, handleVariant } from '@/helpers/dashboard/add-product-helpers'
import React from 'react'
import { FaPlus, FaTimesCircle } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'

const Colors = ({ colors, setcolors }) => {
  return (
    <>
      {colors.length > 0 && (
        <>
          <h3>Colors</h3>
          <div className="flex flex-wrap">
            {colors.map((color, i) => (
              <div
                key={color.id}
                className="d-flex flex-column p-3 mx-1 my-4 shadow shadow-lg"
                style={{ maxWidth: '420px' }}
              >
                <h3>
                  <i>Color {i + 1}</i>
                </h3>
                <InputGrpN
                  name="colorName"
                  label="Color Name"
                  placeholder="Color Name(Ex: Magenta)"
                  onChange={(e) => handleVariant(colors, setcolors, e, color.id)}
                  value={color.colorName}
                />
                <InputGrpN
                  name="colorCode"
                  label="Color Code"
                  onChange={(e) => handleVariant(colors, setcolors, e, color.id)}
                  value={color.colorCode}
                  type="color"
                />
                <Button
                  basic
                  className="d-flex align-items-center justify-content-center"
                  color="red"
                  type="button"
                  onClick={() => handleDeleteVariant(colors, setcolors, color.id)}
                >
                  <FaTimesCircle />
                  <span className="px-1"></span>Delete Color
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
      <Button
        onClick={() =>
          handleAddVariant(colors, setcolors, {
            id: uuid(),
            colorName: '',
            colorCode: '#0062B1'
          })
        }
        basic
        secondary
        type="button"
        className="d-block my-3"
      >
        <FaPlus /> Add a Color
      </Button>
    </>
  )
}

export default Colors
