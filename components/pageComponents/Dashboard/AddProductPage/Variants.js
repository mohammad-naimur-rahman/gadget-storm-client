import { InputGrpN } from '@/components/common/utils/InputGrp'
import { v4 as uuid } from 'uuid'
import { handleAddVariant, handleDeleteVariant, handleVariant } from '@/helpers/dashboard/add-product-helpers'
import React from 'react'
import { FaPlus, FaTimesCircle } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import { Button } from 'semantic-ui-react'
import { showConditionaly } from '@/helpers/helpers'

const Variants = ({ variants, setvariants, category }) => {
  return (
    <>
      {variants.length > 0 && (
        <>
          <h3 className="ms-2">Variants</h3>
          <div className="d-flex flex-wrap">
            {variants?.map((variant, i) => (
              <div key={variant.id} className="d-flex flex-column p-3 mx-1 my-4 shadow shadow-lg">
                <h3>
                  <i>Variant {i + 1}</i>
                </h3>
                <InputGrpN
                  name="ram"
                  label="Ram"
                  placeholder="Ram (in GB)"
                  required={true}
                  onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                  value={variant.ram}
                  type="number"
                />
                {showConditionaly(category, ['smartPhone', 'tablet']) && (
                  <InputGrpN
                    name="rom"
                    label="Rom"
                    placeholder="Rom (in GB)"
                    onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                    value={variant.rom}
                    type="number"
                  />
                )}
                {showConditionaly(category, ['laptop']) && (
                  <>
                    <InputGrpN
                      name="storage"
                      label="Storage"
                      placeholder="Storage"
                      onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                      value={variant.storage}
                      type="number"
                    />
                    <InputGrpN
                      name="storageUnit"
                      label="Storage Unit"
                      placeholder="Unit (GB, TB, etc)"
                      onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                      value={variant.storageUnit}
                    />
                    <InputGrpN
                      name="size"
                      label="Size"
                      placeholder="Size"
                      onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                      value={variant.size}
                      type="number"
                    />
                    <InputGrpN
                      name="sizeUnit"
                      label="Size Unit"
                      placeholder="Unit (inch, cm, etc)"
                      onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                      value={variant.sizeUnit}
                    />
                  </>
                )}
                <InputGrpN
                  name="basePrice"
                  label="Base Price"
                  placeholder="Base Price"
                  required={true}
                  onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                  value={variant.basePrice}
                  type="number"
                />
                <InputGrpN
                  name="discount"
                  label="Discount"
                  placeholder="Discount (In dollars or %)"
                  onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                  value={variant.discount}
                />
                <div className="d-flex mb-3" data-for="main" data-tip="Price is calculated <br /> automatically">
                  <label>Price</label>
                  <p className="price">{variant.price}</p>
                  <ReactTooltip id="main" place="right" multiline={true} />
                </div>
                <Button
                  basic
                  className="d-flex align-items-center justify-content-center"
                  color="red"
                  onClick={() => handleDeleteVariant(variants, setvariants, variant.id)}
                >
                  <FaTimesCircle />
                  <span className="px-1"></span>Delete Variant
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
      {showConditionaly(category, ['smartPhone', 'laptop', 'tablet']) && (
        <Button
          onClick={() =>
            handleAddVariant(variants, setvariants, {
              id: uuid(),
              ram: '',
              rom: '',
              storage: '',
              storageUnit: '',
              size: '',
              sizeUnit: '',
              basePrice: '',
              discount: '',
              price: 0
            })
          }
          basic
          secondary
          className="d-block my-3"
        >
          <FaPlus /> Add a variant
        </Button>
      )}
    </>
  )
}

export default Variants
