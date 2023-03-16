import { FC, PropsWithChildren } from 'react';
import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces'
import { ProductCard } from '.'

interface Props extends PropsWithChildren<{}>{
    products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {

  return (
    <Grid container spacing={4}>
        {
            products.map( product => (
                <ProductCard 
                    key={ product.slug }
                    product={ product }
                />
            ))
        }
    </Grid>
  )
}
