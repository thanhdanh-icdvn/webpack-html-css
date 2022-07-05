import MainLayout from '../../../layouts/MainLayout'
import { connect, ConnectedProps } from 'react-redux'
import { getProductItem } from './ProductItem.thunks'
import { useParams } from 'react-router-dom'
import { handlePrice } from '../../../helper/priceString'
import { useEffect } from 'react'

const mapStateToProps = (state: AppState) => ({
  productItem: state.productItem.productItem
})

const mapDispatchToProps = {
  getProductItem
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function ProductItem(props: Props) {
  const { productItem, getProductItem } = props
  const params: { idProduct?: string } = useParams()
  useEffect(() => {
    const { idProduct } = params
    if (idProduct) {
      getProductItem(idProduct)
    }
  }, [params, getProductItem])
  return (
    <MainLayout>
      {productItem && (
        <>
          <h2>{productItem.name}</h2>
          <p>Price: {handlePrice(productItem.price)}</p>
          <p>Quantity: {productItem.quantity}</p>
        </>
      )}
    </MainLayout>
  )
}

export default connector(ProductItem)
