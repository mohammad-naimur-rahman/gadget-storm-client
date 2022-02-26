import { isNonEmptyArr } from '@/helpers/product-details-helpers'

const ArrayShower = ({ thing, title }) => {
  return (
    <>
      {isNonEmptyArr(thing) && (
        <div className="d-flex flex-column flex-md-row py-2">
          <h4>{title} :</h4>
          <div className="d-flex ps-0 ps-md-3">
            {thing.map((item) => (
              <div className="d-flex align-items-center px-3 py-1 border rounded rounded-pill mb-1 mx-1" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ArrayShower
