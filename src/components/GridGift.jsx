import { ListGridGift } from './ListGiftGrid';
import {useFetchGifs} from '.././Hooks/useFetchGifs'


export const GridGift = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  return (
    <>
      <p className='card-title'> {category}</p>
      {
        isLoading && ( <h2>Loading...</h2>)
      }



      <div className='card-grid'>
        {
          images.map(( image ) => (
            <ListGridGift
              key={image.id}
              {... image}
            />
          ))
        }
      </div>
    </>
  )
}
