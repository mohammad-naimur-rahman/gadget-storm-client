import { InputGrpN } from '@/components/common/utils/InputGrp'
import { handleAddGrp, handleDeleteGrp } from '@/helpers/dashboard/add-product-helpers'
import { Button } from 'semantic-ui-react'

const InputGroups = ({ title, singleGetter, singleSetter, getter, setter }) => {
  return (
    <>
      <h3>{title}s</h3>
      {getter && (
        <div className="d-flex flex-wrap align-items-center">
          {getter.map((el) => (
            <p key={el} className="d-flex align-items-center rounded rounded-pill ps-2 text-white m-1 pill-box">
              {el}{' '}
              <span
                className="rounded rounded-circle ms-2 cross-mini-btn"
                onClick={() => handleDeleteGrp(el, getter, setter)}
              >
                x
              </span>
            </p>
          ))}
        </div>
      )}
      <div className="d-flex align-items-center mt-2">
        <InputGrpN
          label={`Add ${title}`}
          placeholder={`Input a ${title}`}
          value={singleGetter}
          onChange={(e) => singleSetter(e.target.value)}
        />
        <Button
          basic
          color="blue"
          type="button"
          onClick={() => handleAddGrp(singleGetter, singleSetter, getter, setter)}
          className="ms-3 add-mini-btn"
        >
          +
        </Button>
      </div>
    </>
  )
}

export default InputGroups
