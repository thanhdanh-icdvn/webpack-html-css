const mockProducts = [
  {
    id: 1,
    name: 'Iphone',
    quantity: 100,
    price: 27000000
  },
  {
    id: 2,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 3,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 4,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  },
  {
    id: 5,
    name: 'Iphone',
    quantity: 100,
    price: 27000000
  },
  {
    id: 6,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 7,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 8,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  },
  {
    id: 9,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 10,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 11,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  },
  {
    id: 12,
    name: 'Iphone',
    quantity: 100,
    price: 27000000
  },
  {
    id: 13,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 14,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 15,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  },
  {
    id: 16,
    name: 'Iphone',
    quantity: 100,
    price: 27000000
  },
  {
    id: 17,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 18,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 19,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  },
  {
    id: 20,
    name: 'Samsung',
    quantity: 28,
    price: 22000000
  },
  {
    id: 21,
    name: 'Nokia',
    quantity: 10,
    price: 15000000
  },
  {
    id: 22,
    name: 'Sony',
    quantity: 44,
    price: 25000000
  }
]

export const getProductListApi = (): Promise<ResGetProductApi> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockProducts
        },
        message: 'Lấy sản phẩm thành công'
      })
    }, 5000)
  })

export const getProductItemApi = (id: string): Promise<ResGetProductItemApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find((product) => product.id + '' === id)
      if (product) {
        resolve({
          data: {
            product
          },
          message: 'Lấy sản phẩm thành công'
        })
      } else {
        reject(new Error('Không tìm thấy sản phẩm'))
      }
    }, 100)
  })
