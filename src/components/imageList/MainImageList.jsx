import { ImageList, ImageListItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from '../../galleryModalSlice';
//import imagedata
import imageData from './imagedata';
import { useEffect } from 'react';

function MainImageList() {
	const dispatch = useDispatch();

	return (
		<ImageList
			sx={{ width: '100%', height: 800 }}
			variant="quilted"
			cols={3}
			rowHeight={164}>
			{imageData.map((item) => {
				return (
					<ImageListItem
						key={item}
						sx={{
							cursor: 'pointer',
							':hover': {
								filter: 'brightness(0.5)',
							},
						}}
						onClick={() => {
							dispatch(openModal(item));
						}}>
						<img src={item} alt={item} loading="lazy" />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
}

export default MainImageList;
