import MainLayout from '../../../layouts/MainLayout'
import { connect, ConnectedProps } from 'react-redux'
import { getProductItem } from './ProductItem.thunks'
import { useNavigate, useParams } from 'react-router-dom'
import { handlePrice } from '../../../helper/priceString'
import { Fragment, useEffect } from 'react'
import { GoBackButton } from './ProductItem.styles'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Helmet } from 'react-helmet-async'
const mapStateToProps = (state: AppState) => ({
  productItem: state.productItem.productItem
})

const mapDispatchToProps = {
  getProductItem
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function ProductItem(props: Props): JSX.Element {
  const { productItem, getProductItem } = props
  const params: { productId?: string } = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    const { productId } = params
    if (productId) {
      getProductItem(productId)
    }
  }, [params, getProductItem])
  return (
    <Fragment>
      <Helmet>
        <title>{params.productId} | Product Detail</title>
      </Helmet>
      <MainLayout>
        <GoBackButton type='button' onClick={handleGoBack} className='btn btn-outline-success'>
          <RiArrowGoBackFill />
          Go Back
        </GoBackButton>
        {productItem && (
          <>
            <h2>{productItem.name}</h2>
            <p>Price: {handlePrice(productItem.price)}</p>
            <p>Quantity: {productItem.quantity}</p>
          </>
        )}
      </MainLayout>
    </Fragment>
  )
}

export default connector(ProductItem)
